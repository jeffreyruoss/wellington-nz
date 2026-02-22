/**
 * SidebarController — renders location cards, distance table,
 * and handles route-toggle interactions.
 *
 * Depends on: window.AppData, window.MapController
 */
window.SidebarController = (function () {
  'use strict';

  var routeVisible = false;

  /* ───── public ───── */

  function init() {
    renderLocationCards();
    renderDistanceTable();

    var btn = document.getElementById('route-toggle');
    if (btn) btn.addEventListener('click', toggleRoute);
  }

  /* ───── location cards ───── */

  function renderLocationCards() {
    var container = document.getElementById('location-list');
    if (!container) return;

    var locations = window.AppData.LOCATIONS;
    var html = '';

    for (var i = 0; i < locations.length; i++) {
      html += buildCardHTML(locations[i]);
    }

    container.innerHTML = html;

    // Attach click and keyboard handlers
    var cards = container.querySelectorAll('.location-card');
    for (var j = 0; j < cards.length; j++) {
      cards[j].addEventListener('click', handleCardClick);
      cards[j].addEventListener('keydown', handleCardKeydown);
    }
  }

  function buildCardHTML(loc) {
    var accessClass = loc.accessible ? 'accessible' : 'not-accessible';
    var accessLabel = loc.accessible ? 'Accessible' : 'Limited access';
    var snippet = loc.description.length > 120
      ? loc.description.substring(0, 117) + '...'
      : loc.description;

    return (
      '<div class="location-card" data-location-id="' + loc.id + '" tabindex="0" role="button">' +
        '<div class="card-header">' +
          '<h3 class="location-card-title">' + escapeHTML(loc.name) + '</h3>' +
          '<span class="location-card-film">' + escapeHTML(loc.film) + '</span>' +
        '</div>' +
        '<p class="card-subtitle">' + escapeHTML(loc.subtitle) + '</p>' +
        '<p class="location-card-description">' + escapeHTML(snippet) + '</p>' +
        '<span class="location-card-accessibility ' + accessClass + '">' +
          '<span class="access-dot"></span> ' + accessLabel +
        '</span>' +
      '</div>'
    );
  }

  function handleCardClick() {
    var id = Number(this.getAttribute('data-location-id'));
    if (window.MapController && window.MapController.flyToLocation) {
      window.MapController.flyToLocation(id);
    }
    highlightCard(id);
  }

  function handleCardKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick.call(this);
    }
  }

  /* ───── highlight ───── */

  function highlightCard(locationId) {
    var cards = document.querySelectorAll('.location-card');
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('active');
    }

    var target = document.querySelector(
      '.location-card[data-location-id="' + locationId + '"]'
    );
    if (target) {
      target.classList.add('active');
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /* ───── route toggle ───── */

  function toggleRoute() {
    routeVisible = !routeVisible;

    var btn = document.getElementById('route-toggle');
    var table = document.getElementById('distance-table');

    if (routeVisible) {
      if (btn) {
        btn.textContent = 'Hide Driving Route';
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
      if (table) table.hidden = false;
      if (window.MapController && window.MapController.showRoute) {
        window.MapController.showRoute();
      }
    } else {
      if (btn) {
        btn.textContent = 'Show Driving Route';
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
      if (table) table.hidden = true;
      if (window.MapController && window.MapController.hideRoute) {
        window.MapController.hideRoute();
      }
    }

    // Recalculate map size after sidebar content changes
    if (window.MapController && window.MapController.invalidateSize) {
      window.MapController.invalidateSize();
    }
  }

  /* ───── distance table ───── */

  function getLocationName(id) {
    var locations = window.AppData.LOCATIONS;
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].id === id) return locations[i].name;
    }
    return String(id);
  }

  function renderDistanceTable() {
    var tbody = document.getElementById('distance-table-body');
    if (!tbody) return;

    var segments = window.AppData.ROUTE_SEGMENTS;
    var totalKm = 0;
    var totalMin = 0;
    var html = '';

    for (var i = 0; i < segments.length; i++) {
      var seg = segments[i];
      totalKm += seg.distanceKm;
      totalMin += seg.drivingMins;

      html +=
        '<tr>' +
          '<td>' + escapeHTML(getLocationName(seg.from)) + '</td>' +
          '<td>' + escapeHTML(getLocationName(seg.to)) + '</td>' +
          '<td>' + seg.distanceKm + ' km</td>' +
          '<td>' + seg.drivingMins + ' min</td>' +
        '</tr>';
    }

    html +=
      '<tr class="total-row">' +
        '<td colspan="2"><strong>Total</strong></td>' +
        '<td><strong>' + totalKm + ' km</strong></td>' +
        '<td><strong>' + totalMin + ' min</strong></td>' +
      '</tr>';

    tbody.innerHTML = html;

    // Add route exclusion note after the table
    var tableContainer = document.getElementById('distance-table');
    if (tableContainer && !tableContainer.querySelector('.route-note')) {
      var note = document.createElement('p');
      note.className = 'route-note';
      note.textContent = 'Route covers 9 of 13 locations. Putangirua Pinnacles, Queen Elizabeth Park, Fernside, and Stone Street Studios are better as separate trips.';
      tableContainer.appendChild(note);
    }
  }

  /* ───── helpers ───── */

  var _escDiv = document.createElement('div');
  function escapeHTML(str) {
    _escDiv.textContent = String(str);
    return _escDiv.innerHTML;
  }

  /* ───── expose ───── */

  return {
    init: init,
    highlightCard: highlightCard,
    toggleRoute: toggleRoute
  };
})();

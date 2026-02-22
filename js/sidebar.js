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
      var loc = locations[i];
      html += buildCardHTML(loc);
    }

    container.innerHTML = html;

    // Attach click handlers
    var cards = container.querySelectorAll('.location-card');
    for (var j = 0; j < cards.length; j++) {
      cards[j].addEventListener('click', handleCardClick);
    }
  }

  function buildCardHTML(loc) {
    var accessClass = loc.accessible ? 'accessible' : 'not-accessible';
    var accessLabel = loc.accessible ? 'Accessible' : 'Limited access';
    var snippet = loc.description.length > 120
      ? loc.description.substring(0, 117) + '...'
      : loc.description;

    return (
      '<div class="location-card" data-location-id="' + loc.id + '">' +
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
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  /* ───── route toggle ───── */

  function toggleRoute() {
    routeVisible = !routeVisible;

    var btn = document.getElementById('route-toggle');
    var table = document.getElementById('distance-table');

    if (routeVisible) {
      if (btn) { btn.textContent = 'Hide Driving Route'; btn.classList.add('active'); }
      if (table) table.hidden = false;
      if (window.MapController && window.MapController.showRoute) {
        window.MapController.showRoute();
      }
    } else {
      if (btn) { btn.textContent = 'Show Driving Route'; btn.classList.remove('active'); }
      if (table) table.hidden = true;
      if (window.MapController && window.MapController.hideRoute) {
        window.MapController.hideRoute();
      }
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
  }

  /* ───── helpers ───── */

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ───── expose ───── */

  return {
    init: init,
    highlightCard: highlightCard,
    toggleRoute: toggleRoute
  };
})();

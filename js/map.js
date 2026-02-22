/**
 * LOTR Wellington Filming Locations - Map Controller
 * Manages the Leaflet map, markers, popups, and driving route.
 */
(function () {
  'use strict';

  var map;
  var markers = {};
  var activeMarkerId = null;
  var routeLayer = null;
  var routeNumberLayers = [];

  function getLocationById(id) {
    var locations = window.AppData.LOCATIONS;
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].id === id) return locations[i];
    }
    return null;
  }

  function createPopupContent(loc) {
    var accessIcon = loc.accessible ? '&#x2714;' : '&#x2718;';
    var accessClass = loc.accessible ? 'accessible-yes' : 'accessible-no';

    return (
      '<div class="popup-content">' +
        '<h3 class="popup-title">' + loc.name + '</h3>' +
        '<p class="popup-subtitle">' + loc.subtitle + '</p>' +
        '<p class="popup-description">' + loc.description + '</p>' +
        '<div class="popup-meta">' +
          '<p><strong>Film:</strong> ' + loc.film + '</p>' +
          '<p><strong>Parking:</strong> ' + loc.parking + '</p>' +
          '<p class="' + accessClass + '"><span>' + accessIcon + '</span> ' + loc.accessNotes + '</p>' +
        '</div>' +
      '</div>'
    );
  }

  function createMarkers() {
    var locations = window.AppData.LOCATIONS;

    locations.forEach(function (loc) {
      var icon = L.divIcon({
        className: 'marker-icon',
        html: '<div class="marker-pin"><div class="marker-ring"></div></div>',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
      });

      var marker = L.marker(loc.coords, { icon: icon })
        .addTo(map)
        .bindPopup(createPopupContent(loc), {
          className: 'lotr-popup',
          maxWidth: 300
        })
        .bindTooltip(loc.name, {
          direction: 'top',
          offset: [0, -44]
        });

      marker.on('click', function () {
        highlightMarker(loc.id);
        if (window.SidebarController && window.SidebarController.highlightCard) {
          window.SidebarController.highlightCard(loc.id);
        }
      });

      markers[loc.id] = marker;
    });
  }

  function init() {
    map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    createMarkers();

    var bounds = [];
    window.AppData.LOCATIONS.forEach(function (loc) {
      bounds.push(loc.coords);
    });
    map.fitBounds(bounds, { padding: [50, 50] });
  }

  function flyToLocation(locationId) {
    var loc = getLocationById(locationId);
    if (!loc) return;

    highlightMarker(locationId);
    map.flyTo(loc.coords, 15, { duration: 1.2 });

    var marker = markers[locationId];
    if (marker) {
      setTimeout(function () {
        marker.openPopup();
      }, 1300);
    }
  }

  function highlightMarker(locationId) {
    unhighlightMarker();
    var marker = markers[locationId];
    if (marker) {
      var el = marker.getElement();
      if (el) {
        el.classList.add('active');
      }
      activeMarkerId = locationId;
    }
  }

  function unhighlightMarker() {
    if (activeMarkerId !== null && markers[activeMarkerId]) {
      var el = markers[activeMarkerId].getElement();
      if (el) {
        el.classList.remove('active');
      }
      activeMarkerId = null;
    }
  }

  function showRoute() {
    hideRoute();

    var routeOrder = window.AppData.ROUTE_ORDER;
    var coords = [];

    routeOrder.forEach(function (id) {
      var loc = getLocationById(id);
      if (loc) coords.push(loc.coords);
    });

    routeLayer = L.polyline(coords, {
      color: '#daa520',
      weight: 3,
      dashArray: '10, 10',
      opacity: 0.8
    }).addTo(map);

    routeOrder.forEach(function (id, index) {
      var loc = getLocationById(id);
      if (!loc) return;

      var numIcon = L.divIcon({
        className: 'route-number',
        html: '<span>' + (index + 1) + '</span>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      var numMarker = L.marker(loc.coords, {
        icon: numIcon,
        interactive: false,
        zIndexOffset: 1000
      }).addTo(map);

      routeNumberLayers.push(numMarker);
    });

    map.fitBounds(routeLayer.getBounds(), { padding: [50, 50] });
  }

  function hideRoute() {
    if (routeLayer) {
      map.removeLayer(routeLayer);
      routeLayer = null;
    }
    routeNumberLayers.forEach(function (layer) {
      map.removeLayer(layer);
    });
    routeNumberLayers = [];
  }

  window.MapController = {
    init: init,
    flyToLocation: flyToLocation,
    showRoute: showRoute,
    hideRoute: hideRoute,
    highlightMarker: highlightMarker,
    unhighlightMarker: unhighlightMarker
  };
})();

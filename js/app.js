/**
 * App bootstrap — initialises map and sidebar controllers.
 */
document.addEventListener('DOMContentLoaded', function () {
  try {
    window.MapController.init();
  } catch (e) {
    var mapEl = document.getElementById('map');
    if (mapEl) mapEl.textContent = 'Map failed to load. Please refresh or check your connection.';
  }
  window.SidebarController.init();
});

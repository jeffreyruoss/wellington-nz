/**
 * App bootstrap — initialises map and sidebar controllers.
 */
document.addEventListener('DOMContentLoaded', function () {
  MapController.init();
  SidebarController.init();
  console.log('LOTR Wellington app initialized');
});

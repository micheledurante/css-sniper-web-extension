/**
 * Entry point for the app.
 * 
 * @author micheled
 * Created on 12.03.2017
 */
// Launch the App
var init = (function () {

  /**
   * Initialise js modules.
   * 
   */
  var utils = new Utils;
  var settings = new Settings;
  
  /**
   * We begin by creating an obejct that contains a list of locations set by the user.
   * The file specifies what stylesheet to inject to the pages.
   * 
   */
  var userSettings = settings.getUserSettings(utils);
})();

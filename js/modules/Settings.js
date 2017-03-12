/**
 * Contains functions related to Locations.
 * 
 * @author micheled
 * Created on 12.03.2017
 */
var Settings = function () {
    
    var userSettingsURL = 'http://micheledurante.co.uk/css-sniper-webextension/user_settings/100/user_settings.json';
    
    /**
     * Get settings for the user.
     * 
     * @param object utils The Utils module
     * @return object userSettings The settins parsed from the file
     */
    this.getUserSettings = function(utils) {
        
        // read json from config file
        var contents = utils.readFile(userSettingsURL);
        
        // save the contents in the app's config object
        var userSettings = JSON.parse(contents);
        alert(userSettings);
        
        return userSettings;
    }
};

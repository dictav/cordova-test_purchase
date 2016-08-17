cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cc.fovea.cordova.purchase.InAppBillingPlugin",
        "file": "plugins/cc.fovea.cordova.purchase/www/store-android.js",
        "pluginId": "cc.fovea.cordova.purchase",
        "clobbers": [
            "store"
        ]
    },
    {
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cc.fovea.cordova.purchase": "6.0.0",
    "cordova-plugin-app-version": "0.1.8"
};
// BOTTOM OF METADATA
});
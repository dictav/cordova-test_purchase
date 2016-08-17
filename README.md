## Get BILLING key

Access to Google Play Developer Console - Services and API
https://play.google.com/apps/publish/?dev_acc=14864084278603928038#ServicesAndApisPlace:p=com.dictav.test_purchase

## Upload APK

To create puchase item, we must upload APK that has permission 'com.android.vending.BILLING'

### Sign Android

https://developer.android.com/studio/publish/app-signing.html#signing-manually
```
keytool -genkey -v -keystore dictav.keystore -alias test_purchase -keyalg RSA -keysize 2048 -validity 10000
```

https://cordova.apache.org/docs/en/latest/guide/platforms/android/#signing-an-app
```
cordova build --release android -- --keystore=dictav.keystore  --alias=test_purchase
```

https://developer.android.com/studio/publish/app-signing.html#signing-manually
```
$ANDROID_HOME/build-tools/24.0.1/zipalign -v 4 platforms/android/build/outputs/apk/android-release.apk test_purchase.apk
```

## Create purchase items

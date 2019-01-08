# vuetify-cordova

A VuetifyJs App template ready for Cordova App.

Web demo in https://fraigo.github.io/vuetify-cordova/www/

Android demo in https://build.phonegap.com/apps/3121691/share

## Initial Setup

``` bash
# install dependencies
npm install

# add respective platforms
cordova platform add android
cordova platform add ios
```

## Build commands

```bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# create an Archive.zip package for Adobe Phonegap
npm run pack

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# build for production and cordova build.
npm run cordova-build

# build for production and serve the app through the browser - no hot reload.
npm run browser


# build for production and serve the app on an iOS device
npm run ios

# build for production and serve the app on an android device (won't serve on a virtual device)
npm run android

# build for production and serve the app on an android device (will serve on a virtual device or physical device - prefers virtual)
npm run android-vm
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Command line tools

### Cordova CLI

```
npm install -g cordova
```

### PhoneGap Build CLI

```
npm install -g pgb-cli
```

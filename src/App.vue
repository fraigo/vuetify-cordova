<template>
  <v-app :dark="config.menu.darkMode">
    <v-navigation-drawer
      fixed
      :mini-variant="config.menu.miniVariant"
      v-model="config.menu.opened"
      app
    >
      <menu-list :items="config.menu.items" @click="menuClick" :cordova-ready="isCordovaReady" :mini-variant="config.menu.miniVariant"></menu-list>
    </v-navigation-drawer>
    <v-toolbar app v-if="config.menu.toolbar">
      <v-btn icon  
        v-if="config.menu.items"
        @click="config.menu.opened = !config.menu.opened" 
        :title="lang.current.menu">
        <v-icon >fas fa-bars</v-icon>
      </v-btn>
      <v-toolbar-title v-text="config.app.title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- right menu-->
      <button-list :items="config.menu.buttons" :cordova-ready="isCordovaReady" @click="menuClick"></button-list>
    </v-toolbar>
    <v-content>
      <transition 
        name="animated" 
        enter-active-class="animated fadeIn"
        >
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import store from './config/store'
  import MenuList from './components/menu/MenuList.vue'
  import ButtonList from './components/menu/ButtonList.vue'

  import lang from './config/lang'
  import controller from './config/controller'

  window.$lang = lang

  export default {
    components: {
      menuList: MenuList,
      buttonList: ButtonList
    },
    data () {
      return {
        cordova: Vue.cordova,
        config: store.state,
        lang: lang,
        isCordovaReady: false
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
        self.isCordovaReady = true
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackButton, false)
        }
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackButton () {
        // Handle the back-button event on Android.
        // this.exitApp()
      },
      exitApp () {
        // By default it will exit the app.
        navigator.app.exitApp()
      },
      menuClick (item) {
        controller(item)
      }
    }
  }
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
  a:link{
    text-decoration: none;
  }
  
</style>

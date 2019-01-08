<template>
  <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <h1>WebView Properties</h1>
        </v-flex>
        <v-flex xs12 v-for="(value,key) in browser" :key="key">
          <h2>{{key}}</h2>
          <h4>{{value}}</h4>
        </v-flex>
        <v-flex xs12>
          <h1>CSS Compatibility</h1>
        </v-flex>
        <v-flex xs12 v-for="(items,index) in props" :key="index">
          <h2>{{index}}</h2>
          <h4>{{items}}</h4>
        </v-flex>
        <v-flex xs12 my-3>
          <router-link :to="{ name: 'Home', params: { }}">Home</router-link>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        props: {

        }
      }
    },
    created () {
      var prefixesTest = {
        transform: 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        transition: 'transition WebkitTransition MozTransition OTransition msTransition'.split(' ')
      }
      for (var key in prefixesTest) {
        var prefixes = prefixesTest[key]
        this.props[key] = []
        for (var i = 0; i < prefixes.length; i++) {
          if (document.createElement('div').style[prefixes[i]] !== undefined) {
            this.props[key].push(prefixes[i])
          }
        }
      }
      this.browser = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        onLine: navigator.onLine,
        maxTouchPoints: navigator.maxTouchPoints
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
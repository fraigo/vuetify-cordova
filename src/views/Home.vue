<template>
  <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12 sm6 >
          <img src="../assets/icon.png" alt="Vuetify1" class="mb-5">
        </v-flex>
        <v-flex xs12 sm6 my-3>
          <h3>{{lang.current.title}}</h3>
          <br>
          <router-link :to="{ name: 'Form', params: { }}"><v-icon >fab fa-wpforms</v-icon> {{lang.current.form}}</router-link>
          <br>
          <a href="https://github.com/fraigo/vuetify-cordova" ><v-icon >fab fa-github</v-icon> {{lang.current.github_project}}</a>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
    },
    data () {
      return {
        lang: window.$lang
      }
    },
    created () {
      this.lang.langs.en.title = 'Vuetify Template for Cordova Projects'
      this.lang.langs.es.title = 'Plantilla Vuetify para Proyectos Cordova'
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
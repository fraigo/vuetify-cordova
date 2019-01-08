<template>
  <v-container id="view">
      <v-layout row wrap >
        <v-flex xs12 sm4 >
          <h1>Title1</h1>
        </v-flex>
        <v-flex >
          Separator
        </v-flex>
        <v-flex xs12 sm4>
          <h2>Title2</h2>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import Comp from '../components/Component.vue'
  export default {
    components: {
      comp: Comp
    },
    props: {
    },
    data () {
      return {
        lang: window.$lang
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
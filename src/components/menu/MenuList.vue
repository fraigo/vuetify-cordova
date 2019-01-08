<template>
  <v-list>
    <v-list-tile 
      v-for="(item, i) in items"
      :key="i"
      :class="item.classes"
      v-show="!item.cordova || cordovaReady"
      @click="menuClick(item)">
    <menu-item :item="item" :icon-only="miniVariant"/>
</v-list-tile>
  </v-list>
</template>

<script>
  import MenuItem from './MenuItem.vue'
  export default {
    components: {
      menuItem: MenuItem
    },
    props: {
      items: Array,
      cordovaReady: {
        type: Boolean,
        default: false
      },
      miniVariant: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
      }
    },
    created () {
      // var self = this
    },
    methods: {
      menuClick (item) {
        this.$emit('click', item)
      }
    }
  }
</script>

<style scoped>
  .menu-separator{
    border-top:1px solid #EEE;
    height:2px !important;
  }
</style>
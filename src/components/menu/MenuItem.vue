<template>
  <v-layout row>
    <div class="menu-icon" @click="iconClick(item)"  :title="lang.expr(item.title)"><v-icon >{{item.icon}}</v-icon></div>
    <div v-show="!iconOnly" class="menu-label">{{lang.expr(item.title)}}</div>
  </v-layout>
</template>

<script>
  export default {
    props: {
      item: Object,
      iconOnly: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        lang: window.$lang
      }
    },
    created () {
      // var self = this
    },
    methods: {
      iconClick (item) {
        this.$emit('iconClick')
      }
    }
  }
</script>

<style >
  .menu-icon{
    width:40px;
    line-height:40px;
    height:40px;
    text-align:center;
  }
  .menu-label{
    line-height:40px;
    height:40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
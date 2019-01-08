<template>
  <div :is="componentType">
    [{{componentType}}]
    <span v-for="(item,key) in content" :key="key" >
      <div :is="item.componentType" :content="item.content" :component-type="item.componentType" ></div>
    </span> 
  </div>
</template>

<script>
  export default {
    name: 'comp',
    props: {
      horizontal: {
        type: Boolean,
        default: true
      },
      componentType: {
        type: String
      },
      content: {
        type: Array
      }
    },
    data () {
      return {
      }
    },
    created () {
      this.lang = window.$lang
      if (!window.counter) {
        window.counter = 1
      }
      console.log(window.counter++, this.componentType)
    },
    methods: {
      emit (eventName, param1) {
        this.$emit(eventName, param1)
      }
    }
  }
</script>

<style >
</style>
<template>
  <v-container >
      <v-layout row wrap align-center>
        <v-flex xs10 >
          <h1 >{{lang.expr(title)}}</h1>
        </v-flex>
        <v-flex xs2 align-right>
          <router-link :to="{ name: 'Home', params: { }}">{{lang.current.home}}</router-link>
        </v-flex>
        <v-flex xs12 :sm6="field.width==50" :sm4="field.width==33" :sm8="field.width==66"  px-1 v-for="(field, index) in formFields" :key="index" >
          <div
            :is="field.multiLine?'v-textarea':'v-text-field'"
            v-model="field.value"
            :label="lang.expr(field.label)"
            :placeholder="lang.expr(field.placeholder)"
            :error-messages="errors.collect(field.name)"
            :data-vv-name="field.name"
            v-validate="field.validation"
            :required="field.required"
            :mask="field.mask"
            :readonly="field.readonly"
            :type="field.type?field.type:'text'"
          ></div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      formFields: {
        type: Array
      },
      title: String
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
    }
  }
</script>

<style >
.input-group label{
  margin-top: -22px;
  -webkit-transform: none !important;
  transform: none !important;
  font-size: 0.9em;
}
</style>
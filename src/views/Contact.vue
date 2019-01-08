<template>
  <v-container >
      <v-layout row wrap align-center>
        <v-flex xs10 >
          <h1 >Contact form</h1>
        </v-flex>
        <v-flex xs2 align-right>
          <router-link :to="{ name: 'Home', params: { }}">Home</router-link>
        </v-flex>
        <v-flex xs12 px-1>
          <v-text-field
            v-model="contact.name"
            label="Name"
            placeholder="Enter your name"
            :error-messages="errors.collect('name')"
            data-vv-name="name"
            v-validate="'required|max:20'"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 :sm6="true" px-1>
          <v-text-field
            v-model="contact.email"
            label="E-mail"
            placeholder="Enter your email"
            :error-messages="errors.collect('email')"
            v-validate="'required|email'"
            data-vv-name="email"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 :sm6="true" px-1>
          <v-text-field
            v-model="contact.phone"
            label="Phone"
            placeholder="+1 111 111 1111"
            :error-messages="errors.collect('phone')"
            v-validate="{ required: true, regex: /[0-9]+/ }"
            data-vv-name="phone"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 align-center px-1>
        {{contact}}
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
        contact: {
        }
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
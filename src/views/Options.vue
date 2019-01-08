<template>
  <v-container>
      <v-layout row wrap>
        <v-flex xs12 >
          <h2>{{lang.current.options}}</h2>
        </v-flex>
        <v-flex xs12 sm6 my-3>
           <v-select
            :items="languages"
            v-model="lang.selected"
            :label="lang.expr('language')"
            item-value="code"
            @change="changeLang($event)"
            >
              <template slot="selection" slot-scope="data">
                {{data.item.name}}
              </template>
              <template slot="item" slot-scope="data">
                {{data.item.name}}
              </template>
            </v-select>
        </v-flex>
        <v-flex xs12 >
          <h2>{{lang.current.menu}}</h2>
        </v-flex>
        <v-flex xs12 sm6 my-3>
           <v-switch
            :label="lang.expr('Mini_menu')"
            v-model="store.state.menu.miniVariant"
            @change="doSwitch('miniVariant',$event)"
            ></v-switch>
        </v-flex>
        <v-flex xs12 sm6 my-3>
           <v-switch
            :label="lang.expr('Dark_mode')"
            v-model="store.state.menu.darkMode"
            @change="doSwitch('darkMode',$event)"
            ></v-switch>
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
        languages: [
          {
            code: 'es',
            name: 'Español'
          },
          {
            code: 'en',
            name: 'English'
          }
        ],
        lang: window.$lang,
        store: this.$store
      }
    },
    created () {
    },
    methods: {
      changeLang (lng) {
        this.lang.change(lng)
        this.store.commit('update', ['lang', lng])
      },
      doSwitch (varname) {
        var value = (this.store.state.menu[varname])
        this.store.commit('update', ['menu', varname, value])
      }
    }
  }
</script>

<style scoped>
a:link {
  text-decoration: none;
  color:#004;
}
.align-center{
  text-align:center;
}
</style>
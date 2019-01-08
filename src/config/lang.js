import langEs from '../data/lang.es.js'
import langEn from '../data/lang.en.js'
import store from '../config/store'

var lang = {
  langs: {
    es: langEs,
    en: langEn
  },
  default: 'en',
  selected: null,
  current: null,
  expr (expr, param0, param1) {
    if (!expr) return expr
    if (typeof expr === 'object') {
      param0 = expr[1]
      expr = expr[0]
    }
    var result = this.current[expr.toLowerCase()]
    if (!result) return expr
    result = result.replace('%0%', this.current[param0])
    result = result.replace('%1%', this.current[param1])
    return result
  },
  change (lng) {
    if (!this.langs[lng]) {
      lng = this.default
    }
    if (this.langs[lng]) {
      this.current = this.langs[lng]
      this.selected = lng
    }
  }
}

if (!lang.current) {
  var current = 'en'
  if (navigator.language) {
    current = navigator.language.toLowerCase().split('-')[0]
  }
  if (store.state.lang) {
    current = store.state.lang
  }
  lang.change(current)
}

export default lang

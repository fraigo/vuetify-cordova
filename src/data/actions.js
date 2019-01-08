import lang from '@/config/lang'

export default {
  exit () {
    if (confirm(lang.current.exit_application)) {
      navigator.app.exitApp()
    }
  },
  githubPage () {
    window.open('https://fraigo.github.io/vuetify-cordova/www/', '_blank')
  },
  githubProject () {
    window.open('https://github.com/fraigo/vuetify-cordova', '_blank')
  }
}

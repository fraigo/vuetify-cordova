import icons from '../data/icons'

export default [
  {
    icon: icons.home,
    title: 'home',
    route: 'Home',
    id: 'home'
  },
  {
    icon: icons.form,
    title: 'form',
    route: 'Form',
    id: 'form'
  },
  {
    icon: icons.html,
    title: 'browser',
    route: 'Props',
    id: 'props'
  },
  {
    icon: icons.github,
    title: 'github_project',
    id: 'githubProject'
  },
  {
    icon: icons.github,
    title: 'github_demo',
    id: 'githubPage'
  },
  {
    classes: ['menu-separator']
  },
  {
    icon: icons.options,
    title: 'options',
    route: 'Options',
    id: 'options'
  },
  {
    classes: ['menu-separator'],
    cordova: true
  },
  {
    icon: 'fas fa-sign-out-alt',
    title: 'Exit',
    id: 'exit',
    separator: true,
    cordova: true
  }
]

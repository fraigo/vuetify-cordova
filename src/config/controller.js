import appRouter from './router'
import actions from '../data/actions'

export default function (item, isButton) {
  if (item.route) {
    appRouter.push({
      name: item.route,
      params: item.params
    })
    return
  }
  if (actions[item.id]) {
    actions[item.id]()
    return
  }
  console.log('Clicked ' + item.title)
}

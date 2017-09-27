import Money from './component'
import VMoney from './directive'
import MoneyFilter from './filter'
import options from './options'
const VERSION = proccess.env.VERSION

export {
  Money,
  VMoney,
  options,
  VERSION
}

function install (Vue, globalOptions) {
  if (globalOptions) {
    Object.keys(globalOptions).map(function(key){
      options[key] = globalOptions[key]
    })
  }
  Vue.directive('money', VMoney)
  Vue.component('money', Money)
  Vue.filter('money', MoneyFilter)
}

export default install

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

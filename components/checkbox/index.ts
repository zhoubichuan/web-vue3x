import CheckBox from './src/checkbox.vue'
import type { App } from 'vue'
CheckBox.install = function (Vue: App) {
  Vue.component(CheckBox.name, CheckBox)
}
export default CheckBox

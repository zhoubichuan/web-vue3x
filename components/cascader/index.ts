import Cascader from './src/cascader.vue'
import type { App } from 'vue'
Cascader.install = function (app: App) {
  app.component(Cascader.name, Cascader)
}
export default Cascader

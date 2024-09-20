import VueTree from './src/input.vue'
/* istanbul ignore next */
VueTree.install = function (Vue) {
  Vue.component(VueTree.name, VueTree)
}
export default VueTree

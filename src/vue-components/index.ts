import VueTree from './tree/index'
import VueInput from './input/index'
import VueToast from './toast/index'
const components = [VueTree, VueInput, VueToast]
// @ts-ignore
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {
    version: '1.0.0',
    install,
}

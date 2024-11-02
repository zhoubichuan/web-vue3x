import { createApp, h } from 'vue'
import Toast from './src/toast.vue'
// import closeIconUrl from './src/assets/close.webp?url'
import successIconUrl from './src/assets/success.webp?url'
import warningIconUrl from './src/assets/warning.webp?url'
import errorIconUrl from './src/assets/error.webp?url'
interface NotificationParams {
    title?: string
    message?: string
    duration?: number
}
// @ts-ignore
let toastDiv: HTMLDivElement
function showToast(props: any) {
    if (!toastDiv) {
        toastDiv = document.createElement('div')
    }
    const element = createApp({
        render() {
            return h(Toast, props)
        },
    })
    // 添加div到根组件上
    document.querySelector('#app')?.appendChild(toastDiv)
    // Toast组件挂载到div内部
    element.mount(toastDiv)
}

export default showToast
export const error = (params: NotificationParams) => {
    const defaultOption = { title: '错误提示', message: '操作失败', duration: 2000 }
    const mergeOption = { ...defaultOption, ...params }
    showToast({
        ...mergeOption,
        icon: errorIconUrl,
    })
}
export const success = (params?: NotificationParams) => {
    const defaultOption = { title: '成功提示', message: '操作成功', duration: 2000 }
    const mergeOption = { ...defaultOption, ...params }
    showToast({
        ...mergeOption,
        icon: successIconUrl,
    })
}
export const warning = (params?: NotificationParams) => {
    const defaultOption = { title: '操作提醒', duration: 2000 }
    const mergeOption = { ...defaultOption, ...params }
    showToast({
        ...mergeOption,
        icon: warningIconUrl,
    })
}

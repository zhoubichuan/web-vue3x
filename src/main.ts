import { createApp } from 'vue'
import Vant from 'vant'
import App from '@/App.vue'
import router from '@/router'
import 'reset-css'
import 'vant/lib/index.css'
import 'amfe-flexible'
import { PullRefresh } from 'vant'

const app = createApp(App)

app.use(PullRefresh)

app.use(router)

app.use(Vant)

app.mount('#app')

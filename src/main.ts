import { createApp } from 'vue'
import App from './App.vue'
import naive from './naiveui'
import createAppRouter from './router/router'
import store from './store/index'

import '/@/assets/styles/index.scss' // global css
import '/@/assets/styles/ruoyi.scss' // it css

const app = createApp(App)

const router = createAppRouter()
// 注册 naive 组件
app.use(naive)
// 注册 router
app.use(router)
// 注册 Vuex
app.use(store)

app.mount('#app')


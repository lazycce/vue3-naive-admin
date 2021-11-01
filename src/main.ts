import { createApp } from 'vue'
import App from './App.vue'
import naive from './naiveui'
import createAppRouter from './router/router'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // it css

const app = createApp(App)

// 注册 naive 组件
app.use(naive)
// 注册 router
app.use(createAppRouter())

app.mount('#app')


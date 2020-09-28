import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {registerMicroApps, start} from 'qiankun'

Vue.config.productionTip = false
Vue.use(ElementUi)

const apps = [ // 多个子应用
  {
    name: 'child-vue',
    entry: '//localhost:10000', // 默认执行这个html，通过fetch加载js 动态执行，存在跨域问题，所以子应用必须支持跨域
    container: '#vue', // 挂载元素
    activeRule: '/vue' // 激活规则，当访问/vue时
  },
  {
    name: 'child-react',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
  }
]
registerMicroApps(apps) // 注册
start() // 开启应用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

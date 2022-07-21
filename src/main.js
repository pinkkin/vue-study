// 该文件是整个项目的人口文件

// 引入vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vue实例对象--vm
new Vue({
  el: '#app',
  render: h => h(App),
})

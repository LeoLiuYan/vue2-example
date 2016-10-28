import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    }
  ]
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

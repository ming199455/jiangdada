// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store'
axios.defaults.baseURL='https://wd7048015093opqhbq.wilddogio.com/'

Vue.config.productionTip = false

// router.beforeEach((to,from,next)=>{
//   if(to.path=='/login'||to.path=='/registry'){
//      next()
//   }else{
//     next('/login')
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

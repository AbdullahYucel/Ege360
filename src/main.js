import Vue from 'vue'
import App from './App.vue'
/* import VueRouter from 'vue-router' */
/* import NavBar from './components/NavBar.vue' */

Vue.config.productionTip = false

/* Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/location/:key', component: NavBar }],
  mode: 'history',
}) */

new Vue({
  el: '#app',
  render: (h) => h(App),
  /* router, */
})

import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/views/Loading'
import Welcome from '@/views/Welcome'
import Playing from '@/views/Playing'
import Result from '@/views/Result'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  }, {
    path: '/loading',
    name: 'Loading',
    component: Loading
  }, {
    path: '/playing',
    name: Playing,
    component: Playing
  }, {
    path: '/result',
    name: Result,
    component: Result
  }]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home'
import Classify from '../page/classify/classify'
import Cart from '../page/cart/cart'
import Mine from '../page/mine/mine'
import Entry from '../page/classify/entry'
import Help from '../page/classify/help'
import Healthy from '../page/classify/health'
import Details from '../page/details/product-details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "/",
      name : "Home",
      component : Home
    },
    {
      path : "/home",
      name : "Home",
      component : Home
    },
    {
      path : "/classify",
      name : "Classify",
      component : Classify,
      children : [
        { path : "" ,component : Entry },
        { path : "help" ,component : Help },
        { path : "health" ,component : Healthy },
      ]
    },
    {
      path : "/cart",
      name : "Cart",
      component : Cart
    },
    {
      path : "/mine",
      name : "Mine",
      component : Mine
    },
    {
      path : "/details",
      name : "Details",
      component : Details
    }
  ]
})

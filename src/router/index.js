import Vue from 'vue'
import Router from 'vue-router'
import tagsearch from '@/components/tagsearch'
import itemwrapper from '@/components/itemwrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tagsearch',
      component: tagsearch
    },
    {
      path: '/item/:stackNameUrl',
      name: 'item',
      component: itemwrapper,
      props: true,
    }
  ]
})

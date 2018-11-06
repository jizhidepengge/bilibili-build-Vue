import HomeView from '@/components/HomeView'
import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/components/IndexView'
import dynView from '@/components/dynView'
import ClassBlockView from '@/components/ClassBlockView'
import infoView from '@/components/infoView'
import PlayView from '@/components/PlayView'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      component: HomeView,
      children: [
          {
            path: '',
            name: 'IndexView',
            component: IndexView
          },
          {
            path: 'dyn',
            name: 'dynView',
            component: dynView
          },
          {
            path: 'classBlock',
            name: 'ClassBlockView',
            component: ClassBlockView
          },
          {
            path: 'info',
            name: 'infoView',
            component: infoView
          }
      ]
    },
    {
      path: '/play',
      name: 'PlayView',
      component: PlayView
    }
  ]
})

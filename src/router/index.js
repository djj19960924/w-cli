import Vue from 'vue'
import VueRouter from 'vue-router'
// 同步引入
import Home from '@/views/Home'
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 异步引入
    // 异步引入的代码依赖会在webpack工作的时候
    // 自动被识别为切点，webpack并不会将它合并到核心的js代码中
    // 项目的首页在运行时也不会下载并运行该文件
    // 在什么时候访问这个路由的组件时什么时候他就会运行
    component: () => import('@/views/About')
  },
  {
    path: '/page1',
    name: 'Page1',
    component: () => import(
      /*webpackChunkName: 'pages'*/
      /* webpackPrefetch: true */
      '@/views/Page1'
    )
  },
  {
    path: '/page2',
    name: 'Page2',
    component: () => import(
      /*webpackChunkName: 'pages'*/
      /* webpackPrefetch: true */
      '@/views/Page2'
    )
  },
  {
    path: '/page3',
    name: 'Page3',
    component: () => import(
      /*webpackChunkName: 'pages'*/
      /* webpackPrefetch: true */
      '@/views/Page3'
    )
  },
]
const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
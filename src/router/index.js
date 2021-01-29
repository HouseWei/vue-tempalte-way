import Vue from 'vue'
import VueRouter from 'vue-router'

/*
  meta:{
    title:网页动态名称
  }
*/

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: {
      requireAuth: true,
      title: '首页'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    name: 'Page404',
    meta: { title: '404' }
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

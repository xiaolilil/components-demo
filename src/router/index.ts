import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
// 加 type 告诉别人这里引入的是一个类型，不是函数 接口等等
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/home',
    name: 'home',
    meta: { title: '首页' },
    component: () => import('@/views/home/home.vue'),
    redirect: '/home/form',
    children: [
      {
        path: 'calendar',
        name: 'calendar',
        meta: { title: '日历' },
        component: () => import('@/views/main/calendar/index.vue'),
      },
      {
        path: 'basic-table',
        name: 'basic-table',
        meta: { title: '基础表格' },
        component: () => import('@/views/main/basic-table/index.vue'),
      },
      {
        path: 'scroll-list',
        name: 'scroll-list',
        meta: { title: '滚轮列表' },
        component: () => import('@/views/main/scroll-list/index.vue'),
      },
      {
        path: 'form',
        name: 'form',
        meta: { title: '基础表单' },
        component: () => import('@/views/main/form/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior() {
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }
  },
})

// router.beforeEach(async (to, from) => {
// if (to.path !== '/login') {
// const token = LocalCache.getCache('coderwhyToken')
// if (!token) {
//   return '/login'
// }
// }
// })

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
export default router

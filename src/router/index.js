import Vue from 'vue'
import Router from 'vue-router'
import RoleManage from '@/page/roleManage/index'
import RoleAdd from '@/page/roleAdd/index'
import RoleAddPath from '@/page/roleAddPath/index'
import RoleUpdate from '@/page/roleUpdate/index'
import abilityType from '@/page/abilityType/index'
import store from '../store/index'

Vue.use(Router)

// const baseUrl = ''

const router = new Router({
  routes: [{
    path: '/roleManage',
    name: 'RoleManage',
    meta: {
      title: '角色管理'
    },
    component: RoleManage,
    children: [
      //   {
      //   path: 'roleAdd',
      //   name: 'RoleAdd',
      //   meta: {
      //     title: '添加角色'
      //   },
      //   component: RoleAdd
      // },
      // {
      //   path: 'roleAddPath',
      //   name: 'RoleAddPath',
      //   meta: {
      //     title: '添加角色路径'
      //   },
      //   component: RoleAddPath
      // },
      // {
      //   path: 'roleUpdate',
      //   name: 'RoleUpdate',
      //   meta: {
      //     title: '添加角色路径'
      //   },
      //   component: RoleUpdate
      // }
    ]
  },
  {
    path: '/roleAdd',
    name: 'RoleAdd',
    meta: {
      title: '添加角色'
    },
    component: RoleAdd
  },
  {
    path: '/roleAddPath',
    name: 'RoleAddPath',
    meta: {
      title: '添加角色路径'
    },
    component: RoleAddPath
  },
  {
    path: '/roleUpdate',
    name: 'RoleUpdate',
    meta: {
      title: '添加角色路径'
    },
    component: RoleUpdate
  },
  {
    path: '/abilityType',
    name: 'abilityType',
    meta: {
      title: '能力维度'
    },
    component: abilityType
  }
  ]
  // ,
  // mode: 'history',
  // base: baseUrl
})

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', { isLoading: true })
  next()
})

router.afterEach((to, from) => {
  store.commit('updateLoadingStatus', { isLoading: false })
})
export default router

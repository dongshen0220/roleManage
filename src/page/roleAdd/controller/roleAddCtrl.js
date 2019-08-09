/*
 * @Description:新增角色控制层文件
 * @Author: dongshen
 * @LastEditors: dongshen
 * @Date: 2019-05-15 21:51:37
 * @LastEditTime: 2019-07-06 14:44:59
 */

import _ from 'lodash'
import router from '@/router/index'

const roleAddCtrl = {
  state: {
    userInfo: {
      name: '',
      typeList: [],
      authorities: [],
      id: '',
      workPhone: '',
      team: '',
      img: '',
      workNo: '',
      nowType: '',
      email: '',
      dept: '',
      navList: []
    },
    limitNumber: '8',
    limitNumber2: '500',
    inputNum: '0/',
    textNum: '0/',
    items: {
      text: '',
      text_area: ''
    },
    isShow: false, // 校验失败
    isShow1: false // 校验通过

  },
  actions: {

    'DO_INIT_DATA' ({ getters, dispatch, commit }) {
      return new Promise((resolve) => {
        let res = getters['GET_USER_INFO']
        if (_.isEmpty(res.id)) resolve(dispatch('userInfoServ/DO_GET_USER_INFO', {}, { root: true }))
        resolve(res)
      }).then((res) => {
        return new Promise((resolve) => {
          let res = getters['GET_USER_INFO']
          commit('SET_USER_INFO', res)
          resolve()
        })
      })
    },
    /**
         * @Description: 创建角色
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-06-11 22:13:26
         */
    'DO_ADD_ROLE' ({ getters, dispatch, commit }, value) {
      return new Promise((resolve) => {
        dispatch('developRoleServ/DO_ADD_ROLE', value, { root: true })
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          let obj = getters['GET_DEVELOP_ROLE']
          console.log(obj)
          router.push({
            name: 'RoleManage'
          })
          // commit('SET_DEVELOP_ROLE_INFO', obj)
        })
      })
    }
  },
  mutations: {
    /**
         * @Description: user数据写入
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-11 14:43:06
         */
    'SET_USER_INFO' (state, res = {}) {
      state.userInfo.name = res.name
      state.userInfo.id = res.id
      state.userInfo.workPhone = res.workPhone
      state.userInfo.team = res.team
      state.userInfo.img = res.img
      state.userInfo.workNo = res.workNo
      state.userInfo.email = res.email
      state.userInfo.dept = res.dept
      state.userInfo.typeList = res.typeList
      state.userInfo.authorities = res.authorities
      state.userInfo.nowType = res.nowType
      state.userInfo.navList = res.navList
    },
    'SET_DEVELOP_ROLE_INFO' (state, res = {}) {

    }
  },
  getters: {
    'GET_RENDER_DATA' (state) {
      return state
    },
    'GET_USER_INFO' (state, getters, rootState, rootGetters) {
      return rootGetters['userInfoServ/GET_USER_INFO']
    },
    'GET_DEVELOP_ROLE' (state, getters, rootState, rootGetters) {
      return rootGetters['developRoleServ/GET_DEVELOP_ROLE']
    }
  },
  namespaced: true
}
export default roleAddCtrl

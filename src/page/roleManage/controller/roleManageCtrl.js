/*
 * @Description:角色管理控制层文件
 * @Author: dongshen
 * @LastEditors: dongshen
 * @Date: 2019-05-15 21:51:37
 * @LastEditTime: 2019-07-06 14:47:25
 */

import _ from 'lodash'
import router from '@/router/index'

const roleManageCtrl = {
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
    roleInfo: {
      pageSize: '',
      currentPage: '',
      totalCount: '',
      totalPage: '',
      datalist: []
    },
    removeFlag: false, // 删除弹窗标识
    updateFlag: false, // 修改弹窗标识
    deleteIndex: '', // 删除id
    updateIndex: '', // updateId
    showPageSize: 8, // 每页最大数为8
    pageIndex: '0'
  },
  actions: {
    /**
         * @Description:初始化数据
         * @Author: dongshen
         * @Date: 2019-05-15 21:53:11
         */
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
        .then(function () {
          return new Promise(function (resolve) {
            let res = getters['GET_DEVELOP_ROLE']
            resolve(res)
          })
        }).then((res) => {
          return new Promise((resolve) => {
            commit('SET_DEVELOP_INFO', res)
            resolve()
          })
        })
        .then(function () {
          return new Promise(
            async (resolve) => {
              await dispatch('developRoleServ/DO_GET_DEVELOP_INFO', 0, { root: true })
              let obj = getters['GET_DEVELOP_ROLE']
              commit('SET_DEVELOP_INFO', obj)
            })
        })
    },
    /**
         * @Description: 快速查询
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-12 15:37:44
         */
    'DO_SEARCH_STATE' ({ state, getters, dispatch, commit }, data) {
      if (data === '' || data === null || data === undefined) {
        state.roleInfo = []
        // dispatch('developRoleServ/DO_GET_DEVELOP_INFO', {}, { root: true })
        let obj = getters['GET_DEVELOP_ROLE']
        commit('SET_DEVELOP_INFO', obj)
      } else {
        commit('SET_SEARCH_STATE', data)
      }
    },
    /**
         * @Description: 删除角色
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-16 16:27:38
         */
    'DO_REMOVE_ROLE' ({ commit }, data) {
      commit('SET_REMOVE_FLAG', data)
    },
    'DO_CLOSE_WINDOW' ({ state, commit }) {
      commit('SET_CLOSE_WINDOW')
    },
    'DO_SURE_REMOVE_ROLE' ({ getters, state, commit, dispatch }) {
      // alert('todo：调用删除接口，再往下执行删除')
      return new Promise(
        async (resolve) => {
          await dispatch('developRoleServ/DO_REMOVE_ROLE', state.deleteIndex, { root: true })
          resolve()
        }).then(() => {
        return new Promise(
          (resolve) => {
            let res = getters['GET_DEVELOP_ROLE']
            resolve(res)
          }).then((res) => {
          return new Promise((resolve) => {
            commit('SET_DEVELOP_INFO', res)
            commit('SET_SURE_REMOVE_ROLE')
            resolve()
          })
        })
      })
    },
    /**
         * @Description: 修改角色
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-06-22 11:13:12
         */
    'DO_UPDATE_ROLE' ({ commit }, data) {
      commit('SET_UPDATE_FLAG', data)
    },
    // 确认修改操作
    'DO_SURE_UPDATE_ROLE' ({ commit, state }) {
      router.push({
        name: 'RoleUpdate',
        params: { id: state.updateIndex }
      })
      commit('SET_SURE_UPDATE_ROLE')
    },
    'DO_CHANGE_PAGE' ({ commit, state, dispatch, getters }, data) {
      // state.roleInfo.datalist.slice(8, state.showPageSize)
      // return new Promise((resolve, reject) => {
      //   if (data !== null) {
      //     state.showPageSize += 8
      //     if (state.showPageSize >= state.roleInfo.datalist.length) {
      //       reject(state.roleInfo.datalist.length)
      //     }
      //     resolve(state.roleInfo.datalist.length)
      //   }
      //   reject(state.roleInfo.datalist.length)
      // })
      return new Promise(
        (resolve) => {
          return new Promise(
            async (resolve) => {
              await dispatch('developRoleServ/DO_GET_DEVELOP_INFO', data, { root: true })
              let obj = getters['GET_DEVELOP_ROLE']
              resolve(obj)
            }).then((obj) => {
            commit('SET_DEVELOP_INFO', obj)
            resolve()
          })
        }).then(() => {
        commit('SET_PAGE_INDEX', data)
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
    /**
         * @Description: 角色数据写入
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-11 14:43:10
         */
    'SET_DEVELOP_INFO' (state, res = {}) {
      state.roleInfo.currentPage = res.currentPage
      state.roleInfo.totalCount = res.totalCount
      state.roleInfo.totalPage = res.totalPage
      state.roleInfo.pageSize = res.pageSize
      state.roleInfo.datalist = res.datalist
    },
    /**
         * @Description: 查询过滤datalist
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-12 13:06:34
         */
    'SET_SEARCH_STATE' (state, data) {
      let dataSearchList = JSON.parse(JSON.stringify(state.roleInfo.datalist))
      let newlist = (dataSearchList || []).filter(item => {
        return item.name.indexOf(data) !== -1
      })
      // 写入状态
      state.roleInfo.datalist = newlist
    },
    // 写入删除弹窗flag
    'SET_REMOVE_FLAG' (state, res = {}) {
      state.removeFlag = !state.removeFlag
      state.deleteIndex = res
    },
    // 关闭弹窗
    'SET_CLOSE_WINDOW' (state) {
      state.removeFlag = false
      state.updateFlag = false
      state.deleteIndex = ''
    },
    // 写入 确认删除
    'SET_SURE_REMOVE_ROLE' (state) {
      state.removeFlag = !state.removeFlag
      state.deleteIndex = ''
    },
    // 写入修改弹窗flag
    'SET_UPDATE_FLAG' (state, res = {}) {
      state.updateFlag = !state.updateFlag
      state.updateIndex = res
    },
    // 写入 确认删除
    'SET_SURE_UPDATE_ROLE' (state) {
      state.updateFlag = !state.updateFlag
      // state.updateIndex = ''
    },
    // 写入查询page
    'SET_PAGE_INDEX' (state, res = {}) {
      state.pageIndex = res
      state.roleInfo.currentPage = res + 1
    }
  },
  getters: {
    /**
         * @Description: 获取state渲染数据
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-11 14:43:33
         */
    'GET_RENDER_DATA' (state) {
      return state
    },
    'GET_ROLE_RENDER_DATA' (state) {
      return state.roleInfo.datalist.slice(0, state.showPageSize)
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
export default roleManageCtrl

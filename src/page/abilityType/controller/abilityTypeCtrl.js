/*
 * @Description:能力维度控制层文件
 * @Author: dongshen
 * @LastEditors: dongshen
 * @Date: 2019-07-04 14:10:37
 * @LastEditTime: 2019-07-17 09:31:45
 */

import _ from 'lodash'

const abilityTypeCtrl = {
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
    abilityInfo: {
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
    pageIndex: '0', // 切换页码
    showStatus: 1, // 组件切换状态,1-能力类型列表，2-添加，3-修改，4-查看
    showUpdateStatus: 0, // 修改页面组件切换状态 0-能力类型 1-节点类型 ，2-新增节点

    limitNumber: '8', // 限制数
    limitNumber2: '500', // 限制数
    inputNum: '0/', // 计数
    textNum: '0/', // 计数
    items: {
      id: '',
      name: '',
      memo: '',
      nodelist: []
    }, // 输入值
    isShow: false, // 校验失败
    isShow1: false, // 校验通过
    nodeList: {
      nodetype: '',
      nodename: '',
      nodeurl: '',
      nodedesc: ''
    }
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
            let res = getters['GET_ABILITY_TYPE']
            resolve(res)
          })
        }).then((res) => {
          return new Promise((resolve) => {
            commit('SET_ABILITY_INFO', res)
            resolve()
          })
        })
        .then(function () {
          return new Promise(
            async (resolve) => {
              await dispatch('abilityTypeServ/DO_GET_ABILITY_TYPE_LIST', 0, { root: true })
              let obj = getters['GET_ABILITY_TYPE']
              console.log(obj)
              commit('SET_ABILITY_INFO', obj)
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
        state.abilityInfo = []
        // dispatch('abilityTypeServ/DO_GET_DEVELOP_INFO', {}, { root: true })
        let obj = getters['GET_ABILITY_TYPE']
        commit('SET_ABILITY_INFO', obj)
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
          await dispatch('abilityTypeServ/DO_REMOVE_ABILITY', state.deleteIndex, { root: true })
          resolve()
        }).then(() => {
        return new Promise(
          (resolve) => {
            let res = getters['GET_ABILITY_TYPE']
            resolve(res)
          }).then((res) => {
          return new Promise((resolve) => {
            commit('SET_ABILITY_INFO', res)
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
    'DO_SURE_UPDATE_ABILITY' ({ commit, state, getters, dispatch }, value) {
      return new Promise((resolve) => {
        commit('SET_SHOWSTATUS', value)
        commit('SET_SURE_UPDATE_ROLE')
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          let obj = getters['GET_ABILITY_TYPE']
          if (_.isEmpty(obj.id)) resolve(dispatch('abilityTypeServ/DO_QUERY_ABILITY_BY_ID', state.updateIndex, { root: true }))
          resolve()
        })
      }).then(() => {
        let obj = getters['GET_ABILITY_TYPE']
        commit('SET_UPDATE_FROM', obj.queryAbilityInfo)
      })
    },
    'DO_CHANGE_PAGE' ({ commit, state, dispatch, getters }, data) {
      return new Promise(
        (resolve) => {
          return new Promise(
            async (resolve) => {
              await dispatch('abilityTypeServ/DO_GET_ABILITY_TYPE_LIST', data, { root: true })
              let obj = getters['GET_ABILITY_TYPE']
              resolve(obj)
            }).then((obj) => {
            commit('SET_ABILITY_INFO', obj)
            resolve()
          })
        }).then(() => {
        commit('SET_PAGE_INDEX', data)
      })
    },
    // 切换新增能力类型组件-新增技术节点组件-切换主页
    'DO_CHANGE_SHOWSTATUS' ({ state, commit }, value) {
      return new Promise((resolve) => {
        commit('SET_SHOWSTATUS', value)
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          if (state.showStatus === 2) {
            commit('SET_ITEMS_INIT')
          }
        })
      })
    },
    // 新增能力类型方法
    'DO_ADD_ABILITY_SAVE' ({ state, commit, getters, dispatch }, value) {
      return new Promise((resolve) => {
        dispatch('abilityTypeServ/DO_ADD_ABILITY', value, { root: true })
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          let obj = getters['GET_ABILITY_TYPE']
          console.log(obj)
          let value = 1
          commit('SET_SHOWSTATUS', value)
        })
      })
    },
    //  修改能力类型方法
    'DO_UPDATE_ABILITY_SAVE' ({ getters, dispatch, commit, state }, value) {
      return new Promise(
        async (resolve) => {
          let id = state.updateIndex
          let param = { id, value }
          await dispatch('abilityTypeServ/DO_UPDATE_ABILITY', param, { root: true })
          resolve()
        }).then(() => {
        return new Promise((resolve) => {
          let res = getters['GET_ABILITY_TYPE']
          resolve(res)
        }).then((res) => {
          return new Promise((resolve) => {
            commit('SET_ABILITY_INFO', res)
            let value = 1
            commit('SET_SHOWSTATUS', value)
          })
        })
      })
    },
    // 初始化新增能力类型
    'DO_ITEMS_INIT' ({ commit }) {
      commit('SET_ITEMS_INIT')
    },
    // 查询能力模型详情
    'DO_QUERY_ABILITY_DETAIL' ({ commit, state, getters, dispatch }, res = {}) {
      return new Promise((resolve) => {
        commit('SET_SHOWSTATUS', res.showstatus)
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          let obj = getters['GET_ABILITY_TYPE']
          if (_.isEmpty(obj.id)) resolve(dispatch('abilityTypeServ/DO_QUERY_ABILITY_BY_ID', res.id, { root: true }))
          resolve()
        })
      }).then(() => {
        let obj = getters['GET_ABILITY_TYPE']
        commit('SET_UPDATE_FROM', obj.queryAbilityInfo)
      })
    },
    // 查询技术节点详情
    'DO_QUERY_NODE_DETAIL' ({ commit, state, getters }, res = {}) {
      return new Promise((resolve) => {
        commit('SET_SHOWSTATUS', res.showstatus)
        commit('SET_SHOWUPDATESTATUS', 0)
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          let nodelist = state.items.nodelist
          let id = res.id
          let newlist = (nodelist || []).filter(item => {
            return item.id.toString().indexOf(id.toString()) !== -1
          })
          // 写入状态
          commit('SET_NODELIST', newlist)
          resolve()
        })
      })
    },
    // 修改能力模型详情
    'DO_UPDATE_ABILITY_DETAIL' ({ commit, state, getters, dispatch }, res = {}) {
      return new Promise((resolve) => {
        commit('SET_SHOWSTATUS', res.showstatus)
        commit('SET_SHOWUPDATESTATUS', 0)
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          commit('SET_UPDATE_FROM', state.items)
        })
      })
    },
    // 改技术节点详情
    'DO_UPDATE_NODE_DETAIL' ({ commit, state, getters }, res = {}) {
      return new Promise((resolve) => {
        commit('SET_SHOWSTATUS', res.showstatus)
        commit('SET_SHOWUPDATESTATUS', 1)
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          let nodelist = state.items.nodelist
          let id = res.id
          if (id === null) {
            let nullObj = [{
              'nodetype': null,
              'nodename': null,
              'nodeurl': null,
              'nodedesc': null
            }]
            commit('SET_NODELIST', nullObj)
          } else {
            let newlist = (nodelist || []).filter(item => {
              if (item.id !== null) {
                return item.id.toString().indexOf(id.toString()) !== -1
              }
            })
            // 写入状态
            commit('SET_NODELIST', newlist)
          }
          resolve()
        })
      })
    },
    // 切换新增能力类型组件-新增技术节点组件-切换主页
    'DO_CHANGE_SHOWUPDATESTATUS' ({ state, commit }, value) {
      return new Promise((resolve) => {
        commit('SET_SHOWUPDATESTATUS', value)
        resolve()
      })
    },
    // 新增技术节点
    'DO_ADD_ABILITY_NODE' ({ state, commit, getters, dispatch }) {
      return new Promise((resolve) => {
        commit('SET_ADD_ABILITY_NODE_LIST')
        resolve()
      }).then(() => {
        return new Promise((resolve) => {
          let obj = getters['GET_ABILITY_TYPE']
          console.log(obj)
          let value = 1
          commit('SET_SHOWUPDATESTATUS', value)
        })
      })
    },
    // DO_DELETE_NODE_BY_ID 根据id删除技术节点
    'DO_DELETE_NODE_BY_ID' ({ commit, state, getters, dispatch }, index) {
      return new Promise((resolve) => {
        let id = index
        let delInx = []
        let nodeList = state.items.nodelist
        nodeList.forEach((item, index) => {
          if (item.id === id) {
            delInx.push(index)
          }
        })
        delInx.forEach(idxToDel => {
          nodeList.splice(idxToDel, 1)
        })
        commit('SET_SHOWUPDATESTATUS', 0)
        resolve(nodeList)
      }).then((nodeList) => {
        return new Promise((resolve) => {
          // 写入状态
          state.items.nodelist = nodeList
          commit('SET_UPDATE_FROM', state.items)
          commit('SET_NODELIST_INIT')
          let params = { 'showstatus': 3, 'id': state.items.id }
          dispatch('abilityTypeCtrl/DO_UPDATE_ABILITY_DETAIL', params, { root: true })
        })
      })
    },
    // 增加或者修改技术节点
    'DO_UPDATE_NODE_SAVE' ({ commit, state, getters, dispatch }, index) {
      return new Promise((resolve) => {
        let nodelist = state.items.nodelist
        // 查找当前最大id ，新节点id+1
        let id = Math.max.apply(Math, nodelist.map(function (o) { return o.id }))
        index.id = id + 1
        resolve(index)
      }).then((index) => {
        return new Promise((resolve) => {
          let nodeNewArray = [index]
          let nodeNewObj = index
          // 写入状态
          commit('SET_NODELIST', nodeNewArray)
          let nodeList = state.items.nodelist
          // 查找新节点空数组对象，id为-1的值，更新对象
          nodeList.forEach((item, index) => {
            if (item.id === -1) {
              nodeList[index] = nodeNewObj
            }
            state.items.nodelist = nodeList
          })
          resolve()
        }).then(() => {
          commit('SET_SHOWUPDATESTATUS', 0)
          //   let params = { 'showstatus': 3, 'id': state.items.id }
          //   dispatch('abilityTypeCtrl/DO_UPDATE_ABILITY_DETAIL', params, { root: true })
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
    /**
         * @Description: 角色数据写入
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-11 14:43:10
         */
    'SET_ABILITY_INFO' (state, res = {}) {
      state.abilityInfo.currentPage = res.currentPage
      state.abilityInfo.totalCount = res.totalCount
      state.abilityInfo.totalPage = res.totalPage
      state.abilityInfo.pageSize = res.pageSize
      state.abilityInfo.datalist = res.datalist
    },
    /**
         * @Description: 查询过滤datalist
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-12 13:06:34
         */
    'SET_SEARCH_STATE' (state, data) {
      let dataSearchList = JSON.parse(JSON.stringify(state.abilityInfo.datalist))
      let newlist = (dataSearchList || []).filter(item => {
        return item.name.indexOf(data) !== -1
      })
      // 写入状态
      state.abilityInfo.datalist = newlist
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
      state.abilityInfo.currentPage = res + 1
    },
    // 写入组件显示状态
    'SET_SHOWSTATUS' (state, res = {}) {
      state.showStatus = res
    },
    // 写入修改组件显示状态
    'SET_SHOWUPDATESTATUS' (state, res = {}) {
      state.showUpdateStatus = res
    },
    // 写入修改能力类型状态值
    'SET_UPDATE_FROM' (state, res = {}) {
      state.items.id = res.id
      state.items.name = res.name
      state.items.memo = res.memo
      state.items.nodelist = res.nodelist
    },
    // 初始化items数组
    'SET_ITEMS_INIT' (state) {
      state.items.id = ''
      state.items.name = ''
      state.items.memo = ''
      state.items.nodelist = []
    },
    // 写入node节点值，展示各节点页面
    'SET_NODELIST' (state, res = {}) {
      let data = res[0]
      state.nodeList.nodetype = data.nodetype
      state.nodeList.nodename = data.nodename
      state.nodeList.nodeurl = data.nodeurl
      state.nodeList.nodedesc = data.nodedesc
    },
    // 初始化nodeList数组
    'SET_NODELIST_INIT' (state) {
      //   Object.keys(state.nodeList).foeEach(key => {
      //     state.nodeList[key] = ''
      //   })
      state.nodeList.nodetype = ''
      state.nodeList.nodename = ''
      state.nodeList.nodeurl = ''
      state.nodeList.nodedesc = ''
    },
    // SET_ADD_ABILITY_NODE_LIST 写入空串
    'SET_ADD_ABILITY_NODE_LIST' (state) {
      let nullObj = { 'id': -1, 'nodetype': null, 'nodename': null, 'nodeurl': null, 'nodedesc': null }
      state.items.nodelist.push(nullObj)
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
    // 'GET_ROLE_RENDER_DATA' (state) {
    //   return state.abilityInfo.datalist.slice(0, state.showPageSize)
    // },
    'GET_USER_INFO' (state, getters, rootState, rootGetters) {
      return rootGetters['userInfoServ/GET_USER_INFO']
    },
    'GET_ABILITY_TYPE' (state, getters, rootState, rootGetters) {
      return rootGetters['abilityTypeServ/GET_ABILITY_TYPE']
    }
  },
  namespaced: true
}
export default abilityTypeCtrl

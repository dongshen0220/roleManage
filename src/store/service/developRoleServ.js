/*
 * @Description: 角色管理服务
 * @Author: dongshen
 * @Date: 2019-05-14 20:33:59
 * @LastEditors: dongshen
 * @LastEditTime: 2019-06-30 09:07:57
 */
import _ from 'lodash'
import { developinfo, addrole, addrolepath, deleterole, queryRoleById, updateRole } from '../../network/httpService'
const developRoleServ = {
  // 数据
  state: {
    pageSize: '',
    currentPage: '0',
    totalCount: '',
    totalPage: '',
    datalist: [],
    queryRoleInfo: {
      id: '',
      name: '',
      memo: ''
    },
    pageIndex: '0'
  },
  // 业务
  actions: {
    'DO_INIT_DATA' ({ state, commit }, res = 0) {
      return new Promise(function (resolve) {
        commit('SET_DATA')
        resolve(true)
      })
    },
    /**
         * @Description:获取管理员角色列表
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-15 21:11:12
         */
    'DO_GET_DEVELOP_INFO' ({ state, commit }, value) {
      commit('SET_PAGE_INDEX', value)
      return developinfo(state.pageIndex).then(function (res) {
        return new Promise(function (resolve, reject) {
          console.log(res)
          let { code, data } = res
          let obj = data.returnData.data
          let objlist = data.returnData.datalist
          obj.data = objlist
          // 返回服务失败
          if (code !== 10000) {
            // reject({ msg: code })
            console.log('error')
          } else {
            resolve(commit('SET_DEVELOP_INFO', obj))
          }
        }).catch()
      })

      // 模拟测试数据
      // let obj = '{"pageSize":8,"currentPage":1,"totalCount":7,"totalPage":1,"data":[{"workno":null,"roleWayList":[{"currentIndex":null,"roleWayTechVOs":null,"abilityTypeVOs":null,"technologyPointId":null,"abilityTypeIds":null,"id":10,"roleId":6,"name":"前端角色1级","level":1,"memo":"前端角色1级","passingScore":null},{"currentIndex":null,"roleWayTechVOs":null,"abilityTypeVOs":null,"technologyPointId":null,"abilityTypeIds":null,"id":11,"roleId":6,"name":"前端角色2级","level":2,"memo":"前端角色2级","passingScore":null}],"peaks":"120","memo":"前端角色","id":6,"publish":1,"name":"前端角色"},{"workno":null,"roleWayList":[{"currentIndex":null,"roleWayTechVOs":null,"abilityTypeVOs":null,"technologyPointId":null,"abilityTypeIds":null,"id":7,"roleId":5,"name":"11","level":1,"memo":"","passingScore":null},{"currentIndex":null,"roleWayTechVOs":null,"abilityTypeVOs":null,"technologyPointId":null,"abilityTypeIds":null,"id":8,"roleId":5,"name":"2222222","level":2,"memo":"","passingScore":null},{"currentIndex":null,"roleWayTechVOs":null,"abilityTypeVOs":null,"technologyPointId":null,"abilityTypeIds":null,"id":9,"roleId":5,"name":"3333333","level":3,"memo":"","passingScore":null}],"peaks":"120","memo":"","id":5,"publish":2,"name":"吞吞吐吐拖拖"}]}'
      // let data = JSON.parse(obj)
      // console.log(data)
      // commit('SET_DEVELOP_INFO', data)
    },
    /**
         * @Description: 创建角色
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-06-11 22:12:31
         */
    'DO_ADD_ROLE' ({ state, commit }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        addrole(param).then((res) => {
          let { data } = res
          console.log('sucess')
          resolve(commit('SET_DEVELOP_INFO', data.data))
          // let roleList = JSON.parse(JSON.stringify(state.datalist))
          // roleList.splice(0, 1, data)
          // resolve(commit('SET_ADD_ROLE_INFO', { list: roleList }))
        }).catch(
          err => {
            reject(err)
          }
        )
      })
    },
    /**
         * @Description: 创建角色路径
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-06-11 22:12:56
         */
    'DO_ADD_ROLE_PATH' ({ state, commit }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        addrolepath(param).then((res) => {
          let { code } = res
          // 返回服务失败
          if (code !== 10000) {
            // reject({ msg: code })
            console.log('error')
          } else {
            console.log('sucess')
            // resolve(commit('SET_ADD_ROLE_INFO', data))
          }
        }).catch(
          err => {
            reject(err)
          }
        )
      })
    },
    // 删除角色
    'DO_REMOVE_ROLE' ({ state, commit, dispatch, getters }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        deleterole(param).then((res) => {
          let { code, data } = res
          // 返回服务失败
          if (code === 10000) {
            // reject({ msg: code })
            console.log('error')
          } else {
            console.log('sucess')
            resolve(commit('SET_DEVELOP_INFO', data.data))
          }
        }).catch(
          err => {
            reject(err)
          }
        )
      })
    },
    // 根据角色id查询
    'DO_QUERY_ROLE_BY_ID' ({ commit, dispatch, getters }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        queryRoleById(param).then((res) => {
          let { code, data } = res
          // 返回服务失败
          if (code === 10000) {
            // reject({ msg: code })
            console.log('error')
          } else {
            console.log('sucess')
            resolve(commit('SET_QUERY_ROLE_INFO', data))
          }
        }).catch(
          err => {
            reject(err)
          }
        )
      })
    },
    'DO_UPDATE_ROLE' ({ state, commit }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        updateRole(param).then((res) => {
          let { data } = res
          console.log('sucess')
          resolve(commit('SET_DEVELOP_INFO', data.data))
        }).catch(
          err => {
            reject(err)
          }
        )
      })
    }
  },
  // 写入
  mutations: {
    'SET_DEVELOP_INFO' (state, data) {
      state.currentPage = data.currentPage
      state.totalCount = data.totalCount
      state.totalPage = data.totalPage
      state.pageSize = data.pageSize
      state.datalist = []
      if (state.datalist.length === 0) {
        // 循环写入列表
        _.forEach(data.data, function (item) {
          state.datalist.push(item)
        })
      }
    },
    'SET_ADD_ROLE_INFO' (state, res = {}) {
      // 循环写入列表
      state.datalist = []
      _.forEach(res.list, function (item) {
        state.datalist.push(item)
      })
    },
    'SET_ROLE_DATALIST' (state, res = {}) {
      // 循环写入列表
      state.datalist = []
      _.forEach(res, function (item) {
        state.datalist.push(item)
      })
    },
    // 写入单个id查询的角色信息
    'SET_QUERY_ROLE_INFO' (state, res = {}) {
      state.queryRoleInfo.id = res.id
      state.queryRoleInfo.name = res.name
      state.queryRoleInfo.memo = res.memo
    },
    // 写入查询page
    'SET_PAGE_INDEX' (state, res = {}) {
      state.pageIndex = res
    }

  },
  // 读取
  getters: {
    /**
         * @Description:
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-15 21:13:53
         */
    'GET_DEVELOP_ROLE' (state) {
      return state
    }
  },
  namespaced: true
}
export default developRoleServ

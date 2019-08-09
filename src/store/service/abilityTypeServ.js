/*
 /**
  * @Description: 能力维度服务
  * @Author: dongshen
  * @param {type}
  * @return:
  * @Date: 2019-07-03 22:56:09
  */
import _ from 'lodash'
import { getAbilityTypeList, abilityTypeAdd, abilityTypeDelete, queryAbilityTypeById, abilityTypeUpdate } from '../../network/httpService'
const abilityTypeServ = {
  // 数据
  state: {
    pageSize: '',
    currentPage: '0',
    totalCount: '',
    totalPage: '',
    datalist: [],
    queryAbilityInfo: {
      id: '',
      name: '',
      memo: '',
      nodelist: []
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
         * @Description:获取能力类型列表
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-05-15 21:11:12
         */
    'DO_GET_ABILITY_TYPE_LIST' ({ state, commit }, value) {
      commit('SET_PAGE_INDEX', value)
      return getAbilityTypeList(state.pageIndex).then(function (res) {
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
            resolve(commit('SET_ABILITY_TYPE_LIST', obj))
          }
        }).catch()
      })
    },
    /**
         * @Description: 创建角色
         * @Author: dongshen
         * @param {type}
         * @return:
         * @Date: 2019-06-11 22:12:31
         */
    'DO_ADD_ABILITY' ({ state, commit }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        abilityTypeAdd(param).then((res) => {
          let { data } = res
          console.log('sucess')
          resolve(commit('SET_ABILITY_TYPE_LIST', data.data))
        }).catch(
          err => {
            reject(err)
          }
        )
      })
    },
    // 删除角色
    'DO_REMOVE_ABILITY' ({ state, commit, dispatch, getters }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        abilityTypeDelete(param).then((res) => {
          let { code, data } = res
          // 返回服务失败
          if (code === 10000) {
            // reject({ msg: code })
            console.log('error')
          } else {
            console.log('sucess')
            resolve(commit('SET_ABILITY_TYPE_LIST', data.data))
          }
        }).catch(
          err => {
            reject(err)
          }
        )
      })
    },
    // 根据id查询
    'DO_QUERY_ABILITY_BY_ID' ({ commit, dispatch, getters }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        queryAbilityTypeById(param).then((res) => {
          let { code, data } = res
          // 返回服务失败
          if (code === 10000) {
            // reject({ msg: code })
            console.log('error')
          } else {
            console.log('sucess')
            resolve(commit('SET_QUERY_ABILITY_INFO', data))
          }
        }).catch(
          err => {
            reject(err)
          }
        )
      })
    },
    'DO_UPDATE_ABILITY' ({ state, commit }, value) {
      return new Promise(function (resolve, reject) {
        let param = value
        abilityTypeUpdate(param).then((res) => {
          let { data } = res
          console.log('sucess')
          resolve(commit('SET_ABILITY_TYPE_LIST', data.data))
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
    'SET_ABILITY_TYPE_LIST' (state, data) {
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
    'SET_ADD_ABILITY_INFO' (state, res = {}) {
      // 循环写入列表
      state.datalist = []
      _.forEach(res.list, function (item) {
        state.datalist.push(item)
      })
    },
    'SET_ABILITY_DATALIST' (state, res = {}) {
      // 循环写入列表
      state.datalist = []
      _.forEach(res, function (item) {
        state.datalist.push(item)
      })
    },
    // 写入单个id查询的角色信息
    'SET_QUERY_ABILITY_INFO' (state, res = {}) {
      state.queryAbilityInfo.id = res.id
      state.queryAbilityInfo.name = res.name
      state.queryAbilityInfo.memo = res.memo
      state.queryAbilityInfo.nodelist = res.nodelist
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
    'GET_ABILITY_TYPE' (state) {
      return state
    }
  },
  namespaced: true
}
export default abilityTypeServ

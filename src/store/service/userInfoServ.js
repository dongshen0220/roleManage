/*
 * @Description: 用户服务
 * @Author: dongshen
 * @LastEditors: dongshen
 * @Date: 2019-05-14 20:32:04
 * @LastEditTime: 2019-08-10 00:06:28
 */
import _ from 'lodash'
import { login } from '../../network/httpService'

const userInfoServ = {
  // 数据
  state: {
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
  // 业务
  actions: {
    'DO_GET_USER_INFO' ({ state, commit }, res = {}) {
      return login().then(function (res) {
        return new Promise(function (resolve, reject) {
          let { code, data } = res
          // 返回服务失败
          if (code !== 10000) {
            // reject({ msg: code })
            console.log('error')
          } else {
            resolve(commit('SET_USER_INFO', data))
          }
        }).catch(
          // 发生未知错误
        )
      })

      // let obj = '{"typeList":[8,10,9,5,6],"authorities":[],"updateTime":1552558910000,"lastLoginTime":1557196282514,"id":446,"privatePhone":"","workPhone":"","team":null,"img":"http://avatar.paas.x/avatar/091005.jpg","active":true,"workNo":"091000","nowType":8,"email":"XXX@.com","dept":0,"name":"test"}'
      // let data = JSON.parse(obj)
      // console.log(data)
      // commit('SET_USER_INFO', data)
    }
  },
  // 写入
  mutations: {
    'SET_USER_INFO' (state, res) {
      // _.isEmpty(data.name) ? '' : data.name

      state.name = _.isEmpty(res.name) ? '' : res.name
      state.workNo = _.isEmpty(res.workNo) ? '' : res.workNo
      state.dept = _.isEmpty(res.dept) ? '' : res.dept
      state.id = _.isEmpty(res.id) ? '' : res.id
      state.workPhone = _.isEmpty(res.workPhone) ? '' : res.workPhone
      state.team = _.isEmpty(res.team) ? '' : res.team
      state.img = _.isEmpty(res.img) ? '' : res.img
      state.email = _.isEmpty(res.email) ? '' : res.email
      if (_.isEmpty(res.typeList.length)) {
        // 循环写入列表
        _.forEach(res.typeList, function (item) {
          let obj = {
            typeCn: ''
          }
          if (item === 5) {
            obj.typeCn = '部门人员培养负责人'
          } else if (item === 6) {
            obj.typeCn = '部门经理'
          } else if (item === 8) {
            obj.typeCn = '学员'
          } else if (item === 9) {
            obj.typeCn = '项目经理'
          } else if (item === 10) {
            obj.typeCn = '管理员'
          }
          state.typeList.push(obj)
        })
      } else {
        state.typeList = []
      }
      if (_.isEmpty(res.authorities)) {
        _.forEach(res.authorities, function (item) {
          state.authorities.push(item)
        })
      } else {
        state.authorities = []
      }
      state.navList = []
      switch (res.nowType) {
        case 5:
          state.navList = [{ name: '部门计划' }, { name: '学员管理' }]
          break
        case 6:
          state.navList = [{ name: '培养计划' }, { name: '学员管理' }]
          break
        case 7:
          state.navList = []
          break
        case 8:
          state.navList = [{ name: '学员管理' }]
          break
        case 9:
          state.navList = [{ name: '学员管理' }]
          break
        case 10:
          state.navList = [{ name: '角色管理', path: 'RoleManage' }, { name: '能力类型', path: 'abilityType' }, { name: '培养计划', path: 'RoleManage' }, { name: '角色排行榜', path: 'abilityType' }]
          break
      }
      if (_.isEmpty(res.nowType)) {
        switch (res.nowType) {
          case 8:
            state.nowType = '学员'
            break
          case 5:
            state.nowType = '部门人员培养负责人'
            break
          case 6:
            state.nowType = '部门经理'
            break
          case 9:
            state.nowType = '项目经理'
            break
          case 10:
            state.nowType = '管理员'
            break
          default:
            break
        }
      } else {
        state.nowType = ''
      }
    }
  },
  // 读取
  getters: {
    'GET_USER_INFO' (state) {
      // console.log(state.userInfo)
      return state
    }
  },
  namespaced: true
}
export default userInfoServ

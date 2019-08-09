/*
 * @Description:新增角色路径控制层文件
 * @Author: dongshen
 * @LastEditors: dongshen
 * @Date: 2019-05-15 21:51:37
 * @LastEditTime: 2019-07-06 14:45:36
 */

import _ from 'lodash'
import router from '@/router/index'

const roleAddPathCtrl = {
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
    limitNumber: '10',
    limitNumber2: '200',
    inputNum: '0/',
    textNum: '0/',
    items: {
      text: '',
      text_area: ''
    },
    isShow: false,
    isShow1: false,
    selectList: [{
      id: '1',
      name: '10'
    },
    {
      id: '2',
      name: '20'
    },
    {
      id: '3',
      name: '30'
    }
    ],
    selected: '',
    // 列表是否展开
    showFlag: [],
    // roleAddPathTable
    tableItems: [{
      title: '前端角色',
      desc: '前端角色1级desc',
      count: 100,
      // checked: false,
      joblist: [{
        title: '前端角色1',
        desc: '前端角色1级desc',
        count: 100
      },
      {
        title: '前端角色1',
        desc: '前端角色1级desc',
        count: 100
      }
      ]
    },
    {
      title: '前端角色2',
      desc: '前端角色1级desc',
      count: 200,
      // checked: false,
      joblist: [{
        title: '前端角色2',
        desc: '前端角色1级desc',
        count: 100
      },
      {
        title: '前端角色2',
        desc: '前端角色1级desc',
        count: 100
      }
      ]
    }
    ],
    checkData: []
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
    'DO_ADD_ROLE_PATH' ({ getters, dispatch, commit }, value) {
      return new Promise((resolve) => {
        dispatch('developRoleServ/DO_ADD_ROLE_PATH', value, { root: true })
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
    }
  },
  getters: {
    'GET_RENDER_DATA' (state) {
      return state
    },
    'GET_USER_INFO' (state, getters, rootState, rootGetters) {
      return rootGetters['userInfoServ/GET_USER_INFO']
    }
  },
  namespaced: true
}
export default roleAddPathCtrl

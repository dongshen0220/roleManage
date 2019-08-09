import Vue from 'vue'
import Vuex from 'vuex'
import roleManageCtrl from '../page/roleManage/controller/roleManageCtrl'
import roleAddCtrl from '../page/roleAdd/controller/roleAddCtrl'
import developRoleServ from './service/developRoleServ'
import userInfoServ from './service/userInfoServ'
import abilityTypeServ from './service/abilityTypeServ'
import roleAddPathCtrl from '../page/roleAddPath/controller/roleAddPathCtrl'
import roleUpdateCtrl from '../page/roleUpdate/controller/roleUpdateCtrl'
import abilityTypeCtrl from '../page/abilityType/controller/abilityTypeCtrl'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    roleManageCtrl,
    roleAddCtrl,
    roleAddPathCtrl,
    roleUpdateCtrl,
    abilityTypeCtrl,
    userInfoServ,
    developRoleServ,
    abilityTypeServ
  },
  state: {
    isLoading: false
  },
  mutations: {
    // 控制loading显示隐藏
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

export default store

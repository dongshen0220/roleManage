<template>
  <div class="g-container">
    <div class="g-header">
      <!-- head-组件 -->
      <header-view
        :params="renderData"
        :totalCount="renderData.roleInfo.totalCount || 0"
        @searchOk="searchOk"
      ></header-view>
    </div>
    <!-- main-body -->
    <div class="g-main">
      <div class="m-main-top"></div>
      <!-- main-body-组件 -->
      <role-manage-view
        :params="renderData.roleInfo.datalist"
        @update="update"
        @publish="publish"
        @remove="remove"
        @addRole="addRole"
      ></role-manage-view>
      <!-- page-组件 -->
      <page-view :value="renderData.roleInfo" @pageChange="pageChange"></page-view>
    </div>
    <div class="g-footer">
      <!-- foot-组件 -->
      <footer-view></footer-view>
    </div>
    <remove-role-view :flag="renderData" @close="close" @sure="sureRemove"></remove-role-view>
    <update-role-view :flag="renderData" @close="close" @sure="sureUpdate"></update-role-view>
  </div>
</template>
  <!-- <router-view></router-view> -->

<script>
import headerView from '../../common/components/headerView'
import roleManageView from './components/roleManageView'
import footerView from '../../common/components/footerView'
import pageView from '../../common/components/pageView'
import removeRoleView from './components/removeRoleView'
import updateRoleView from './components/updateRoleView'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import router from '@/router/index'
export default {
  name: 'index',
  props: {},
  data () {
    return {}
  },
  components: {
    headerView,
    roleManageView,
    footerView,
    pageView,
    removeRoleView,
    updateRoleView
  },
  created () {
    this.initData()
  },
  computed: {
    ...mapGetters('roleManageCtrl', [
      'GET_RENDER_DATA',
      'GET_ROLE_RENDER_DATA',
      'GET_DEVELOP_ROLE'
    ]),
    renderData () {
      return this['GET_RENDER_DATA']
    },
    renderPageSizeData () {
      return this['GET_ROLE_RENDER_DATA']
    }
  },
  methods: {
    ...mapActions('roleManageCtrl', [
      'DO_INIT_DATA',
      'DO_SEARCH_STATE',
      'DO_REMOVE_ROLE',
      'DO_CLOSE_WINDOW',
      'DO_SURE_REMOVE_ROLE',
      'DO_UPDATE_ROLE',
      'DO_SURE_UPDATE_ROLE',
      'DO_CHANGE_PAGE'
    ]),
    ...mapMutations('adminTypeCtrl', ['SET_SEARCH_STATE']),
    /**
     * @Description: 初始化用户数据
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-11 18:28:29
     */
    initData () {
      this['DO_INIT_DATA']()
    },
    /**
     * @Description: 快速查询
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-12 11:33:32
     */
    searchOk (value) {
      // set state
      this['DO_SEARCH_STATE'](value)
    },
    /**
     * @Description:
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-11 18:27:57
     */
    update (index) {
      this['DO_UPDATE_ROLE'](index)
    },
    /**
     * @Description:
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-11 18:28:01
     */
    publish () {
      this['DO_PUBLISH_']()
    },
    /**
     * @Description:deleteRole
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-11 18:28:03
     */
    remove (index) {
      this['DO_REMOVE_ROLE'](index)
    },
    // close layerWindow
    close () {
      this['DO_CLOSE_WINDOW']()
    },
    // 确认删除
    sureRemove () {
      this['DO_SURE_REMOVE_ROLE']()
    },
    // 确认修改
    sureUpdate () {
      this['DO_SURE_UPDATE_ROLE']()
      // router.push({
      //   name: 'roleUpdate',
      //   params: { id: state.updateIndex }
      // })
    },
    /**
     * @Description: 分页查询
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-23 10:44:08
     */
    pageChange (currentPage) {
      this['DO_CHANGE_PAGE'](currentPage - 1)
    },
    addRole () {
      router.push({ name: 'RoleAdd' })
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/common.scss";
.g-container {
  min-width: 1260px;
  // position: relative;
  // z-index: 1;
  .g-header {
    width: 100%;
    height: 190px;
    background-color: #404cf6;
  }
  .g-main {
    width: 100%;
    height: auto;
    background: #f4f4f4;
    .m-main-top {
      width: 100%;
      height: 50px;
      background: #404cf6;
    }
  }
  .g-footer {
    width: 100%;
    height: 60px;
    background-color: #333333;
  }
}
</style>

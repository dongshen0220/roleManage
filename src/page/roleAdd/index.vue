<template>
  <div class="g-container">
    <div class="g-header">
      <div class="m-header">
        <!-- head-组件 -->
        <header-view :params="renderData"></header-view>
        <role-step-view @addrolepath="addrolepath"></role-step-view>
      </div>
    </div>
    <!-- main-body -->
    <div class="g-main">
      <div class="m-main-top"></div>
      <!-- main-body-组件 -->
      <role-add-view
        :params="renderData"
        :placeholderDes="placeholderDes"
        :placeholderDes2="placeholderDes2"
        @save="save"
        @cancle="cancle"
      ></role-add-view>
    </div>
    <div class="g-footer">
      <!-- foot-组件 -->
      <footer-view></footer-view>
    </div>
  </div>
</template>
<script>
import headerView from '../../common/components/header2View'
import roleAddView from './components/roleAddView'
import footerView from '../../common/components/footerView'
import roleStepView from './components/roleStepView'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import router from '@/router/index'
export default {
  name: 'index',
  props: {},
  data () {
    return {
      placeholderDes: '请输入角色名称',
      placeholderDes2: '请输入角色路径'
    }
  },
  components: {
    headerView,
    roleAddView,
    footerView,
    roleStepView
  },
  created () {
    this.initData()
  },
  computed: {
    ...mapGetters('roleAddCtrl', ['GET_RENDER_DATA']),
    renderData () {
      return this['GET_RENDER_DATA']
    }
  },
  methods: {
    ...mapActions('roleAddCtrl', ['DO_INIT_DATA', 'DO_ADD_ROLE']),
    ...mapMutations('adminTypeCtrl', ['SET_ADD_ROLE']),
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
    save (value) {
      this['DO_ADD_ROLE'](value)
    },
    addrolepath () {
      router.push({ name: 'RoleAddPath' })
    },
    cancle () {
      router.push({ name: 'RoleManage' })
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/common.scss";
.g-container {
  min-width: 1260px;
  // position: absolute;
  // z-index: 2;
  // top: 0;
  // left: 0;
  .g-header {
    width: 100%;
    height: 190px;
    background-color: #404cf6;
    .m-header {
      width: 1260px;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-top: 18px;
    }
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

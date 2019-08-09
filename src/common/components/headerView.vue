<template>
  <div class="m-header">
    <div class="m-nav">
      <!-- logo-组件 -->
      <logo-view></logo-view>
      <!-- 导航栏-组件 -->
      <menu-view :value="renderData.userInfo.navList"></menu-view>
      <!-- 用户信息组件 -->
      <user-info-view :value="renderData.userInfo"></user-info-view>
    </div>
    <div class="m-hd-center">
      <!-- 角色模型处理-组件 -->
      <head-center-view :value="renderTotalData"></head-center-view>
      <!-- 查询组件 -->
      <search-view
      :placeholderDes="placeholderDes"
      @searchOk="searchOk">
      </search-view>
    </div>
  </div>
</template>
<script>
import logoView from './header/logoView.vue'
import searchView from './header/searchView.vue'
import menuView from './header/menuView.vue'
import userInfoView from './header/userInfoView.vue'
import headCenterView from './header/headCenterView.vue'
export default {
  name: 'headerView',
  props: {
    params: {
      type: Object,
      default: () => []
    },
    totalCount: {
      type: Number,
      default: () => []
    }
  },
  data () {
    return {
      isActive: true,
      placeholderDes: '快速查询'
      // 测试数据
      // user: 'dongshen'
      // menu: [
      //   { value: '角色管理' },
      //   { value: '能力类型' },
      //   { value: '培养计划' },
      //   { value: '角色排行榜' }
      // ]
    }
  },
  components: {
    logoView,
    searchView,
    menuView,
    userInfoView,
    headCenterView
  },
  computed: {
    renderData () {
      return this.params
    },
    renderTotalData () {
      return this.totalCount
    }
  },
  methods: {
    searchOk (value) {
      this.$emit('searchOk', value)
    }

  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
@import "../scss/common.scss";
.m-header {
  width: 1260px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 18px;
  .m-nav {
    width: 100%;
    height: auto;
    display: flex;
  }
.m-hd-center {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  }
}
</style>

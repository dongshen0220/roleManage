<template>
  <!-- <div class="m-header"> -->
    <div class="m-nav">
      <!-- logo-组件 -->
      <logo-view></logo-view>
      <!-- 导航栏-组件 -->
      <menu-view :value="renderData.userInfo.navList"></menu-view>
      <!-- 用户信息组件 -->
      <user-info-view :value="renderData.userInfo"></user-info-view>
    </div>
    <!-- <role-step-view></role-step-view> -->

  <!-- </div> -->
</template>
<script>
import logoView from './header/logoView.vue'
import menuView from './header/menuView.vue'
import userInfoView from './header/userInfoView.vue'
import roleStepView from '../../page/roleAdd/components/roleStepView.vue'
export default {
  name: 'header2View',
  props: {
    params: {
      type: Object,
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
    menuView,
    userInfoView,
    roleStepView
  },
  computed: {
    renderData () {
      return this.params
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
// .m-header {
//   width: 1260px;
//   height: 100%;
//   margin-left: auto;
//   margin-right: auto;
//   padding-top: 18px;
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
// }
</style>

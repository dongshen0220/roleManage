<template>
  <div class="g-container">
    <div class="g-header">
      <div class="m-header">
        <!-- head-组件 -->
        <header-view :params="renderData"></header-view>
        <role-step-view :params="renderData" @updaterolepath='updaterolepath'></role-step-view>
      </div>
    </div>
    <!-- main-body -->
    <div class="g-main">
      <div class="m-main-top"></div>
      <!-- main-body-组件 -->
      <role-update-view :params="renderData"
                     @save="save"
                     @cancle="cancle"></role-update-view>
    </div>
    <div class="g-footer">
      <!-- foot-组件 -->
      <footer-view></footer-view>
    </div>
  </div>
</template>
<script>
import headerView from '../../common/components/header2View'
import roleUpdateView from './components/roleUpdateView'
import footerView from '../../common/components/footerView'
import roleStepView from './components/roleStepView'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import router from '@/router/index'
export default {
  name: 'roleUpdate',
  props: {},
  data () {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    headerView,
    roleUpdateView,
    footerView,
    roleStepView
  },
  created () {
    this.initData()
  },
  computed: {
    ...mapGetters('roleUpdateCtrl', ['GET_RENDER_DATA']),
    renderData () {
      return this['GET_RENDER_DATA']
    }
  },
  methods: {
    ...mapActions('roleUpdateCtrl', ['DO_INIT_DATA', 'DO_UPDATE_ROLE']),
    ...mapMutations('adminTypeCtrl', ['SET_UPDATE_ROLE']),
    /**
     * @Description: 初始化用户数据
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-11 18:28:29
     */
    initData () {
      this['DO_INIT_DATA'](this.id).then((resolve) => {
      }).catch((res) => {
        console.log('error')
      })
    },
    save (value) {
      let id = this.id
      let param = { id, value }
      this['DO_UPDATE_ROLE'](param)
    },
    cancle () {
      router.push({name: 'RoleManage'})
    },
    updaterolepath () {
      router.push({name: 'RoleUpdatePath'})
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/common.scss";
.g-container {
  min-width: 1260px;
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

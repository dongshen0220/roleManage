<template>
  <div class="g-container">
    <div class="g-header">
      <div class="m-header">
        <!-- head-组件 -->
        <header-2-view :params="renderData"></header-2-view>
        <template v-if="renderData.showStatus === 1">
          <div class="m-hd-center">
            <head-center-view :value="renderData.abilityInfo.totalCount || 0"></head-center-view>
            <!-- 查询组件 -->
            <search-view :placeholderDes="placeholderDes" @searchOk="searchOk"></search-view>
          </div>
        </template>
        <template v-if="renderData.showStatus === 2">
          <step-view @addnode="addnode"></step-view>
        </template>
        <template v-if="renderData.showStatus === 3">
          <update-step-view :params="renderData"
                            @updateAbilityDetail="updateAbilityDetail"
                            @updateNodeDetail="updateNodeDetail"
                            @addNode="addNode"
                            @deleteAbilityById="remove"
                            @deleteNodeById="deleteNodeById"
                            ></update-step-view>
        </template>
        <template v-if="renderData.showStatus === 4">
          <detail-step-view :params="renderData"
                            @queryAbilityDetail="queryAbilityDetail"
                            @queryNodeDetail="queryNodeDetail"></detail-step-view>
        </template>
        <template v-if="renderData.showStatus === 5">
          <detail-step-view :params="renderData"
                            @queryAbilityDetail="queryAbilityDetail"
                            @queryNodeDetail="queryNodeDetail"></detail-step-view>
        </template>
      </div>
    </div>
    <!-- main-body -->
    <div class="g-main">
      <div class="m-main-top"></div>
      <!-- 能力模型列表页面组件 -->
      <template v-if="renderData.showStatus === 1">
        <!-- main-body-组件 -->
        <ability-type-list-view
          :params="renderData.abilityInfo.datalist"
          @update="update"
          @publish="publish"
          @remove="remove"
          @addAbility="addAbility"
          @queryAbilityDetail="queryAbilityDetail"
        ></ability-type-list-view>
        <!-- page-组件 -->
        <page-view :value="renderData.abilityInfo" @pageChange="pageChange"></page-view>
      </template>
      <!-- 新增能力模型页面组件 -->
      <template v-if="renderData.showStatus === 2">
        <ability-type-add-view
          :params="renderData"
          :placeholderDes="placeholderDes"
          :placeholderDes2="placeholderDes2"
          @saveAdd="saveAdd"
          @cancle="cancle"
        ></ability-type-add-view>
      </template>
      <!-- 修改能力模型页面组件 -->
      <template v-if="renderData.showStatus === 3">
        <ability-type-update-view
          :params="renderData"
          :placeholderDes="placeholderDes"
          :placeholderDes2="placeholderDes2"
          @saveUpdate="saveUpdate"
          @saveNode="saveNode"
          @cancle="cancle"
        ></ability-type-update-view>
      </template>
      <!-- 查询能力模型页面详情组件 -->
      <template v-if="renderData.showStatus === 4">
        <ability-type-detail-view
          :params="renderData"
        ></ability-type-detail-view>
      </template>
      <!-- 查询能力模型页面详情组件 -->
      <template v-if="renderData.showStatus === 5">
        <ability-node-detail-view
          :params="renderData.nodeList"
        ></ability-node-detail-view>
      </template>
    </div>
    <div class="g-footer">
      <!-- foot-组件 -->
      <footer-view></footer-view>
    </div>
    <remove-view :flag="renderData" @close="close" @sure="sureRemove"></remove-view>
    <update-view :flag="renderData" @close="close" @sure="sureUpdate"></update-view>
  </div>
</template>
<script>
import header2View from '../../common/components/header2View'
import abilityTypeListView from './components/abilityTypeListView'
import abilityTypeAddView from './components/abilityTypeAddView'
import abilityTypeUpdateView from './components/abilityTypeUpdateView'
import stepView from './components/addAbilityStepView'
import updateStepView from './components/updateAbilityStepView'
import detailStepView from './components/detailAbilityStepView'
import searchView from '../../common/components//header/searchView'
import headCenterView from '../../common/components/header/headCenterView'
import footerView from '../../common/components/footerView'
import pageView from '../../common/components/pageView'
import removeView from './components/removeView'
import updateView from './components/updateView'
import abilityTypeDetailView from './components/abilityTypeDetailView'
import abilityNodeDetailView from './components/abilityNodeDetailView'
import { mapGetters, mapActions, mapMutations } from 'vuex'
// import router from '@/router/index'
export default {
  name: 'index',
  props: {},
  data () {
    return {
      placeholderDes: '请输入能力维度名称',
      placeholderDes2: '请输入能力维度描述'
    }
  },
  components: {
    abilityTypeListView,
    abilityTypeAddView,
    abilityTypeUpdateView,
    footerView,
    pageView,
    removeView,
    updateView,
    header2View,
    stepView,
    searchView,
    headCenterView,
    updateStepView,
    abilityTypeDetailView,
    detailStepView,
    abilityNodeDetailView
  },
  created () {
    this.initData()
  },
  computed: {
    ...mapGetters('abilityTypeCtrl', ['GET_RENDER_DATA', 'GET_ABILITY_TYPE']),
    renderData () {
      return this['GET_RENDER_DATA']
    }
  },
  methods: {
    ...mapActions('abilityTypeCtrl', [
      'DO_INIT_DATA',
      'DO_SEARCH_STATE',
      'DO_REMOVE_ROLE',
      'DO_CLOSE_WINDOW',
      'DO_SURE_REMOVE_ROLE',
      'DO_UPDATE_ROLE',
      'DO_SURE_UPDATE_ABILITY',
      'DO_CHANGE_PAGE',
      'DO_CHANGE_SHOWSTATUS',
      'DO_ADD_ABILITY_SAVE',
      'DO_UPDATE_ABILITY_SAVE',
      'DO_ITEMS_INIT',
      'DO_QUERY_ABILITY_DETAIL',
      'DO_QUERY_NODE_DETAIL',
      'DO_UPDATE_NODE_DETAIL',
      'DO_DELETE_ABILITY_BY_ID',
      'DO_CHANGE_SHOWUPDATESTATUS',
      'DO_ADD_ABILITY_NODE',
      'DO_DELETE_NODE_BY_ID',
      'DO_UPDATE_ABILITY_DETAIL',
      'DO_UPDATE_NODE_SAVE'

    ]),
    ...mapMutations('abilityTypeCtrl', ['SET_ITEMS_INIT']),
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
      this['DO_SURE_REMOVE_ROLE']().then(() => {
        return new Promise(resolve => {
          if (this['GET_RENDER_DATA'].showStatus === 3) {
            let val = 1
            this['DO_CHANGE_SHOWSTATUS'](val)
          }
        })
      })
    },
    // 确认修改
    sureUpdate () {
      let val = 3 // 切换修改组件
      // let val2 = 0  //切换修改节点组件
      // let params = {'val1' : 3, 'val2': 0}
      this['DO_SURE_UPDATE_ABILITY'](val)
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
    // 新增能力类型
    addAbility () {
      let val = 2
      this['DO_CHANGE_SHOWSTATUS'](val)
    },
    saveAdd (value) {
      this['DO_ADD_ABILITY_SAVE'](value)
    },
    saveUpdate (value) {
      this['DO_UPDATE_ABILITY_SAVE'](value)
    },
    saveNode (value) {
      this['DO_UPDATE_NODE_SAVE'](value)
    },
    cancle () {
      let val = 1
      this['DO_CHANGE_SHOWSTATUS'](val)
    },
    // 新增技术节点
    addnode () {
      let val = 3
      this['DO_CHANGE_SHOWSTATUS'](val)
    },
    //  查询能力类型详情
    queryAbilityDetail (index) {
      let val = 4
      let params = {'showstatus': val, 'id': index}
      this['DO_QUERY_ABILITY_DETAIL'](params)
    },
    // 切换查询技术节点组件
    queryNodeDetail (index) {
      let val = 5
      let params = {'showstatus': val, 'id': index}
      this['DO_QUERY_NODE_DETAIL'](params)
    },
    // 切换修改技术节点组件
    updateNodeDetail (index) {
      let val = 3
      let params = {'showstatus': val, 'id': index}
      this['DO_UPDATE_NODE_DETAIL'](params)
    },
    // 切换查询技术节点组件
    updateAbilityDetail (index) {
      let val = 3
      let params = {'showstatus': val, 'id': index}
      this['DO_UPDATE_ABILITY_DETAIL'](params)
    },
    // 新增技术节点
    addNode () {
      // let val = 2
      // this['DO_CHANGE_SHOWUPDATESTATUS'](val)
      this['DO_ADD_ABILITY_NODE']()
    },
    // 删除技术节点
    deleteNodeById (index) {
      this['DO_DELETE_NODE_BY_ID'](index)
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
      .m-hd-center {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
      }
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

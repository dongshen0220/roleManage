<template>
  <div class="m-box-footer">
    <template v-if="item.publish === 1">
      <div class="u-item">
        <img src="../../../common/img/published.png">
        <span>已发布</span>
      </div>
    </template>
    <template v-if="item.publish === 2">
      <div class="u-item" @click="update()">
        <img src="../../../common/img/update.png">
        <span>修改</span>
      </div>
      <div class="u-split"></div>
      <div class="u-item" @click="publish()">
        <img src="../../../common/img/publish.png">
        <span>发布</span>
      </div>
    </template>
    <div class="u-split"></div>
    <div class="u-item" @click="remove()">
      <img src="../../../common/img/remove.png">
      <span>删除</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'handleRoleView',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/common.scss";
.m-box-footer {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 50px;
        color: #333333;
        background: #f6f6f6;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        align-items: center;
        .u-item {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          img {
            width: 15px;
            height: 15px;
          }
          span {
            height: 22px;
            font-size: 16px;
            margin-left: 10px;
          }
        }
        .u-split {
          width: 1px;
          height: 33px;
          background: #cccccc;
          line-height: 60px;
        }
      }
</style>

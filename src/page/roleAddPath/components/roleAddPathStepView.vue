<template>
  <div class="m-hd-center">
    <div class="m-step">
      <div class="u-step1">
        <span>项目经理项目经理</span>
      </div>
      <div class="u-arrow">
        <img src="../../../common/img/arrow.png">
      </div>
      <div class="u-step2">
        <span>项目经理项目经理1级</span>
      </div>
      <div class="u-arrow">
        <div class="u-add">
          <img src="../../../common/img/add.png" alt>
        </div>
        <img src="../../../common/img/arrow.png">
      </div>
      <div class="u-step3">
        <div class="u-close">
          <img src="../../../common/img/close.png">
        </div>
        <span>角色路径名称</span>
      </div>
      <div class="u-arrow">
        <img src="../../../common/img/arrow.png">
      </div>
      <div class="u-step4">
        <img src="../../../common/img/close.png">
        <span>新增角色路径</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'roleStepView',
  props: {
    // value: {
    //   type: Object,
    //   default: () => []
    // }
  },
  data () {
    return {}
  },
  computed: {
    // renderData () {
    //   return this.value
    // }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../common/scss/common.scss";
.m-hd-center {
  display: flex;
  justify-content: space-between;
  margin-top: 67px;
  .m-step {
    display: flex;
    align-items: center;
    height: 70px;
    margin-bottom: 50px;
    .u-step1 {
      width: 246px;
      height: 70px;
      border-radius: 10px;
      background-color: #ffffff;
      color: #404cf6;
      font-size: 24px;
      text-align: center;
      line-height: 70px;
      padding: 0 20px 0 20px;
    }
    .u-step2 {
      width: 160px;
      height: 70px;
      border-radius: 10px;
      background-color: #c8cbff;
      color: #404cf6;
      font-size: 14px;
      text-align: center;
      line-height: 70px;
      padding: 0 12px 0 12px;
    }
    .u-step3 {
      width: 160px;
      height: 70px;
      border-radius: 10px;
      background-color: #ffffff;
      color: #404cf6;
      font-size: 14px;
      text-align: center;
      line-height: 70px;
      padding: 0 12px 0 12px;
      position: relative;
      overflow: hidden;
      .u-close {
        position: absolute;
        top: -5px;
        right: -12px;
        width: 36px;
        height: 20px;
        transform: rotate(45deg);
        background-color: #df153d;
        padding-top: 2px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        img {
          position: absolute;
          transform: rotate(45deg);
          width: 7px;
          height: 7px;
        }
      }
    }
    .u-step4 {
      height: 70px;
      width: 160px;
      border: 2px dotted #ffffff;
      border-radius: 10px;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      line-height: 70px;
      img {
        width: 14px;
        height: 14px;
        transform: rotate(45deg);
      }
    }
    .u-arrow {
      width: 30px;
      height: 70px;
      margin: 10px;
      line-height: 70px;
      opacity: 0.5;
      position: relative;
      .u-add {
        position: absolute;
        top: -25px;
        left: 5px;
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>

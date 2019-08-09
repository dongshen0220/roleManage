<template>
  <div class="m-hd-center">
    <div class="m-step">
      <div class="u-roleAdd">
        <div class="u-close">
          <img src="../../../common/img/close.png" width="7px" height="7px">
        </div>
        <span>角色名称</span>
      </div>
      <div class="u-arrow">
        <img src="../../../common/img/arrow.png">
      </div>
      <div class="u-step4" @click="addrolepath()">
        <img src="../../../common/img/close.png" width="14" height="14" alt style="transform: rotate(45deg)">
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
  },
  methods: {
    addrolepath () {
      this.$emit('addrolepath')
    }
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
    .u-roleAdd {
      height: 70px;
      width: 246px;
      border-radius: 10px;
      background-color: #ffffff;
      color: blue;
      font-size: 18px;
      text-align: center;
      line-height: 70px;
      position: relative;
      overflow: hidden;
      .u-close {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 35px;
        height: 15px;
        top: 0px;
        right: -10px;
        padding-bottom: 2px;
        background: #df153d;
        transform: rotate(45deg);
        img {
          width: 7px;
          height: 7px;
          position: absolute;
          transform: rotate(45deg);
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

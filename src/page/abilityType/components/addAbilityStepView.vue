<template>
  <div class="m-hd-center">
    <div class="m-step">
      <div class="u-step-ability">
        <div class="u-close">
          <img src="../../../common/img/close.png">
        </div>
        <span>能力类型</span>
      </div>

      <div class="u-step4-addnode" @click="addnode()">
        <img src="../../../common/img/close.png">
        <span>新增技术节点</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addAbilityStepView',
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
    addnode () {
      this.$emit('addnode')
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
    .u-step-ability {
      height: 70px;
      width: 246px;
      border-radius: 10px;
      background-color: #ffffff;
      color: blue;
      font-size: 24px;
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
    .u-step4-addnode {
      margin-left: 20px;
      height: 40px;
      width: 178px;
      border: 2px dashed #ffffff;
      border-radius: 10px;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      line-height: 40px;
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

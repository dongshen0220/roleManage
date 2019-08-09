<template>
<div v-if="renderData.removeFlag">
  <div class="layer" ></div>
  <div class="m-content delete_layer">
    <div class="m-header">
      <div class="u-title">提示</div>
      <div class="u-close" @click="close()">
        <img src="../../../common/img/guanbi.png" width="14" height="14" alt>
      </div>
    </div>
    <div class="m-body">
      <div class="u-icon">
        <img src="../../../common/img/jinggaoIccon.png" width="30" height="30" alt>
      </div>
      <div class="u-msg">删除角色后将不可还原，你还要继续吗？</div>
    </div>
    <div class="m-footer">
      <div class="u-cancel" @click="close()">取消</div>
      <div class="u-sure" @click="sure()">确定</div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'removeView',
  props: {
    flag: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {
    renderData () {
      return this.flag
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    sure () {
      this.$emit('sure')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../common/scss/common.scss";
/*弹出框*/
.layer {
  // display: none;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #333333;
}
.m-content {
  // display: none;
  position: fixed;
  width: 350px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  top: calc(50% - 100px);
  left: calc(50% - 175px);
  .m-header {
    padding: 15px 15px 0px 15px;
    display: flex;
    justify-content: space-between;
    .u-title {
      height: 22px;
      font-size: 16px;
      color: #333333;
    }
    .u-close {
      cursor: pointer;
    }
  }
  .m-body {
    margin-top: 13px;
    margin-bottom: 45px;
    .u-icon {
      text-align: center;
    }
    .u-msg {
      height: 20px;
      line-height: 20px;
      text-align: center;
      margin-top: 15px;
      font-size: 14px;
      color: #666666;
    }
  }
  .m-footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 40px;
    display: flex;
    div {
      flex: 1;
      text-align: center;
      line-height: 40px;
    }
    .u-cancel {
      background: #f6f6f6;
      border-radius: 0px 0px 0px 10px;
      color: #404cf6;
      cursor: pointer;
    }
    .u-sure {
      background: #404cf6;
      border-radius: 0px 0px 10px 0px;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
</style>

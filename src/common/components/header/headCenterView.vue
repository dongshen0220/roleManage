<template>
  <div class="u-hd-left">
    <div class="u-status">
      <span>已创建{{renderData}}种角色模型</span>
    </div>
    <div class="u-button">
      <span>批量处理</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headCenterView',
  props: {
    value: {
      type: Number,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {
    renderData () {
      return this.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.u-hd-left {
  .u-status {
    height: 20px;
    color: #fff;
    font-size: 16px;
  }
  .u-button {
    width: 100px;
    height: 30px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    padding: 2px;
    font-weight: lighter;
    border-radius: 20px;
    background-color: rgba(34, 34, 34, 0.2);
    cursor: pointer;
  }
}
</style>

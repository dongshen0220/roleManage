<template>
  <div class="m-logo">
    <div class="u-logo"></div>
    <div class="u-title">标题标题</div>
  </div>
</template>
<script>
export default {
  name: 'logoView',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.m-logo {
  display: flex;

  .u-logo {
    width: 46px;
    height: 40px;
    background: url("../../img/logo.png") center center no-repeat;
    background-size: cover;
  }
  .u-title {
    width: 105px;
    height: 33px;
    margin-top: 1px;
    margin-left: 14px;
    margin-right: 41px;
    text-align: center;
    line-height: 33px;
    font-size: 24px;
    color: #ffffff;
  }
}
</style>

<template>
  <div class="m-user">
    <div class="u-user_msg"></div>
    <div class="u-user_img"><img v-bind:src="url" ></div>
    <div class="u-user_name">
      <span>{{renderData.name}} {{renderData.nowType}}</span>
    </div>
    <div class="u-user_configImg" @mouseenter="show" @mouseleave="close">
      <template v-if="showTip">
        <div class="u-drop"><span>{{renderData.nowType}}</span></div>
      </template>
    </div>
    <!-- <drop-down-view
    :dataList="dplist" labelProperty="city" @change="onDpChange($event)">
    </drop-down-view> -->
  </div>
</template>
<script>
export default {
  name: 'userInfoView',
  props: {
    value: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      url: this.value.img || 'http://avatar.paas.x/avatar/091005.jpg',
      showTip: false
    }
  },
  computed: {
    renderData () {
      return this.value
    }
  },
  methods: {
    show () {
      this.showTip = true
    },
    close () {
      this.showTip = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.m-user {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  .u-user_msg {
    width: 20px;
    height: 20px;
    margin-top: 5px;
    margin-right: 40px;
    background: url("../../img/msg.png");
    background-size: cover;
  }
  .u-user_img {
    overflow: hidden;
    width: 36px;
    height: 36px;
    margin-right: 20px;
    border-radius: 50%;
    // background: url("../../img/head_img.png");
    // background-size: cover;
    img {
    width: 36px;
    height: 36px;
    }
  }
  .u-user_name {
    height: 20px;
    margin-top: 5px;
    margin-right: 14px;
    font-size: 16px;
    color: #ffffff;
  }
  .u-user_configImg {
    position: relative;
    width: 18px;
    height: 11px;
    margin-top: 12px;
    background: url("../../img/down.png") center center no-repeat;
    background-size: cover;
    .u-drop{
      position: absolute;
      overflow: hidden;
      width: 80px;
      height: 60px;
      top: 60px;
      right: 0px;
      z-index: 1;
      background: #ffffff;
      border-radius: 10px;
    span {
      position: absolute;
      width: 100%;
      margin: 20px 0;
      color: #606266;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
    }
  }
}
</style>

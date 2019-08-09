<template>
  <div class="m-hd-center">
    <div class="u-nav">
      <ul>
        <li class="u-main" :class="{'active':buttonIndex == -1}">
          <span @click="queryAbilityDetail(renderData.id)"
                v-html="renderData.name"></span>
        </li>
        <li v-for="(item, index) in renderData.nodelist" :key="item.id" :class="{'active':index == buttonIndex}">
          <span @click="queryNodeDetail(item.id, index)">{{item.nodename}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailAbilityStepView',
  props: {
    params: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      buttonIndex: -1
    }
  },
  computed: {
    renderData () {
      return this.params.items
    }
  },
  methods: {
    queryNodeDetail (value, index) {
      this.buttonIndex = index
      this.$emit('queryNodeDetail', value)
    },
    queryAbilityDetail (value) {
      this.buttonIndex = -1
      this.$emit('queryAbilityDetail', value)
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
  .u-nav {
    overflow: hidden;
    height: 100px;
    width: auto;
    margin: 0px;
    ul {
      height: 100%;
      li {
        position: relative;
        width: auto;
        height: 40px;
        box-sizing: border-box;
        padding: 10px 30px 10px 30px;
        margin-left: 20px;
        float: left;
        border-radius: 10px;
        background-color: #c8cbff;
        span {
          font-size: 14px;
          color: #404cf6;
        }
      }
    }
    .u-main {
      width: 246px;
      height: 70px;
      padding: 19px 75px 18px 75px;
      margin: 15px 0;
      position: relative;
      background-color: #c8cbff;
      overflow: hidden;
      span {
        font-size: 24px;
      }
    }
    .active {
        background-color: #ffffff;
    }
    .u-secondLine {
      margin-top: 10px;
    }

  }
}
</style>

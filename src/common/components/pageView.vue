<template>
  <div class="m-page">
    <span class="u-pre" @click="pagePre()">上一页</span>
    <template v-for="(item,index) in renderData.totalPage">
    <span :key="index"
          :class="{'z-active': renderData.currentPage == index+1,'u-page': true}"
          @click="setCurrent(index+1)">{{item}}</span>
    </template>
    <span class="u-next" @click="pageNext()">下一页</span>
  </div>
</template>
<script>
export default {
  name: 'pageView',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    renderData () {
      return this.value
    }
  },
  methods: {
    /**
     * @Description: 设置页数跳转
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-23 11:43:59
     */
    setCurrent (index) {
      let _this = this.value
      if (_this.currentPage !== index && index > 0 && index < _this.totalPage + 1) {
        _this.currentPage = index
        this.$emit('pageChange', _this.currentPage)
      }
    },
    /**
     * @Description: 下一页
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-23 11:44:12
     */
    pageNext () {
      let _this = this.value
      if (_this.currentPage !== _this.totalPage) {
        _this.currentPage = _this.currentPage + 1
        this.$emit('pageChange', _this.currentPage)
      }
    },
    /**
     * @Description: 上一页
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-23 11:44:19
     */
    pagePre () {
      let _this = this.value
      if (_this.currentPage !== 1) {
        _this.currentPage = _this.currentPage - 1
        this.$emit('pageChange', _this.currentPage)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../scss/common.scss";
.m-page {
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 80px;
  span {
    height: 36px;
    text-align: center;
    background: #fff;
    border: 1px solid #e9e9e9;
    margin: 0px 5px;
    cursor: pointer;
    font-size: 14px;
    line-height: 36px;
  }
  & :hover{
    background: #4f4f4f;
    color: #fff;
  }
  .u-pre {
    width: 60px;
  }
  .u-page {
    width: 36px;
  }
  .u-next {
    width: 60px;
  }
  .z-active {
    background: #4f4f4f;
    color: #fff;
  }
}
</style>

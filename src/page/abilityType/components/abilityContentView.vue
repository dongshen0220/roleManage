<template>
    <div class="g-mainc">
      <div class="m-content-top">
        <span>能力维度</span>
      </div>
      <div class="m-content-main">
        <div class="m-content_input">
          <div class="u-need">*</div>
          <div class="u-input">
            <input type="text" v-model="items.name" ref="count" :disabled='true'>
            <span class="u-input-num" v-html="renderData.inputNum">/</span>
            <span class="u-limit-num" v-html="renderData.limitNumber"></span>
          </div>
          <template v-if="renderData.isShow">
            <div class="u-tip">
              <img src="../../../common/img/wrong.png" width="16px" height="16px">
              请输入正确的格式！
            </div>
          </template>
          <template v-if="renderData.isShow1">
            <div class="u-tip1" v-show="renderData.isShow1">
              <img src="../../../common/img/right.png" width="16px" height="16px">
            </div>
          </template>
        </div>
        <div class="m-content_input m-input-formargin">
          <div class="u-need"></div>
          <div class="u-input">
            <textarea v-model="items.memo" ref="text_count" :disabled='true'></textarea>
            <span class="u-text-num" v-html="renderData.textNum">/</span>
            <span class="u-limit-num" v-html="renderData.limitNumber2"></span>
          </div>
        </div>
      </div>
    </div>
</template>
<script >
export default {
  name: 'abilityContentView',
  props: {
    params: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      items: this.params.items
    }
  },
  computed: {
    renderData () {
      return this.params.items
    }
  },
  methods: {
    // addrolepath () {
    //   this.$emit('addrolepath')
    // }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../common/scss/common.scss";
.g-mainc {
    width: 1260px;
    height: 100%;
    border-radius: 10px;
    background-color: #ffffff;
    margin: 0 auto;
    .m-content-top {
      display: flex;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid #d9d9d9;
      padding: 0px 30px;
      height: 60px;
      margin: 0px auto;
      background: #ffffff;
      border-radius: 8px 8px 0px 0px;
      span {
        font-size: 18px;
        color: #333333;
      }
    }
    .m-content-main {
      padding: 30px;
      .m-content_input {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .u-need {
          color: red;
          height: 20px;
          width: 20px;
        }
        .u-input {
          margin-left: 20px;
          position: relative;
          input {
            box-sizing: border-box;
            width: 1000px;
            height: 60px;
            border: 1px solid #d9d9d9;
            border-radius: 8px;
            padding: 19px 20px;
            font-size: 16px;
            color: #999999;
          }
          input::-webkit-input-placeholder {
            font-size: 16px;
            color: #999999;
          }
          span {
            position: absolute;
            height: 20px;
            bottom: 20px;
            right: 16px;
            font-size: 14px;
            color: #999999;
          }
          .u-input-num {
            right: 26px;
          }
          .u-limit-num {
            right: 16px;
          }
          .u-text-num {
            right: 46px;
          }

          textarea {
            box-sizing: border-box;
            width: 1000px;
            height: 100px;
            border: 1px solid #d9d9d9;
            border-radius: 8px;
            padding: 19px 20px;
            font-size: 16px;
            color: #999999;
          }
          textarea::-webkit-input-placeholder {
            font-size: 16px;
            color: #999999;
          }
        }
        .u-tip {
          font-size: 12px;
          color: #dd3c3c;
          display: flex;
          align-items: center;
          padding-left: 10px;
        }
        .u-tip1 {
          display: flex;
          align-items: center;
          padding-left: 10px;
        }
      }
      .m-input-formargin {
        margin-top: 30px;
      }
    }
  }
  .g-mainc-formargin {
    margin-top: 30px;
  }
</style>

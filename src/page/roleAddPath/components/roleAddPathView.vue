<template>
  <div class="g-main">
    <div class="g-mainc">
      <div class="m-content-top">
        <span>新增角色路径</span>
      </div>
      <div class="m-content-main">
         <!-- <div class="m-content_input">
          <div class="u-need">*</div>
          <div class="u-input">
            <input type="text" v-model="items.text" ref="count" :placeholder="placeholderDes">
            <span class="u-input-num" v-html="inputNum">/</span>
            <span class="u-limit-num" v-html="limitNumber"></span>
          </div>
          <template v-if="isShow">
            <div class="u-tip">
              <img src="../../../common/img/wrong.png" width="16px" height="16px">
              请输入正确的格式！
            </div>
          </template>
          <template v-if="isShow1">
            <div class="u-tip1" v-show="isShow1">
              <img src="../../../common/img/right.png" width="16px" height="16px">
            </div>
          </template>
        </div>
        <div class="m-content_input m-input-formargin">
          <div class="u-need"></div>
          <div class="u-input">
            <textarea v-model="items.text_area" ref="text_count" :placeholder="placeholderDes2"></textarea>
            <span class="u-text-num" v-html="textNum">/</span>
            <span class="u-limit-num" v-html="limitNumber2"></span>
          </div>
        </div> -->
        <div class="m-content_input">
          <div class="u-need">*</div>
          <div class="u-input">
            <input type="text" v-model="items.text" ref="count" :placeholder="placeholderDes">
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
            <textarea v-model="items.text_area" ref="text_count" :placeholder="placeholderDes2"></textarea>
            <span class="u-text-num" v-html="renderData.textNum">/</span>
            <span class="u-limit-num" v-html="renderData.limitNumber2"></span>
          </div>
        </div>
        <div class="m-content_input m-input-formargin">
          <div class="u-need"></div>
          <div class="u-input">
          <select  v-model="renderData.selected">
            <option value="" disabled selected>请设置合格分数</option>
            <option :value="i.name"
                  v-for="(i,index) in renderData.selectList"
                  :key="index">{{i.name}}</option></select>
            <div class="u-down">
              <img src="../../../common/img/graydown.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <role-add-path-table-view :params="renderData"></role-add-path-table-view>
    <div class="m-buttons">
      <div class="u-cancel" @click="cancle()">取消</div>
      <div class="u-save" @click="save()">保存</div>
    </div>
  </div>
</template>
<script>
import roleAddPathTableView from './roleAddPathTableView'
export default {
  name: 'roleAddPathView',
  props: {
    params: {
      type: Object,
      default: () => []
    },
    placeholderDes: {
      type: String,
      require: true
    },
    placeholderDes2: {
      type: String,
      require: true
    }
  },
  components: {
    roleAddPathTableView
  },
  data () {
    return {
      items: this.params.items
    }
  },
  computed: {
    renderData () {
      return this.params
    }
  },
  watch: {
    // watch()监听某个值（双向绑定）的变化，从而达到change事件监听的效果
    items: {
      handler: function () {
        let _this = this
        // 字数计算
        let _inputSum = 10 // 字体限制为8个
        _this.$refs.count.setAttribute('maxlength', _inputSum)
        _this.params.inputNum = _this.$refs.count.value.length + '/'
        let _textSum = 200 // 字体限制为200个
        _this.$refs.text_count.setAttribute('maxlength', _textSum)
        _this.params.textNum = _this.$refs.text_count.value.length + '/'
        // 验证格式
        let inputTestPatt = /^[a-zA-Z]{0,8}$/
        let inputValue = _this.$refs.count.value
        if (inputValue !== undefined && inputValue !== null && inputValue !== '') {
          if (!inputTestPatt.test(inputValue)) {
            this.params.isShow = true
            this.params.isShow1 = false
          } else {
            this.params.isShow = false
            this.params.isShow1 = true
          }
        } else {
          this.params.isShow = false
          this.params.isShow1 = false
        }
      },
      deep: true
    }
  },
  methods: {
    save () {
      let _this = this
      let val1 = _this.$refs.count.value
      let val2 = _this.$refs.text_count.value
      let val3 = _this.params.selected
      let value = {val1, val2, val3}
      this.$emit('save', value)
    },
    cancle () {
      this.$emit('cancle')
    }

  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
@import "../../../common/scss/common.scss";
.g-main {
  width: 100%;
  height: auto;
  background-color: #f6f6f6;
  padding-top: 40px;
  padding-bottom: 40px;
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
          select {
            box-sizing: border-box;
            width: 485px;
            height: 60px;
            font-size: 16px;
            color: #999999;
            border: 1px solid #d9d9d9;
            border-radius: 8px;
            padding: 19px 20px;
          }
          .u-down {
            position: absolute;
            bottom: 20px;
            right: 16px;
            text-align: right;
            pointer-events: none;
            img {
              width: 12px;
              height: 12px;
            }
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
  .m-buttons {
    width: 1260px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 50px;
    padding-bottom: 337px;
    margin-left: auto;
    margin-right: auto;
    div {
      width: 120px;
      height: 50px;
      border: 1px solid #404cf6;
      border-radius: 8px;
      font-size: 18px;
      text-align: center;
      line-height: 50px;
      margin-left: 20px;
    }
    .u-cancel {
      background-color: #ffffff;
      color: #404cf6;
    }
    .u-save {
      background-color: #404cf6;
      color: #ffffff;
    }
  }
}
</style>

<template>
  <div class="m-hd-center">
    <div class="u-nav">
      <ul>
        <li
          class="u-main"
          :class="{'active':buttonIndex == -1}"
          @click="updateAbilityDetail(renderData.id)"
        >
          <div class="u-close" @click="deleteAbilityById(renderData.id)">
            <img src="../../../common/img/close.png" width="7px" height="7px" />
          </div>
          <span v-html="renderData.name"></span>
        </li>
        <li
          v-for="(item, index) in renderData.nodelist"
          :key="item.id"
          class="u-li"
          :class="{'active':index == buttonIndex, 'u-current':index == buttonIndex}"
        >
         <span v-if="item.nodename !== null" @click="updateNodeDetail(item.id, index)">{{item.nodename}}</span>
         <span v-else @click="updateNodeDetail(item.id, index)">技术节点名称</span>
          <div
          :class="{'u-close': index == buttonIndex}"
          @click="deleteNodeById(item.id)">
            <img src="../../../common/img/close.png" width="0px" height="0px" />
          </div>

        </li>
        <li class="u-add" @click="addNode(renderData.nodelist.length + 1)">
          <span>新增技术节点</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'updateAbilityStepView',
  props: {
    params: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      buttonIndex: -1 // 点击按钮高亮状态
    }
  },
  computed: {
    renderData () {
      return this.params.items
    }
  },
  methods: {
    addNode (index) {
      this.$emit('addNode')
      this.buttonIndex = index
    },
    updateNodeDetail (value, index) {
      this.buttonIndex = index
      this.$emit('updateNodeDetail', value)
    },
    updateAbilityDetail (value) {
      this.buttonIndex = -1
      this.$emit('updateAbilityDetail', value)
    },
    // 根据id删除能力类型
    deleteAbilityById (index) {
      this.$emit('deleteAbilityById', index)
    },
    // deleteNodeById 根据id删除技术节点
    deleteNodeById (index) {
      this.$emit('deleteNodeById', index)
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
      .u-main {
        width: 246px;
        height: 70px;
        padding: 19px 75px 18px 75px;
        margin: 15px 0;
        position: relative;
        background-color: #ffffff;
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
      .u-li {
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
        span {
          font-size: 24px;
        }
      }

      .u-secondLine {
        margin-top: 10px;
      }
      .u-add {
        padding-left: 62px;
        border: 2px dashed #fff;
        background-color: #404cf6;
        span {
          color: #fff;
        }
      }
      .u-add:after {
        content: "";
        position: absolute;
        top: 12px;
        left: 36px;
        width: 16px;
        height: 16px;
        background-size: auto;
        background: #404cf6 url("../../../common/img/add1.png") no-repeat center;
        background-size: 16px;
      }
      .u-current {
        overflow: hidden;
        background-color: #fff;
      }
      // .u-current:after {
      //   content: "";
      //   position: absolute;
      //   top: -15px;
      //   right: -15px;
      //   width: 30px;
      //   height: 30px;
      //   transform: rotate(45deg);
      //   background-size: auto;
      //   background: #df153d url("../../../common/img/add1.png") no-repeat;
      //   background-size: 10px;
      //   background-position-x: 10px;
      //   background-position-y: 20px;
      // }
    }
  }
}
</style>

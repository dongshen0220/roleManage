<template>
  <div class="g-mainc g-mainc-formargin">
    <div class="m-content-top">
      <div class="u-title">
        <span v-for="(title,index) in tabTitle" @click="cur=index" :class="{'u-active':cur==index}" :key="index">{{title}}</span>
      </div>
    </div>
    <div class="m-content-main">
      <div class="m-content_input">
        <div class="m-table">
          <ul>
            <li class="m-table-head">
              <div class="u-first-column">
                <span class="u-head-font">技术节点</span>
              </div>
              <div class="u-second-column">
                <span class="gray-font">说明</span>
              </div>
              <div class="u-third-column">
                <span class="u-head-font">默认分值</span>
              </div>
            </li>
            <li class="m-table-info" v-for="(m,index) in renderData" v-show="cur==index" :key="index">
              <div class="u-first-column">
                <span class="u-normal-font">{{m.nodename}}</span>
              </div>
              <div class="u-second-column">
                <span class="u-normal-font">{{m.nodedesc}}</span>
              </div>
              <div class="u-third-column">
                <span class="u-normal-font">{{m.nodetype}}</span>
              </div>
            </li>
            <div class="u-solid"></div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  name: 'abilityTableView',
  props: {
    params: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      tabTitle: ['默认技术节点', '新增技术节点'],
      //   tabMain: [
      //     {
      //       'nodetype': '0',
      //       'nodename': 'node0',
      //       'nodeurl': 'http://roletest.paas.x/#/',
      //       'nodedesc': 'node1-descript'
      //     },
      //     {
      //       'nodetype': '1',
      //       'nodename': 'node1',
      //       'nodeurl': 'http://roletest.paas.x/#/',
      //       'nodedesc': 'node1-descript'
      //     }
      //   ],
      //   tabMain: this.params.items.nodelist,
      cur: 0 // 默认选中第一个tab
    }
  },
  computed: {
    renderData () {
      return this.params.items.nodelist
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
  /* margin-top:30px; */
  .m-content-top {
    overflow: hidden;
    width: 100%;
    height: 61px;
    box-sizing: border-box;
    padding: 0 30px;
    border-bottom: 1px solid #d9d9d9;
    .u-title{
     padding:17px 0 ;
     display: inline-block;
     span:not(:first-child){
         margin-left: 79px;
     }
 }
    .u-active {
      border-bottom: 2px solid #404cf6;
      color: #404cf6;
    }
    span {
      font-size: 18px;
      color: #333333;
    }

    .u-add {
      margin-left: 79px;
    }
  }
  .m-content-main {
    padding: 30px;
    .m-content_input {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .m-table {
        width: 100%;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
        border-collapse: collapse;
        text-align: center;
        font-size: 14px;
        color: #222222;
        .m-table-head {
          display: flex;
          align-items: center;
          direction: row;
          background: #f9f9f9;
          height: 42px;
        }
        .m-table-info {
          display: flex;
          align-items: center;
          direction: row;
          background: #ffffff;
          height: 60px;
        }
        .u-fontcolor {
          color: red;
        }
        .u-solid {
          border: 1px solid #f9f9f9;
          border-width: 100%;
        }
        .u-dashed {
          border: 1px dashed #f9f9f9;
          border-width: 100%;
        }
        .u-first-column {
          text-align: center;
          flex: 2;
          cursor: pointer;
        }
        .u-second-column {
          text-align: center;
          flex: 3;
        }
        .u-third-column {
          text-align: center;
          flex: 1;
        }
        .u-fourth-column {
          .u-head-font {
            color: #404cf6;
          }
          img {
            padding: 6px;
            width: 12px;
            height: 12px;
          }
        }
      }
      .u-underline {
        text-decoration: underline;
      }
    }
  }
  .m-input-formargin {
    margin-top: 30px;
  }
}
.g-mainc-formargin {
  margin-top: 30px;
}
</style>

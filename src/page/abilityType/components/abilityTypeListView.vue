<template>
  <!-- main-body -->
  <div class="m-main-content">
    <!-- 第一栏 -->
    <div class="m-main-part">
      <!-- 第一栏第一格 -->
      <div class="m-part-box">
        <div @click="addAbility()">
          <div class="u-add"></div>
          <div class="u-add u-add-rotate"></div>
        </div>
      </div>
      <!-- /第一栏第一格 -->
      <!-- 第一栏box2 -->
      <div class="m-part-box" v-for="item in renderData" :key="item.id">
        <!-- box内容 -->
        <div class="m-box-body">
          <div class="u-box-title">
            <span @click="queryAbilityDetail(item.id)">{{item.name}}</span>
          </div>
          <div class="u-box-desc">
            <span>{{item.memo}}</span>
          </div>
          <div class="m-box-list">
            <div class="u-item">
              <img src="../../../common/img/node.png">
              <span>
                共有
                <span>{{item.nodelist!== undefined && item.nodelist!== null && item.nodelist.length>0 ? item.nodelist.length : '0'}}</span>项技术节点
              </span>
            </div>
            <div class="u-item">
              <img src="../../../common/img/collect.png">
              <span>
                共计
                <span>{{item.sum}}</span>分
              </span>
            </div>
          </div>
        </div>
        <!-- box底部按钮选项-->
        <div class="m-box-footer">
          <template v-if="item.publish === 1">
            <div class="u-item">
              <img src="../../../common/img/published.png">
              <span>已发布</span>
            </div>
          </template>
          <template v-if="item.publish === 2">
            <div class="u-item" @click="update(item.id)">
              <img src="../../../common/img/update.png">
              <span>修改</span>
            </div>
            <div class="u-split"></div>
            <div class="u-item" @click="publish(item.id)">
              <img src="../../../common/img/publish.png">
              <span>发布</span>
            </div>
          </template>
          <div class="u-split"></div>
          <div class="u-item" @click="remove(item.id)">
            <img src="../../../common/img/remove.png">
            <span>删除</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'abilityTypelistView',
  props: {
    params: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  data () {
    return {
      // items: [
      //   {
      //     'title': '前端角色',
      //     'desc': '前端角色1级desc',
      //     'joblist': [
      //       {'job': '前端角色1'},
      //       {'job': '前端角色2'},
      //       {'job': '前端角色3'},
      //       {'job': '前端角色4'}
      //     ]
      //   },
      //   {
      //     'title': '前端角色2',
      //     'desc': '前端角色1级desc',
      //     'joblist': [
      //       {'job': '前端角色1'},
      //       {'job': '前端角色2'},
      //       {'job': '前端角色3'},
      //       {'job': '前端角色4'}
      //     ]
      //   }
      // ]
    }
  },
  computed: {
    renderData () {
      return this.params
    }
  },
  methods: {
    /**
     * @Description:
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-11 18:23:25
     */
    update (index) {
      this.$emit('update', index)
    },
    /**
     * @Description:
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-11 18:23:28
     */
    publish () {
      this.$emit('publish')
    },
    /**
     * @Description:
     * @Author: dongshen
     * @param {type}
     * @return:
     * @Date: 2019-05-11 18:23:33
     */
    remove (index) {
      this.$emit('remove', index)
    },
    addAbility () {
      this.$emit('addAbility')
    },
    // 查询能力类型详情
    queryAbilityDetail (index) {
      this.$emit('queryAbilityDetail', index)
    }
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
@import "../../../common/scss/common.scss";
.m-main-content {
  width: 1260px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  .m-main-part {
    overflow: hidden;
    margin-top: -50px;
    .m-part-box:nth-child(3n) {
      margin-right: 0px;
    }
    .m-part-box {
      float: left;
      width: 400px;
      height: 240px;
      margin-right: 30px;
      margin-bottom: 30px;
      background: #ffffff;
      box-shadow: 0 2px 20px 0 rgba(90, 90, 90, 0.1);
      border-radius: 20px;
      position: relative;
      .u-add {
        position: absolute;
        width: 80px;
        height: 6px;
        background: #d8d8d8;
        top: 117px;
        left: 160px;
        border-radius: 10px;
      }
      .u-add-rotate {
        transform: rotate(90deg);
      }
      .u-toRoleIcon {
        width: 80px;
        height: 400px;
        margin: 0px auto;
        line-height: 460px;
        cursor: pointer;
        transform: rotate(45deg);
      }
      .m-box-body {
        padding: 30px;
        .u-box-title {
          font-size: 22px;
          line-height: 40px;
        }
        .u-box-desc {
          font-size: 12px;
          color: #999999;
        }
        .m-box-list {
          .u-item {
            display: inline-block;
            width: 150px;
            margin-top: 20px;
            color: #333;
            font-size: 14px;
            img {
              width: 18px;
              vertical-align: middle;
            }
            span {
              vertical-align: middle;
              span {
                color: #404cf6;
                vertical-align: baseline;
              }
            }
          }
        }
      }
      .m-box-footer {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 50px;
        color: #333333;
        background: #f6f6f6;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        align-items: center;
        .u-item {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          img {
            width: 15px;
            height: 15px;
          }
          span {
            height: 22px;
            font-size: 16px;
            margin-left: 10px;
          }
        }
        .u-split {
          width: 1px;
          height: 33px;
          background: #cccccc;
          line-height: 60px;
        }
      }
    }
  }
}
</style>

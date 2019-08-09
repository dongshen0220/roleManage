<template>
  <div class="m-menu">
    <template v-for="(item,index) in renderData">
      <span :key="index" :class="{'active': index == checkIndex}" @click="routerIndex(index,item.path)">{{item.name}}</span>
    </template>
  </div>
</template>
<script>
import router from '@/router/index'
export default {
  name: 'menuView',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isActive: true,
      checkIndex: 0
    }
  },
  computed: {
    renderData () {
      return this.value
    }
  },
  methods: {
    routerIndex (index, path) {
      // todo: 仅测试，写入在userinfo状态里
      this.checkIndex = index
      router.push({name: path})
      // let params = {index: index, path: path}
      // this.$emit('privsChange', params)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.m-menu {
  display: flex;
  span {
    height: 30px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 5px;
    font-size: 18px;
    color: #b2b7fb;
    cursor: pointer;
    &.active {
      color: #fff;
    }
  }
}
</style>

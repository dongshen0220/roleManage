<template>
  <div class="g-main">
    <!-- 能力维度组件 -->
    <ability-content-view :params="renderData"></ability-content-view>
    <!-- 计数节点组件 -->
    <ability-table-view :params="renderData"></ability-table-view>
  </div>
</template>
<script>
// import _ from 'lodash'
import abilityContentView from './abilityContentView'
import abilityTableView from './abilityTableView'
export default {
  name: 'abilityTypeDetailView',
  components: {
    abilityContentView,
    abilityTableView
  },
  props: {
    params: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  computed: {
    renderData () {
      return this.params
    }
  }
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
}
</style>

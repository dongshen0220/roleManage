<template>
   <div class="m-buttons">
      <div class="u-cancel" @click="cancle()">取消</div>
      <div class="u-save" @click="save()">保存</div>
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
    return {}
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
      cursor: pointer;
    }
    .u-save {
      background-color: #404cf6;
      color: #ffffff;
      cursor: pointer;
    }
  }
</style>

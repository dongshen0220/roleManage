<template>
<div class="u-hd-right">
  <div class="u-search-icon"></div>
  <input
    type="text"
    class="u-search"
    v-model="searchValue"
    :placeholder="placeholderDes"
    @keyup.enter="search"
  >
  </div>
</template>

<script>
export default {
  name: 'searchView',
  data () {
    return {
      searchValue: ''
    }
  },
  created () {
  },
  props: {
    placeholderDes: {
      type: String,
      require: true
    }
  },
  methods: {
    search () {
      this.$emit('searchOk', this.searchValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.u-hd-right {
    .u-search-icon {
      height: 20px;
      width: 20px;
      position: absolute;
      display: flex;
      align-items: center;
      margin-left: 20px;
      margin-top: 20px;
      background: url("../../img/search.png");
      background-size: cover;
      cursor: pointer;
    }
    .u-search {
      width: 400px;
      height: 60px;
      color: #ffffff;
      background: rgba(34, 34, 34, 0.2);
      border-radius: 20px;
      border: none;
      position: relative;
      padding: 5px;
      font-size: 16px;
      box-sizing: border-box;
      padding: 20px 30px 20px 60px;
      outline: none;
      .u-search::-webkit-input-placeholder {
        font-size: 16px;
        color: #ffffff;
      }
    }
  }
</style>

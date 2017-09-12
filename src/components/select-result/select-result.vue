<template>
  <div class='select-result'>
    <div>
      <div class="item" v-for="item in items">{{item}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .select-result
    display flex
    justify-content center
    align-content center
    flex-direction column
    height 100%
    div
      position: relative;
      width: 100%
      box-sizing: border-box
      display: flex
      flex-wrap wrap
      justify-content: center
      align-items: center;
      .item
        margin 0.32rem .1rem
        font-size 0.72rem
        height: 1.1rem;
        width: 1.1rem;
        line-height: 1.1rem;
        background-color #2F84D4
        border-radius 50%
        color $color-font-white
      &.active
        background-color #DEB84E
</style>

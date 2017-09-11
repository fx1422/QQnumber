<template>
  <div class='tab'>
    <router-link tag="div" class="tab-item" to="/exchange">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jiaoyi"></use>
      </svg>
      <div class="tab-link">交易</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/wallet">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-qianbao"></use>
      </svg>
      <div class="tab-link">钱包</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/mine">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wo1"></use>
      </svg>
      <div class="tab-link">我</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .tab
    display: flex
    font-size $font-size-medium
    border 1px solid #eee !important;
    position absolute
    bottom 0
    margin auto
    width 100%
    max-width 640px
    left 0
    right:0
    .tab-item
      flex: 1
      text-align: center
      .icon
        width 1.5em
        height 1.5em
        vertical-align -0.15em
        fill currentColor
        overflow hidden
        margin-top 5px
        color cornflowerblue
      .tab-link
        color: $color-font-tab
        margin-top 5px
      &.router-link-active
        .tab-link, .icon
          color: $color-font-act


</style>

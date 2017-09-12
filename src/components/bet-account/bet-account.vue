<template>
  <div class='bet-account'>
    <div class="balance">余额：666666</div>
    <div class="go-recharge">充值</div>
    <div class="have-bet">
      <p>已下注：50</p>
      <P>(手续费5元)</P>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .bet-account
    color $color-font-white
    height 100%
    font-size $font-size-large
    padding 0 0.6rem
    width:100%
    box-sizing border-box
    .balance
      line-height 8vh
      height 100%
      float left
    .go-recharge
      height 3vh
      padding 0.1rem 0.3rem
      line-height 3vh
      float left
      margin-left 0.5rem
      background-color #AFD0FF
      margin-top 2.5vh
      color #000000
      border-radius 6px
      font-size $font-size-medium-x
    .have-bet
      height 100%
      float right
      box-sizing border-box
      padding 0.2rem 0
      p
        line-height 4vh
        height 4vh
        font-size $font-size-medium-x
      p:nth-child(2)
        font-size $font-size-medium
        line-height 2vh
</style>

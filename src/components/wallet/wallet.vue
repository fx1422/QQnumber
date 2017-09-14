<template>
  <div class='wallet'>
    <div class="top">
      <div class="icon">
        <img src="./logo.png" alt="">
      </div>
      <div class="msg">
        <div class="msg-top">
          <div class="msg-top-list">现金余额</div>
          <div class="msg-top-list">红包余额</div>
        </div>
        <div class="bot">
          <div class="msg-list">0.00</div>
          <div class="msg-list">0.00</div>
        </div>
      </div>
    </div>
    <div class="btn btn1">充值</div>
    <div class="btn btn2">提现</div>
    <div class="tips">
      <p>每日最多提现5次</p>
      <p>单笔提现接1~5000</p>
      <p>红包余额不能体现</p>
    </div>
    <div class="safe">
      <img src="./safe.png" alt="">
      <p>保障您的资金安全</p>
    </div>
    <div class="btn btn3">联系客服</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .wallet
    position: fixed;
    width: 100%;
    top: 0;
    bottom: calc(1.5rem + 11px);
    max-width: 640px;
    margin: auto;
    left: 0px;
    right: 0;
    background-color: #f8f8f8;
    padding 0.5rem
    box-sizing border-box
    .top
      width 100%
      display flex
      justify-content flex-start
      font-size $font-size-medium-x
      align-items center
      .icon
        height 3.2rem
        display flex
        justify-content center
        align-items center
        border 1px solid #eee
        border-radius 6px
        width 3.2rem
        img
          height 3rem
          width 3rem
      .msg
        margin-left 1rem
        border 1px solid #eee
        border-radius 6px
        height 3.2rem
        width 100%
        display flex
        flex-direction column
        justify-content center
        padding 0 0.5rem
        box-sizing border-box
        .msg-top
          display flex
          justify-content space-between
          line-height 1.8rem
          color #9c9c9c
        .bot
          display flex
          line-height 1.8rem
          justify-content space-between
          .msg-list:nth-child(1)
            color #2a8ce5
          .msg-list:nth-child(2)
            color #ee3834
    .btn
      width:90%
      height 2.2rem
      display flex
      justify-content center
      align-items center
      font-size 0.88rem
      border-radius 6px
      margin 1rem auto
    .btn1
      background-color #f8626d
      color $color-font-white
    .btn2
      color #ee3834
      border 1px solid #eee
      background-color $color-background
    .btn3
      border 1px solid #eee
      background-color $color-background
      color #9c9c9c
    .tips
      text-align center
      font-size $font-size-medium-x
      color #9c9c9c
      p
        line-height 1rem
    .safe
      height 12rem
      display flex
      flex-direction column
      justify-content center
      align-items center
      img

        width:2rem
        height 2rem
      p
        font-size $font-size-medium-x
        height 2rem
        line-height 2rem
        color #9c9c9c
</style>

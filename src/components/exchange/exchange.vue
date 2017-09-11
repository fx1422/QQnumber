<template>
  <div class='exchange'>
    <scroll ref="scroll" class="exchange-content">
      <div class="box">
        <div class="exchange-header">
          <div class="item-1">
            <span>请绑定账号</span>
            <span>红包余额</span>
          </div>
          <div class="item-2">
            <p class="title">现金余额</p>
            <p class="balance">0.00</p>
          </div>
          <div class="item-3">
            <div class="recharge">充值</div>
            <span>微信秒提</span>
          </div>
        </div>
        <div class="exchange-tab">
          <ul>
            <li>
              <div class="exchange-tab-icon">
              </div>
              <div class="exchange-tab-msg">
                <p class="title">模拟交易</p>
                <p class="msg">新手练习</p>
              </div>
            </li>
            <li>
              <div class="exchange-tab-icon"></div>
              <div class="exchange-tab-msg">
                <p class="title">模拟交易</p>
                <p class="msg">新手练习</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="exchange-title">
          <p>马上竞猜</p>
          <p>竞猜QQ在线人数后3位，数据来自腾讯视频主页右上角 "当前在线人数"。<span>玩法介绍</span> <span>返水规则</span></p>
        </div>
        <div class="exchange-list">
          <ul>
            <li>
              <div class="exchange-list-item">
              </div>
              <div class="exchange-list-item">
                <div>初级场</div>
                <div>单注1手起，无返水</div>
              </div>
              <div class="exchange-list-item">
                <button></button>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {

    created() {
      this.$refs.scroll.refresh()
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .exchange
    position fixed
    width: 100%
    top: 0
    bottom 49px
    .exchange-content
      height 100%
      overflow hidden
      .box
        padding 5px 10px
        .exchange-header
          width 100%
          height 11rem
          background url("exchange-bg.png") center no-repeat
          background-size contain
          color $color-font-white
          .item-1
            height 3rem
            width: 100%
            line-height 4rem
            font-size $font-size-medium
            span:nth-child(1)
              float left
              margin-left 5px
            span:nth-child(2)
              float right
              margin-right 5px
          .item-2
            text-align center
            .title
              height 3rem
              line-height 2rem
              font-size $font-size-medium-x
          .item-3
            position relative
            span
              position absolute
              bottom 0.5rem
              right 0.4rem
              font-size $font-size-medium
            .recharge
              text-align center
              color: #4748d7;
              border-radius: 25px
              margin auto
              background-color $color-font-white
              height 2rem
              line-height 2rem
              margin-top .9rem
              width: 6rem
        .exchange-tab
          margin-top 10px
          ul
            width: 100%;
            display: flex;
            justify-content: space-between;
            li
              border-radius: 5px;
              margin 0 10px
              height 4rem
              border: 1px solid #eee;
              background: #fff;
              flex: 1;
              display: flex;
              align-items center
              .exchange-tab-icon
                width 30%
                height 100%
                background url("icon-simulator.png") center no-repeat
                background-size contain
              .exchange-tab-msg
                margin-left 1.5rem
                p
                height 2rem
                line-height 1.3rem
                .title
                  font-size $font-size-medium-x
                .msg
                  color #9c9c9c
                  font-size $font-size-medium
        .exchange-title
          padding-right: 10px;
          font-size $font-size-medium
          p:nth-child(1)
            margin-top: 10px
            margin-left: 20px
            width: 100%
            color: #9c9c9c;
          p:nth-child(2)
            padding: 0 20px;
            text-align: justify;
            line-height 1.4rem
            color: #9c9c9c;
            span
              color: #2a8ce5;
              margin-left: 8px;
        .exchange-list
          ul
            li
              display flex
              align-items center
              height 3.4rem
              margin-top: 10px;
              border: 1px solid #eee;
              background-color: #fff;
              border-radius: 5px;
              position: relative;
              padding 10px
              .exchange-list-item:nth-child(1)
                height 100%
                width 20vw
                float left
                background url("exchange-icon-1.png") center no-repeat
                background-size contain
              .exchange-list-item:nth-child(2)
                height 100%
                justify-content center
                flex-direction column
                display flex
                width 40vw
                div
                  line-height 1rem
                  height 1.4rem
                div:nth-child(1)
                  font-size $font-size-medium-x
                div:nth-child(2)
                  font-size $font-size-medium
                  color #9c9c9c
              .exchange-list-item:nth-child(3)
                width 40vw
                height 100%
                button
                  width: 100%
                  height 100%
                  border none
                  background url("exchange-btn.png") center center no-repeat
                  background-size contain


</style>

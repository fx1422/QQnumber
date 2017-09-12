<template>
  <transition name="slide">
    <div class='bet-page'>
      <div class="bet-content">
        <div class="content-top">
          <div class="item-left">玩法介绍</div>
          <div class="item-mid">
            <Marquee :duration="600" :interval="2000">
              <item v-for="i in listData" :content="i">
                {{i}}
              </item>
            </Marquee>
          </div>
          <div class="item-right">走势图</div>
        </div>
        <div class="content-mid">
          <div class="mid-l">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </div>
          <div class="mid-m">
            <div class="item"></div>
            <div class="item">
              <div class="top">
                <div class="list">
                  <p>即将开奖期号</p>
                  <p>20170214-0823</p>
                </div>
                <div class="list">
                  5
                </div>
                <div class="list">
                  开奖中
                </div>
              </div>
              <div class="bot">
                <div class="history-list">12</div>
                <div class="history-list">12</div>
                <div class="history-list">12</div>
                <div class="history-list">12</div>
                <div class="history-list">12</div>
              </div>
            </div>
            <div class="item"></div>
          </div>
          <div class="mid-r">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </div>
        </div>
        <div class="content-bot">
          <just-tips v-if="selected"></just-tips>
          <select-result></select-result>
        </div>
      </div>
      <div class="bet-msg">
        <div class="msg-l">
          <div class="close-music"></div>
        </div>
        <div class="msg-m">
          <div class="chips"></div>
          <div class="chips"></div>
          <div class="chips"></div>
        </div>
        <div class="msg-r">
          <div class="close-bet"></div>
        </div>
      </div>
      <div class="bet-account">
        <bet-account></bet-account>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import JustTips from 'components/just-tips/just-tips'
  import SelectResult from 'components/select-result/select-result'
  import BetAccount from 'components/bet-account/bet-account'

  export default {
    data() {
      return {
        listData: ['item1', 'item2', 'item3'],
        selected: false
      }
    },
    components: {
      JustTips,
      SelectResult,
      BetAccount
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .bet-page
    position absolute
    height 100vh
    width 100%
    top: 0
    max-width 640px
    right 0
    margin auto
    left 0
    .bet-content
      background-color #072161
      height 80vh
      .content-top
        height 7vh
        padding 0 1rem
        position relative
        display flex
        .item-left
          line-height 7vh
          color #AFD0FF
          font-size 0.82rem
          width:22vw
          height 100%
          text-align center
        .item-right
          line-height 7vh
          color #AFD0FF
          font-size 0.82rem
          width:22vw
          height 100%
          text-align center
        .item-mid
          width: 56vw
          line-height 7vh
          height 100%
          color #AFD0FF
          text-align center
          font-size 0.82rem
      .content-mid
        font-size 0.6rem
        height 60vh
        box-sizing border-box
        padding 1.6rem
        display flex
        justify-content space-between
        .mid-l
          height 100%
          width: 29%
          display flex
          flex-direction column
          justify-content space-between
          .item
            width: 100%
            height 24%
            background-color white
          .item:nth-child(1)
            background url("img/grid-4.png") center no-repeat
            background-size contain
          .item:nth-child(2)
            background url("img/grid-2.png") center no-repeat
            background-size contain
          .item:nth-child(3)
            background url("img/grid-3.png") center no-repeat
            background-size contain
          .item:nth-child(4)
            background url("img/grid-4.png") center no-repeat
            background-size contain
        .mid-m
          height 100%
          width: 40%
          display flex
          flex-direction column
          justify-content space-between
          .item
            width: 100%
            height 24%
          .item:nth-child(1)
            height 24%
            background url("img/grid-5.png") center no-repeat
            background-size contain
          .item:nth-child(2)
            height 50%
            .top
              height 88%
              background url("img/center1.png") center no-repeat
              background-size contain
              .list
                color $color-font-white
                text-align center
                p
                  line-height 0.8rem
              .list:nth-child(1)
                height 23%
                padding-top 0.3rem
                font-size 0.5rem
              .list:nth-child(2)
                height 38%
                font-size 1.5rem
                display flex
                flex-direction column
                justify-content center
              .list:nth-child(3)
                height 23%
                font-size 0.5rem
            .bot
              height 12%
              display flex
              justify-content space-between
              color $color-background-white
              padding 0 .2rem
              .history-list
                width: 16%
                height 95%
                display flex
                flex-direction column
                justify-content center
                text-align center
                background-color #2F84D4
                border-radius 50%
          .item:nth-child(3)
            height 24%
            background url("img/grid-6.png") center no-repeat
            background-size contain
        .mid-r
          height 100%
          width: 29%
          display flex
          flex-direction column
          justify-content space-between
          .item:nth-child(1)
            background url("img/grid-7.png") center no-repeat
            background-size contain
          .item:nth-child(2)
            background url("img/grid-8.png") center no-repeat
            background-size contain
          .item:nth-child(3)
            background url("img/grid-9.png") center no-repeat
            background-size contain
          .item:nth-child(4)
            background url("img/grid-10.png") center no-repeat
            background-size contain
          .item
            width: 100%
            height 24%
            background-color white
      .content-bot
        height 13vh

    .bet-msg
      background-color #223C80
      height 12vh
      display flex
      .msg-l
        width: 21%
        height 100%
        display flex
        align-items center
        justify-content center
        .close-music
          height 39px
          width 39px
          background url("img/icon-sound.png") no-repeat
          background-size cover
          background-position-y 0
      .msg-m
        width: 58%
        height 100%
        display flex
        justify-content space-between
        .chips
          width 33.3%
          height 100%
        .chips:nth-child(1)
          background url("img/chip-1.png") center no-repeat
          background-size contain
        .chips:nth-child(2)
          background url("img/chip-2.png") center no-repeat
          background-size contain
        .chips:nth-child(3)
          background url("img/chip-3.png")center no-repeat
          background-size contain
      .msg-r
        width: 21%
        height 100%
        display flex
        justify-content center
        align-items center
        .close-bet
          height 39px
          width 39px
          background url("img/icon-clear.png") no-repeat
          background-size cover
          background-position-y 0
    .bet-account
      background-color #1F3775
      height 8vh

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

</style>

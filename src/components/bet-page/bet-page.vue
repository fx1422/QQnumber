<template>
  <transition name="slide">
    <div class='bet-page'>
      <div class="bet-content">
        <div class="content-top">
          <div class="item-left">玩法介绍</div>
          <div class="item-mid">
            <Marquee :duration="600" :interval="2000">
              <marquee-data></marquee-data>
            </Marquee>
          </div>
          <div class="item-right">走势图</div>
        </div>
        <div class="content-mid">
          <div class="mid-l">
            <div class="item" @click="selectedType($event,'bd','3')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item" @click="selectedType($event,'b','2')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item" @click="selectedType($event,'d','2')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item" @click="selectedType($event,'bs','4')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
          </div>
          <div class="mid-m">
            <div class="item" @click="selectedType($event,'sss','60')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
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
            <div class="item" @click="selectedType($event,'abc','60')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
          </div>
          <div class="mid-r">
            <div class="item" @click="selectedType($event,'ss','3')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item" @click="selectedType($event,'s','2')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item" @click="selectedType($event,'s','2')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item" @click="selectedType($event,'sd','4')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
          </div>
        </div>
        <div class="content-bot">
          <just-tips v-if="!numberType.length"></just-tips>
          <select-result v-if="numberType.length" :betMsg="betMsg"></select-result>
        </div>
      </div>
      <div class="bet-msg">
        <div class="msg-l">
          <div class="close-music"></div>
        </div>
        <div class="msg-m">
          <div class="chips" :ref="item.name" v-for="(item,index) in betNumber" @click="selectBetNumber(item,index)"
               :class="{'chips-active':selectedNum===index}">
          </div>

        </div>
        <div class="msg-r">
          <div class="close-bet" @click="resetBet"></div>
        </div>
      </div>
      <div class="bet-account">
        <bet-account :betNumber="numberType"></bet-account>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import JustTips from 'components/just-tips/just-tips'
  import SelectResult from 'components/select-result/select-result'
  import BetAccount from 'components/bet-account/bet-account'
  import MarqueeData from 'base/marquee-data/marquee-data'
  import animations from 'create-keyframe-animation'
  import bg0 from 'components/bet-page/img/chip-1.png'
  import bg1 from 'components/bet-page/img/chip-2.png'
  import bg2 from 'components/bet-page/img/chip-3.png'
  import bgF0 from 'components/bet-page/img/chip-1-L.png'
  import bgF1 from 'components/bet-page/img/chip-2-L.png'
  import bgF2 from 'components/bet-page/img/chip-3-L.png'

  export default {
    data() {
      return {
        numberType: '',
        selectedNum: null,
        betNumber: [{name: 'chips10', value: 10, bg: `${bg0}`}, {name: 'chips100', value: 50, bg: `${bg1}`}, {
          name: 'chips100',
          value: 100,
          bg: `${bg2}`
        }],
        startPos: {},
        clone: '',
        currentRate: '',
        showFlow: false,
        Fbg: [`${bgF0}`, `${bgF1}`, `${bgF2}`],
        FFbg: '',
        betMsg: []
      }
    },
    methods: {
      selectBetNumber(val, index) {
        const el = document.getElementById('clone')
        const left = 33.3 * index
        const current = event.currentTarget
        if (el) {
          el.parentNode.removeChild(el);
        }
        this.currentRate = val.value//当前选中注额
        this.FFbg = this.Fbg[index]//投注浮动背景
        this.selectedNum = index //设置选中注额样式
        //clone移动的注额
        this.clone = current.cloneNode(true)
        this.setCloneStyle(this.clone, left, index)
        current.parentNode.append(this.clone)
        const obj = clone.getBoundingClientRect()
        this.startPos.x = obj.left
        this.startPos.y = obj.top
        this.startPos.width = obj.width
        this.startPos.height = obj.height
      },
      selectedType(el, type, num) {
        const current = event.currentTarget
        if (this.clone.length === 0) {
          return
        }
        //设置投注详情
        this.getBetMsg(el, type, num)
        const {x, y, scale} = this._getPosAndScale()
        //投注动画
        let animation = {
          99: {
            transform: `translate3d(${x}px,${y}px,0) scale(1)`
          },
          100: {
            transform: `translate3d(0px,0px,0) scale(1)`
          }
        }
        animations.registerAnimation({
          name: 'move',
          animation,
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: true
          }
        })
        const _this = this
        animations.runAnimation(this.clone, 'move', function () {
          //设置投注数额
          current.children[0].innerText = Number(current.children[0].innerText) + Number(_this.currentRate)
          current.children[0].style.display = 'block'
          current.children[0].style.background = `url("${_this.FFbg}") center no-repeat`
          current.children[0].style.backgroundSize = "contain"

        })
      },
      _getPosAndScale() {
        const current = event.currentTarget
        const obj = current.getBoundingClientRect()
        const scale = 0.8
        const x = -(this.startPos.x - obj.left - ((obj.width - this.startPos.width) / 2))
        const y = -(this.startPos.y - obj.top - ((obj.height - this.startPos.height) / 2))
        return {
          x, y, scale
        }
      },
      setCloneStyle(el, left, index) {
        el.style.width = '33.3%'
        el.style.left = left + '%'
        el.style.position = 'absolute'
        el.style.backgroundImage = `url("${this.betNumber[index].bg}")`
        el.style.backgroundSize = 'contain'
        el.style.backgroundPosition = 'center'
        el.style.backgroundRepeat = 'no-repeat'
        el.style.zIndex = '999'
        el.style.display = 'block'
        el.setAttribute('id', 'clone')
      },
      getBetMsg(el, type, num) {
        this.numberType = el.type
        const o = {
          rate: this.currentRate,
          type: type,
          gain: num
        }
        this.betMsg.push(o)
        //console.log(JSON.stringify(this.betMsg))
      },
      resetBet() {
        // console.log(this.clone)
       const obj = document.getElementsByClassName('item-flow')
        for (const value of obj) {
           value.style.display = 'none'
        }
        this.$refs.itemFlow.innerText = ''
        this.betMsg = []

      }
    },


    components: {
      JustTips,
      SelectResult,
      BetAccount,
      MarqueeData
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
          width: 22vw
          height 100%
          text-align center
        .item-right
          line-height 7vh
          color #AFD0FF
          font-size 0.82rem
          width: 22vw
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
            position relative
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
            background url("img/grid-1.png") center no-repeat
            background-size contain
          .item-flow
            position absolute
            left 0
            right 0px
            margin auto
            top 0
            bottom 0
            height 80%
            width 80%
            background-size contain
            display none
            color white
            text-align center
            line-height 9.5vh
            font-size $font-size-large
            font-weight 600
            letter-spacing 1px
        .mid-m
          height 100%
          width: 40%
          display flex
          flex-direction column
          justify-content space-between
          .item-flow
            position absolute
            left 0
            right 0px
            margin auto
            top 0
            bottom 0
            height 80%
            width 80%
            background-size contain
            display none
            color white
            text-align center
            line-height 9.5vh
            font-size $font-size-large
            font-weight 600
            letter-spacing 1px
          .item
            width: 100%
            height 24%
            position relative
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
          .item-flow
            position absolute
            left 0
            right 0px
            margin auto
            top 0
            bottom 0
            height 80%
            width 80%
            background-size contain
            display none
            color white
            text-align center
            line-height 9.5vh
            font-size $font-size-large
            font-weight 600
            letter-spacing 1px
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
            position relative
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
        position relative
        .chips
          width 33.3%
          height 100%
          position relative
        .chips:nth-child(1)
          background url("img/chip-1.png") center no-repeat
          background-size contain
        .chips:nth-child(2)
          background url("img/chip-2.png") center no-repeat
          background-size contain
        .chips:nth-child(3)
          background url("img/chip-3.png") center no-repeat
          background-size contain
        .chips-active
          transform: rotate(360deg) scale(1.2)

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

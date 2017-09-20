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
            <div class="item bigDouble" @click="(cutDownTime>9)&&selectedType($event,'bd','3')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item big" @click="(cutDownTime>9)&&selectedType($event,'b','2')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item double" @click="(cutDownTime>9)&&selectedType($event,'d','2')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item bigSingle" @click="(cutDownTime>9)&&selectedType($event,'bs','4')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
          </div>
          <div class="mid-m">
            <div class="item same" @click="(cutDownTime>9)&&selectedType($event,'sss','60')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item">
              <div ref="cutP" v-show="cutPeriod" class="top">
                <div class="list">
                  <p>即将开奖期号</p>
                  <p>20170214-0823</p>
                </div>
                <div ref="sencondTime" class="list">
                  {{cutDownTime}}
                </div>
                <div ref="openState" class="list">
                  下单中
                </div>
              </div>
              <div ref="openP" v-show="openPeriod" class="top openResult">
                <div class="list">
                  <p>QQ在线人数</p>
                  <p>55225525</p>
                </div>
                <div class="list num">
                  <span ref="num1" class="numbers">{{winResult[0]}}</span>
                  <span ref="num2" class="numbers">+</span>
                  <span ref="num3" class="numbers">{{winResult[1]}}</span>
                  <span ref="num4" class="numbers">+</span>
                  <span ref="num5" class="numbers">{{winResult[2]}}</span>
                  <span ref="num6" class="numbers">=</span>
                </div>
                <div ref="sum" class="sum numbers">
                  {{Number(winResult[0]) + Number(winResult[1]) + Number(winResult[2])}}
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
            <div class="item order" @click="(cutDownTime>9)&&selectedType($event,'abc','60')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
          </div>
          <div class="mid-r">
            <div class="item smallSingle" @click="(cutDownTime>9)&&selectedType($event,'ls','3')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item small" @click="(cutDownTime>9)&&selectedType($event,'l','2')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item single" @click="(cutDownTime>9)&&selectedType($event,'s','2')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
            <div class="item smallDouble" @click="(cutDownTime>9)&&selectedType($event,'ld','4')">
              <div class="item-flow" ref="itemFlow"></div>
            </div>
          </div>
        </div>
        <div class="content-bot">
          <just-tips v-if="!numberType.length"></just-tips>
          <select-result v-if="numberType.length" :showMsg="showMsg"></select-result>
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
        <bet-account></bet-account>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import jsonp from 'jsonp'
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
        betMsg: [],
        showMsg: null,
        cutDownTime: 15,
        cutPeriod: true,
        openPeriod: false,
        timer1: '',
        winResult: [9, 9, 1]
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
        this.showMsg = type
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
        const obj = document.getElementsByClassName('item-flow')
        const list = document.getElementsByClassName('numItem')
        for (const value of obj) {
          value.style.display = 'none'
        }
        for (const value of list) {
          value.setAttribute('class', 'numItem')
        }
        this.$refs.itemFlow.innerText = ''
        this.betMsg = []
        this.showMsg = ''
        this.numberType = ''
      },
      cutTimeAnimation() {
        const animation = {
          0: {
            transform: `scale(3)`
          },
          50: {
            transform: `scale(1.8)`
          },
          100: {
            transform: `scale(1)`
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
        animations.runAnimation(this.$refs.sencondTime, 'move')
      },
      cutPageAnimation(obj) {
        const animation = {
          0: {
            transform: `rotateY(0deg)`
          },
          50: {
            transform: `rotateY(45deg)`
          },
          100: {
            transform: `rotateY(90deg)`
          }
        }
        animations.registerAnimation({
          name: 'rate',
          animation,
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: false
          }
        })
        const _this = this
        animations.runAnimation(obj, 'rate', function () {
          _this.cutPeriod = false
          _this.openPeriod = true
          _this.moveNumb()
          _this.$refs.cutP.style.animation = ''
        })
      },
      openPageAnimation(obj) {
        const animation = {
          0: {
            transform: `rotateY(0deg)`
          },
          50: {
            transform: `rotateY(45deg)`
          },
          100: {
            transform: `rotateY(90deg)`
          }
        }
        animations.registerAnimation({
          name: 'rate',
          animation,
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: false
          }
        })
        const _this = this
        animations.runAnimation(obj, 'rate', function () {
          setTimeout(() => {
            _this.cutPeriod = true
            _this.openPeriod = false
            //重置定时器
            const list = document.getElementsByClassName('numbers')
            for (var value of list) {
              value.style.visibility = 'hidden'
            }
            _this.$refs.sencondTime.style.color = 'white'
            _this.cutDownTime = 15
            _this.timer1 = setInterval(() => {
              _this.cutDownTime--
            }, 1000)
            obj.style.animation = ''
          }, 100)
        })
      },
      moveNumb() {
        const num1 = this.$refs.num1, num2 = this.$refs.num2, num3 = this.$refs.num3, num4 = this.$refs.num4,
          num5 = this.$refs.num5, num6 = this.$refs.num6
        animations.registerAnimation({
          name: 'rate',
          animation: {
            0: {
              transform: `translate3d(-2rem,-4rem,0) scale(4) rotateX(90deg)`
            },
            50: {
              transform: `translate3d(-1rem,-3rem,0) scale(4) rotateX(45deg)`
            },
            100: {
              transform: `translate3d(0px,0px,0) scale(1) rotateX(0deg)`
            }
          },
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: true
          }
        })
        const _this = this
        num1.style.visibility = 'visible'
        animations.runAnimation(num1, 'rate', function () {
          num2.style.visibility = 'visible'
          _this.moveNumb2()
        })
      },
      moveNumb2() {
        const num1 = this.$refs.num1, num2 = this.$refs.num2, num3 = this.$refs.num3, num4 = this.$refs.num4,
          num5 = this.$refs.num5, num6 = this.$refs.num6
        animations.registerAnimation({
          name: 'rate2',
          animation: {
            0: {
              transform: `translate3d(-2rem,-4rem,0) scale(4) rotateX(90deg)`
            },
            50: {
              transform: `translate3d(-1rem,-3rem,0) scale(4) rotateX(45deg)`
            },
            100: {
              transform: `translate3d(0px,0px,0) scale(1) rotateX(0deg)`
            }
          },
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: true
          }
        })
        const _this = this
        animations.runAnimation(num2, 'rate2', function () {
          num3.style.visibility = 'visible'
          _this.moveNumb3()
        })
      },
      moveNumb3() {
        const num1 = this.$refs.num1, num2 = this.$refs.num2, num3 = this.$refs.num3, num4 = this.$refs.num4,
          num5 = this.$refs.num5, num6 = this.$refs.num6
        animations.registerAnimation({
          name: 'rate2',
          animation: {
            0: {
              transform: `translate3d(-2rem,-4rem,0) scale(4) rotateX(90deg)`
            },
            50: {
              transform: `translate3d(-1rem,-3rem,0) scale(4) rotateX(45deg)`
            },
            100: {
              transform: `translate3d(0px,0px,0) scale(1) rotateX(0deg)`
            }
          },
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: true
          }
        })
        const _this = this
        animations.runAnimation(num3, 'rate2', function () {
          num4.style.visibility = 'visible'
          _this.moveNumb4()
        })
      },
      moveNumb4() {
        const num1 = this.$refs.num1, num2 = this.$refs.num2, num3 = this.$refs.num3, num4 = this.$refs.num4,
          num5 = this.$refs.num5, num6 = this.$refs.num6
        animations.registerAnimation({
          name: 'rate2',
          animation: {
            0: {
              transform: `translate3d(-2rem,-4rem,0) scale(4) rotateX(90deg)`
            },
            50: {
              transform: `translate3d(-1rem,-3rem,0) scale(4) rotateX(45deg)`
            },
            100: {
              transform: `translate3d(0px,0px,0) scale(1) rotateX(0deg)`
            }
          },
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: true
          }
        })
        const _this = this
        animations.runAnimation(num4, 'rate2', function () {
          num5.style.visibility = 'visible'
          _this.moveNumb5()
        })
      },
      moveNumb5() {
        const num1 = this.$refs.num1, num2 = this.$refs.num2, num3 = this.$refs.num3, num4 = this.$refs.num4,
          num5 = this.$refs.num5, num6 = this.$refs.num6
        animations.registerAnimation({
          name: 'rate2',
          animation: {
            0: {
              transform: `translate3d(-2rem,-4rem,0) scale(4) rotateX(90deg)`
            },
            50: {
              transform: `translate3d(-1rem,-3rem,0) scale(4) rotateX(45deg)`
            },
            100: {
              transform: `translate3d(0px,0px,0) scale(1) rotateX(0deg)`
            }
          },
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: true
          }
        })
        const _this = this
        animations.runAnimation(num5, 'rate2', function () {
          num6.style.visibility = 'visible'
          _this.moveNumb6()
        })
      },
      moveNumb6() {
        const num1 = this.$refs.num1, num2 = this.$refs.num2, num3 = this.$refs.num3, num4 = this.$refs.num4,
          num5 = this.$refs.num5, num6 = this.$refs.num6
        animations.registerAnimation({
          name: 'rate2',
          animation: {
            0: {
              transform: `translate3d(-2rem,-4rem,0) scale(4) rotateX(90deg)`
            },
            50: {
              transform: `translate3d(-1rem,-3rem,0) scale(4) rotateX(45deg)`
            },
            100: {
              transform: `translate3d(0px,0px,0) scale(1) rotateX(0deg)`
            }
          },
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: true
          }
        })
        const _this = this
        animations.runAnimation(num6, 'rate2', function () {
          _this.$refs.sum.style.visibility = 'visible'
          _this.sumAnimation()
        })
      },
      sumAnimation() {
        animations.registerAnimation({
          name: 'ratesum',
          animation: {
            0: {
              transform: `scale(2)`
            },
            25: {
              transform: `scale(1)`
            },
            50: {
              transform: `scale(2)`
            },
            100: {
              transform: `scale(1)`
            }
          },
          presets: {
            duration: 400,
            easing: 'linear',
            resetWhenDone: true
          }
        })
        const _this = this
        animations.runAnimation(_this.$refs.sum, 'ratesum', function () {
          _this.showWinResultBorder()
        })
      },
      showWinResultBorder() {
        const resultSum = this.winResult[0] + this.winResult[1] + this.winResult[2]
        const border = '2px solid white'
        this.setBorder(resultSum, border)
        setTimeout(() => {
          const border = '2px solid #30C37C'
          this.setBorder(resultSum, border)
        }, 500)
        setTimeout(() => {
          const border = '2px solid white'
          this.setBorder(resultSum, border)
        }, 1000)
        setTimeout(() => {
          const border = '2px solid #30C37C'
          this.setBorder(resultSum, border)
        }, 1500)
        setTimeout(() => {
          const border = ''
          this.setBorder(resultSum, border)
        }, 2000)
         setTimeout(()=>{
           this.openPageAnimation(this.$refs.openP)
         },2000)
        setTimeout(()=>{
          this.resetBet()
        },2000)

      },
      setBorder(resultSum, border) {
        if (resultSum % 2 === 0) {
          document.getElementsByClassName('double')[0].style.border = border
          if (resultSum < 13) {
            document.getElementsByClassName('smallDouble')[0].style.border = border
            document.getElementsByClassName('small')[0].style.border = border
          } else {
            document.getElementsByClassName('bigDouble')[0].style.border = border
            document.getElementsByClassName('big')[0].style.border = border
          }
        } else {
          document.getElementsByClassName('single')[0].style.border = border
          if (resultSum <= 13) {
            document.getElementsByClassName('smallSingle')[0].style.border = border
            document.getElementsByClassName('small')[0].style.border = border
          } else {
            document.getElementsByClassName('bigSingle')[0].style.border = border
            document.getElementsByClassName('big')[0].style.border = border
          }

        }
      }

    }
      ,
      created() {
        this.timer1 = setInterval(() => {
          this.cutDownTime--
        }, 1000)
        /*jsonp('http://192.168.0.214:8080/fast/listUser/', {"callback": "cb"}, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            console.log(data);
          }
        });*/
      }
      ,
      watch: {
        cutDownTime(newValue) {
          if (0 < newValue && newValue < 10) {
            this.cutTimeAnimation()
            this.$refs.openState.innerText = '等待开奖'
            this.$refs.sencondTime.style.color = 'red'
          } else if (newValue === 0) {
            this.$refs.openState.innerText = '开奖中'
            const _this = this
            _this.cutPageAnimation(_this.$refs.cutP)
          } else if (newValue < 0) {
            clearInterval(this.timer1)
          }

        }
      },
      beforeDestroy() {
        clearInterval(this.timer1)
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
                font-size 1.7rem
                display flex
                flex-direction column
                justify-content center
              .list:nth-child(3)
                height 23%
                font-size 0.5rem
            .openResult
              background url("img/center2.png") center no-repeat
              background-size contain
              .list
                padding-top 0.5rem
                p
                  color black
                  font-weight 700 !important
                  font-size 0.65rem !important
              .num
                display flex
                flex-direction row !important
                font-size 0.88rem !important
                height 23% !important
                span
                  font-weight 700 !important
                  color black
                  letter-spacing 1px
                  visibility hidden
              .sum
                text-align center
                color white
                font-weight 800
                font-size 2rem
                visibility hidden
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

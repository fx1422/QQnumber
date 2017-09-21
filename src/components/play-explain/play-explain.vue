<template>
  <div class='play-explain'>
    <div class="box">
      <div class="content">
        <scroll class="scroll">
          <div class="scroll-box">
            <div class="part-1">
              <span>1</span>
              <span>
              企鹅分分彩开奖号取自腾讯实时在线用户人数。取腾讯实时在线人数后三位相加，所得的结果即为企鹅分分彩的开奖结果。例如：2017-03-04 16：06：00 的当前在线人数为239469286，取其后三位2+8+6相加得开奖结果16。
              </span>
            </div>
            <div class="part-2">
              <span>2</span>
              <span>
                腾讯实时在线人数取自腾讯音视频主页（http://im.qq.com/album/v/）右上角”当前在线人数“。附第三方统计网站数据源：http://qq-ssc.com/ 可以回溯查看过去几个月内的QQ在线人数统计结果。
              </span>
            </div>
            <div class="part-3">
              <span>3</span>
              <span>

              </span>
            </div>
            <div class="part-4">
              <span>4</span>
              <span>

              </span>
            </div>
            <div class="icon-2">

            </div>
            <div class="link">
              http://im.qq.com/album/v/
            </div>
            <div class="part-5">
              <span>5</span>
              <span>
                  <p>赔率说明</p>
             </span>
            </div>
            <div class="rate-explain">
                  <div class="t-head head">
                    <div class="item">玩法</div>
                    <div class="item">命中数字</div>
                    <div class="item">赔率</div>
                  </div>
              <div class="t-head">
                <div class="item">豹子</div>
                <div class="item">000,111,222,333,444,555,666,777,888,999</div>
                <div class="item">1:60</div>
              </div>
              <div class="t-head">
                <div class="item">顺子</div>
                <div class="item">012,123,234,345，456,567,678,789,987,876,765,654,543,432,321,210</div>
                <div class="item">1:30</div>
              </div>
              <div class="t-head">
                <div class="item">大</div>
                <div class="item">14,15,16,17,18,19,20,21,22,23,24,25,26,27</div>
                <div class="item">1:2</div>
              </div>
              <div class="t-head">
                <div class="item">小</div>
                <div class="item">1,2,3,4,5,6,7,8,9,10,11,12,13</div>
                <div class="item">1:2</div>
              </div>
              <div class="t-head">
                <div class="item">单</div>
                <div class="item">1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27</div>
                <div class="item">1:2</div>
              </div>
              <div class="t-head">
                <div class="item">双</div>
                <div class="item">0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26</div>
                <div class="item">1:2</div>
              </div>
              <div class="t-head">
                <div class="item">大单</div>
                <div class="item">15, 17, 19, 21, 23, 25, 27</div>
                <div class="item">1:2</div>
              </div>
              <div class="t-head">
                <div class="item">大双</div>
                <div class="item">14, 16, 18, 20, 22, 24, 26</div>
                <div class="item">1:2</div>
              </div>
              <div class="t-head">
                <div class="item">小单</div>
                <div class="item">1,3,5,7,9,11,13</div>
                <div class="item">1:2</div>
              </div>
              <div class="t-head">
                <div class="item">小双</div>
                <div class="item">0, 2, 4, 6, 8, 10, 12</div>
                <div class="item">1:2</div>
              </div>
            </div>
          </div>
        </scroll>
      </div>
    </div>
    <div class="closeChart"  @click="closeExplain"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      closeExplain() {
        this.$emit('closeExplainChart')
      }
    },
    components: {
      Scroll,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .play-explain
    position absolute
    opacity 0.95
    top 0
    max-width 640px
    left 0
    right 0
    margin auto
    height 100vh
    z-index 20
    .closeChart
      position absolute
      height 1.5rem
      width 1.5rem
      left 0
      right 0
      margin auto
      top 1rem
      background url("close_icon.png") center no-repeat
      background-size contain
      border-radius 55%
      background-color #072161
    .closeChart:active
      background-color #F16170
    .box
      position absolute
      z-index 22
      width 90%
      max-height 80vh
      right 0
      top: 0
      bottom 0
      left 0
      margin auto
      color black
      background-color #eeeeee
      border-radius 4px
      font-size 0.82rem
      padding 0.8rem
      box-sizing border-box
      .content
        .scroll
          height 74vh
          overflow hidden
          .scroll-box
            .part-1
              display flex
              justify-content space-between
              span:nth-child(1)
                background-color red
                flex 1
                border-radius 50%
                color white
                text-align center
                line-height 1rem
                height 1rem
                width: 1rem
              span:nth-child(2)
                flex 13
                line-height 1.1rem
                font-size 0.74rem
                padding 0.2rem
                box-sizing border-box
                background-color #a4b6b7
                border-radius 4px
                margin-left: 0.6rem
          .part-2
            display flex
            justify-content space-between
            margin-top 0.6rem
            span:nth-child(1)
              background-color red
              flex 1
              border-radius 50%
              color white
              text-align center
              line-height 1rem
              height 1rem
              width: 1rem
            span:nth-child(2)
              flex 13
              line-height 1.1rem
              font-size 0.74rem
              padding 0.2rem
              box-sizing border-box
              background-color #a4b6b7
              border-radius 4px
              margin-left: 0.6rem
          .part-3
            display flex
            justify-content space-between
            margin-top 0.6rem
            span:nth-child(1)
              background-color red
              flex 1
              border-radius 50%
              color white
              text-align center
              line-height 1rem
              height 1rem
              width: 1rem
            span:nth-child(2)
              flex 13
              padding 0.2rem
              box-sizing border-box
              border-radius 4px
              margin-left: 0.6rem
              background url("./part_1.png") center no-repeat
              background-size contain
              height 6rem
          .part-4
            display flex
            justify-content space-between
            margin-top 0.6rem
            span:nth-child(1)
              background-color red
              flex 1
              border-radius 50%
              color white
              text-align center
              line-height 1rem
              height 1rem
              width: 1rem
            span:nth-child(2)
              flex 13
              padding 0.2rem
              box-sizing border-box
              border-radius 4px
              margin-left: 0.6rem
              background url("./part_2.png") center no-repeat
              background-size contain
              height 11.2rem
          .link
            text-align center
            color #275fff
            line-height 1.6rem
          .part-5
            display flex
            justify-content space-between
            margin-top 0.6rem
            span:nth-child(1)
              background-color red
              flex 1
              border-radius 50%
              color white
              text-align center
              line-height 1rem
              height 1rem
              width: 1rem
            span:nth-child(2)
              flex 13
              padding 0.2rem
              box-sizing border-box
              margin-left: 0.6rem
          .rate-explain
            background-color black
            color white
            font-size 0.72rem
            margin-top 0.4rem
            .head
              height 2rem !important
              .item:nth-child(2)
                text-align center !important
            .t-head
              display flex
              justify-content space-between
              align-items center
              box-sizing border-box
              padding 0 0.4rem
              border-bottom 1px solid #c3c9bb
              .item
                width:15%
                text-align center
                line-height 1.2rem
              .item:nth-child(2)
                word-break break-all
                padding 0.2rem
                box-sizing border-box
                text-align left
                border-right 1px solid #c3c9bb
                border-left: 1px solid #c3c9bb
                width 70%

</style>

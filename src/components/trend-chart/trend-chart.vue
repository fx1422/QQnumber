<template>
  <div class='trend-chart'>
    <div class="box">
      <div class="header">
        <div>期号</div>
        <div>值</div>
        <div>大</div>
        <div>小</div>
        <div>单</div>
        <div>双</div>
        <div>大双</div>
        <div>小双</div>
        <div>大单</div>
        <div>小单</div>
        <div>顺子</div>
        <div>豹子</div>
      </div>
      <div class="content">
        <scroll class="scroll">
          <ul>
            <li v-for="item in dataList">
              <div>{{item.issue}}</div>
              <div>{{item.number}}</div>
              <div><span v-show="item.number>13"></span></div>
              <div><span v-show="item.number<13"></span></div>
              <div><span v-show="item.number%2===1"></span></div>
              <div><span v-show="item.number%2===0"></span></div>
              <div><span v-show="item.number>13&&item.number%2===0"></span></div>
              <div><span v-show="item.number<13&&item.number%2===0"></span></div>
              <div><span v-show="item.number>13&&item.number%2===1"></span></div>
              <div><span v-show="item.number<13&&item.number%2===1"></span></div>
              <div><span
                v-show="item.result[1]-item.result[0]===item.result[2]-item.result[1]&&item.result[2]-item.result[1]===1"></span>
              </div>
              <div><span v-show="item.result[0]==item.result[1]&&item.result[1]===item.result[2]"></span></div>
            </li>
          </ul>
        </scroll>
      </div>
    </div>
    <div class="closeChart" ref="closeChart" @click="closeChart"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    data() {
      return {
        dataList: [{issue: '20170921-0664', result: [10, 10, 5], number: 25},
          {issue: '20170921-0665', result: [1, 2, 7], number: 10},
          {issue: '20170921-0666', result: [7, 8, 9], number: 24},
          {issue: '20170921-0667', result: [5, 5, 5], number: 15},
          {issue: '20170921-0665', result: [1, 2, 7], number: 10},
          {issue: '20170921-0666', result: [7, 8, 9], number: 24},
          {issue: '20170921-0667', result: [5, 5, 5], number: 15},
          {issue: '20170921-0665', result: [1, 2, 7], number: 10},
          {issue: '20170921-0666', result: [7, 8, 9], number: 24},
          {issue: '20170921-0667', result: [5, 5, 5], number: 15},
          {issue: '20170921-0665', result: [1, 2, 7], number: 10},
          {issue: '20170921-0666', result: [7, 8, 9], number: 24},
          {issue: '20170921-0667', result: [5, 5, 5], number: 15},
          {issue: '20170921-0665', result: [1, 2, 7], number: 10},
          {issue: '20170921-0666', result: [7, 8, 9], number: 24},
          {issue: '20170921-0667', result: [5, 5, 5], number: 15}
        ]
      }
    },
    created() {
    },
    methods: {
      closeChart(){
        this.$emit('closeTrendChart')
      }
    },
    components: {
      Scroll,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .trend-chart
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
      background url("close_icon.png")center no-repeat
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
      color white
      background-color #eeeeee
      border-radius 4px
      .header
        height 8vh
        background-color #F8616C
        display flex
        font-size 0.76rem
        div
          flex 1
          display flex
          justify-content center
          align-items center
          text-align center
        div:nth-child(1)
          flex 5
      .content
        .scroll
          height 70vh
          overflow hidden
        ul
          li
            height 5vh
            width 100%
            display flex
            justify-content center
            div
              display flex
              text-align center
              justify-content center
              align-items center
              font-size 0.6rem
              color black
              flex 1
              span
                display inline-block
                width 0.6rem
                height 0.6rem
                background-color #FB7F9A
                border-radius 50%
            div:nth-child(3,4)
              span
                background-color #FB7F9A
            div:nth-child(5)
              span
                background-color #65B3FF
            div:nth-child(6)
              span
                background-color #65B3FF
            div:nth-child(7)
              span
                background-color #837BD3
            div:nth-child(8)
              span
                background-color #837BD3
            div:nth-child(9)
              span
                background-color #837BD3
            div:nth-child(10)
              span
                background-color #837BD3
            div:nth-child(11)
              span
                background-color #F0C975
            div:nth-child(12)
              span
                background-color #F0C975
            div:nth-child(1)
              flex 5
              color red
          li:nth-child(2n+1)
            background-color #dad6cf


</style>

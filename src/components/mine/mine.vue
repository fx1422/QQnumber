<template>
  <div class='mine'>
    <scroll ref="scroll" class="mine-content">
      <div class="box">
        <div class="icon">
          <p>头像</p>
          <img src="./logo.png" alt="">
        </div>
        <div class="item" @click="settingName">
          <p>姓名</p>
          <p>{{name}} ></p>
        </div>
        <br>
        <div class="item" @click="recharge">
          <p>充值</p>
          <p>余额：0.00元 ></p>
        </div>
        <div class="item">
          <p>提现</p>
          <p> 微信秒提></p>
        </div>
        <div class="item">
          <p>交易明细</p>
          <p>></p>
        </div>
        <div class="item">
          <p>资金明细</p>
          <p>></p>
        </div>
        <br>
        <div class="item">
          <p>交易规则等</p>
          <p>常见其他问题 ></p>
        </div>
        <div class="item">
          <p>联系客服</p>
          <p>></p>
        </div>
        <br>
        <div class="item">
          退出
        </div>
      </div>


    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    data() {
      return {
        name: ''
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        const name = localStorage.username
        this.name = name
      },
      settingName() {
        this.$router.push({
          path: '/rename'
        })
      },
      recharge(){

      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .mine
    position fixed
    width: 100%
    top: 0
    bottom calc(1.5rem + 11px)
    max-width 640px
    margin auto
    left 0px
    right 0
    background-color $color-background-white
    .mine-content
      height 100%
      overflow hidden
      .box
        padding 0.5rem 0
        box-sizing border-box
        font-size $font-size-large
        .icon
          height 4rem
          background-color $color-background
          display flex
          justify-content space-between
          align-items center
          padding 0 1rem
          border-bottom 2px solid #eee
          img
            height 3.4rem
            width 3.4rem
        .item
          height 2.6rem
          background-color $color-background
          display flex
          justify-content space-between
          align-items center
          padding 0 1rem
          border-bottom 2px solid #eee
          p:nth-child(2)
            color #9c9c9c
            font-size $font-size-medium-x


</style>

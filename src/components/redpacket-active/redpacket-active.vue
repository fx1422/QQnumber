<template>
  <transition name="slide">
    <div class='redpacket-active'>
          <ul>
            <li>
              <div class="item-l">
                <div class="item-list">新手红包</div>
                <div class="item-list">新用户首次注册奖励 1 元</div>
              </div>
              <div class="item-r">+<span>1.0</span>元</div>
            </li>
            <li>
              <div class="item-l">
                <div class="item-list">首次下单</div>
                <div class="item-list">完成首次下单奖励 1 元</div>
              </div>
              <div class="item-r">+<span>1.0</span>元</div>
            </li>
            <li>
              <div class="item-l">
                <div class="item-list">正式交易每10次</div>
                <div class="item-list">已交易 0 次，共需 10 次</div>
              </div>
              <div class="item-r">+<span>2.0</span>元</div>
            </li>
          </ul>

    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .redpacket-active
    position absolute
    height 100vh
    width 100%
    top: 0
    max-width 640px
    right 0
    margin auto
    left 0
    background-color #F8F8F8
    ul
      li
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        border: 1px solid #eee;
        border-radius: 5px;
        display: flex;
        padding: 0 10px;
        background-color: #fff;
        .item-l
          flex:2
          .item-list:nth-child(1)
            height 2rem
            line-height 2.5rem
            font-size $font-size-large
            padding-left 0.5rem
          .item-list:nth-child(2)
            height 2rem
            line-height 1.5rem
            font-size $font-size-medium-x
            color #9c9c9c
            padding-left 0.5rem
        .item-r
          display flex
          justify-content center
          align-items center
          color #ee3834
          font-size $font-size-large
          span
            font-size $font-size-large-x

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>

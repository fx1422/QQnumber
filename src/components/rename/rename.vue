<template>
  <transition name="slide">
    <div class='rename'>
      <div class="name">姓名 <input type="text" placeholder="请输入您的真实姓名" ref="inputValue"></div>
      <div class="btn" :storName="storName" @click="savaName" @keyup.enter="saveName">保存</div>
      <div class="tips">真实姓名将用于提现与问题处理</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        storName: ''
      }
    },
    methods: {
      savaName() {
        const val = this.$refs.inputValue.value
        localStorage.username = val
        this.storName = localStorage.username

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .rename
    position fixed
    width 100%
    height 100vh
    top 0
    max-width 640px
    margin: auto
    left 0
    right 0
    background-color: #f8f8f8
    box-sizing border-box
    .name
      width 100%
      height 2.4rem
      background-color $color-background
      font-size $font-size-large
      display flex
      border-bottom 1px solid #eee
      border-top 1px solid #eee
      margin-top 2.6rem
      align-items center
      padding 0 1rem
      box-sizing border-box
      justify-content space-between
      input
        font-size $font-size-medium
        height 80%
        width: 80%
        border-radius 6px
        padding 0 0.4rem
      input:focus
        border 1px solid #00AAEE
        outline: none
    .btn
      width 80%
      margin 1.4rem auto 0
      background-color #00AAEE
      color $color-font-white
      height 2rem
      line-height 2rem
      font-size $font-size-large
      text-align center
      border-radius 6px
    .tips
      font-size $font-size-medium
      text-align center
      color #9c9c9c
      margin-top 1rem

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

</style>

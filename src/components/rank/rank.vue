<template>
   <transition name="slide">
     <div class='rank'>
       <div class="header">
         <div class="item">日排行</div>
         <div class="item">周排行</div>
         <div class="item">月排行</div>
       </div>
       <scroll>
         <div class="scroll">
           <div class="list">
             <div class="list-l">
               <div class="item">dsds</div>
               <div class="item">dsds</div>
             </div>
             <div class="list-r">dsdsds</div>
           </div>
         </div>
       </scroll>
     </div>
   </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
    export default {
    components:{
      Scroll
    }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .rank
    position absolute
    height 100vh
    width 100%
    top: 0
    max-width 640px
    right 0
    margin auto
    left 0
    background-color #F8F8F8
    box-sizing border-box
    padding 0.5rem
    .header
      display flex
      box-sizing border-box
      justify-content space-between
      .item
        height 2rem
        padding 0 1rem
        border-radius 6px
        display flex
        align-items center
        color #9c9c9c
        font-size $font-size-large
        letter-spacing 3px
        border 1px solid #eee!important
      .active
        background-color #F5A623
        color $color-font-white
    .scroll
      margin-top 1rem
      .list
        display flex
        justify-content space-between
        background-color $color-font-white
        .list-l
          .item
            height 2rem
            line-height 2rem




  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>

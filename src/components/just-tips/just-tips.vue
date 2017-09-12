<template>
    <div class='just-tips'>
      <p>开奖结果取自腾讯音视频主页</p>
      <p>(http://im.qq.com/album/v/)右上角"当前在线人数",</p>
      <p>后三位相加为开奖结果</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .just-tips
    padding 0.4rem 0.6rem
    p
      color $color-font-white
      font-size .72rem
      line-height 1.2rem
    p:nth-child(1)
      letter-spacing 0.6rem

</style>

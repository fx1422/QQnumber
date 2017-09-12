<template>
    <div>
      <span class='item' v-for="item in dataList ">
        {{item}}
      </span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          dataList:[11,22,333]
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

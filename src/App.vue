<template>
  <div id="app">
    <tab></tab>
    <login v-show="auth"></login>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'
  import Login from 'base/login/login'

  export default {
    data(){
     return {
       auth:false
     }
    },
    components: {
      Tab,Login
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

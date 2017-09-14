<template>
  <transition name="slide">
    <div class='rank'>
      <div class="header">
        <div class="item"
             :class="{active:typeNum === index}"
             v-for="(list,index) in rankType"
             @click="selectType(index)">
          {{list.name}}
        </div>

      </div>
      <scroll ref="scroll" class="rank-content">
        <div class="scroll">
          <div class="list" v-for="item in dataList">
            <div class="list-l">
              <div class="item">{{item.rank}} {{item.user}}</div>
              <div class="item">盈利：{{item.gain}}元 </div>
            </div>
            <div class="list-r">下单： {{item.orderTimes}}次</div>
          </div>

        </div>
      </scroll>
      <loading v-show="!dataList.length"></loading>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import axios from 'axios'
  import Loading from 'base/loading/loading'
  import {rankData} from 'base/api/config'

  export default {
    data() {
      return {
        rankType: [{type: 0, name: '日排行'}, {type: 1, name: '周排行'}, {type: 2, name: '月排行'}],
        dataList: rankData.Daydata,
        typeNum: 0
      }
    },
    created() {

    },
    methods: {
      selectType(index) {
        this.typeNum = index
        switch (index) {
          case 0:
            this.dataList = rankData.Daydata
            break;
          case 1 :
            this.dataList = rankData.Weekdata
            break;

          case 2:
            this.dataList = rankData.Monthdata
            break
        }

      },
      /*getDataList() {
        var _this = this
        axios('static/rankData.json').then((res) => {
          console.log(res)
        }).catch((error) => {
          console.log(error)
        })
      }*/
    },

    components: {
      Scroll,Loading
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
        border 1px solid #eee !important
      .active
        background-color #F5A623
        color $color-font-white
    .rank-content
      height calc(100vh - 3.5rem)
      overflow hidden
      margin-top 1rem
      .list
        display flex
        justify-content space-between
        background-color $color-font-white
        border 1px solid #eee
        .list-l
          .item
            height 1.7rem
            padding-left 0.5rem
            font-size $font-size-large
          .item:nth-child(1)
            font-size $font-size-large
            line-height 2.5rem
          .item:nth-child(2)
            font-size $font-size-medium-x
            color #ee3834
            line-height 1.5rem
        .list-r
          display flex
          justify-content center
          align-items center
          padding-right 1.5rem
          color #9c9c9c
          font-size $font-size-medium-x
    .loading
      text-align: center;
      position: absolute;
      height: 100vh;
      top: 3rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      left: 0;
      right: 0;
      margin: auto;

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>

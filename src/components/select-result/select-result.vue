<template>
  <div class='select-result'>
    <div>
      <div v-for="(item,index) in items" class="numItem" ref="numberItem">{{item}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      showMsg: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
        isDouble: 3,
        isBig: false
      }
    },
    mounted() {
      this.listenData()
    },
    methods: {
      listenData() {
        const list = document.getElementsByClassName('numItem');
        const obj = JSON.stringify(this.showMsg), bd = JSON.stringify("bd"), b = JSON.stringify("b"), d = JSON.stringify("d"), bs = JSON.stringify("bs"), ls = JSON.stringify("ls"), l = JSON.stringify("l"), s = JSON.stringify("s"), ld = JSON.stringify("ld")
        switch (obj) {
          case bd:
            this.bd(list);
            break;
          case b:
            this.big(list);
            break;
          case d:
            this.double(list);
            break;
          case bs:
            this.bs(list);
            break;
          case ls:
            this.ls(list);
            break;
          case l:
            this.little(list);
            break;
          case s:
            this.single(list);
            break;
          case ld:
            this.ld(list);
            break;
        }
      },
      bd(list) {
        for (let i = 0; i < list.length; i++) {
          if (i % 2 === 0 && i > 13) {
            list[i].setAttribute('class', 'numItem active')
          }
        }
      },
      big(list) {
        for (let i = 0; i < list.length; i++) {
          if (i > 13) {
            list[i].setAttribute('class', 'numItem active')
          }
        }
      },
      double(list) {
        for (let i = 0; i < list.length; i++) {
          if (i % 2 === 0) {
            list[i].setAttribute('class', 'numItem active')
          }
        }
      },
      bs(list) {
        for (let i = 0; i < list.length; i++) {
          if (i % 2 === 1 && i > 13) {
            list[i].setAttribute('class', 'numItem active')
          }
        }
      },
      ls(list) {
        for (let i = 0; i < list.length; i++) {
          if (i % 2 === 1 && i <= 13) {
            list[i].setAttribute('class', 'numItem active')
          }
        }
      },
      little(list) {
        for (let i = 0; i < list.length; i++) {
          if (i <= 13) {
            list[i].setAttribute('class', 'numItem active')
          }
        }
      },
      single(list) {
        for (let i = 0; i < list.length; i++) {
          if (i % 2 === 1) {
            list[i].setAttribute('class', 'numItem active')
          }
        }
      },
      ld(list) {
        for (let i = 0; i < list.length; i++) {
          if (i % 2 === 0 && i <= 13) {
            list[i].setAttribute('class', 'numItem active')
          }
        }
      }
    },
    watch: {
      showMsg: {
        handler(newValue) {
          this.listenData()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .select-result
    display flex
    justify-content center
    align-content center
    flex-direction column
    height 100%
    div
      position: relative;
      width: 100%
      box-sizing: border-box
      display: flex
      flex-wrap wrap
      justify-content: center
      align-items: center;
      .numItem
        margin 0.32rem .1rem
        font-size 0.72rem
        height: 1.1rem;
        width: 1.1rem;
        line-height: 1.1rem;
        background-color #2F84D4
        border-radius 50%
        color $color-font-white
      &.active
        background-color #DEB84E
</style>

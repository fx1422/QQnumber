import Vue from 'vue'
import Router from 'vue-router'
import Exchange from 'components/exchange/exchange'
import Wallet from 'components/wallet/wallet'
import Mine from 'components/mine/mine'
import BetPage from 'components/bet-page/bet-page'
import RedpacketActive from 'components/redpacket-active/redpacket-active'
import Rank from 'components/rank/rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/exchange'
    },
    {
      path: '/exchange',
      component: Exchange,
      children: [
        {
          path:':id',
          component:BetPage
        },
        {
          path:'/redPacket',
          component:RedpacketActive
        },
        {
          path:'/rank',
          component:Rank
        }
      ]
    },
    {
      path: '/wallet',
      component: Wallet,
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})

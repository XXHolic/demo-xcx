Page({
  data: {
    categoryList:[
      {
        id:1,
        src:'/images/icon-movie.png',
        text:'电影'
      },
      {
        id:2,
        src:'/images/icon-video.png',
        text:'动画'
      },
      {
        id:3,
        src:'/images/icon-music.png',
        text:'音乐'
      },
      {
        id:4,
        src:'/images/icon-game.png',
        text:'游戏'
      },
      {
        id:5,
        src:'/images/icon-fun.png',
        text:'娱乐'
      },
      {
        id:6,
        src:'/images/icon-technology.png',
        text:'科技'
      },
      {
        id:7,
        src:'/images/icon-trend.png',
        text:'时尚'
      },
    ]
  },
  handlerTap() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  }
})

Page({
  data: {
    categoryList:[
      {
        id:2,
        type:2,
        src:'/images/category-2.jpg',
        text:'快乐源泉'
      },
      {
        id:3,
        type:3,
        src:'/images/category-3.png',
        text:'星期一的烦恼'
      },
      // {
      //   id:3,
      //   src:'/images/icon-music.png',
      //   text:'音乐'
      // },
      // {
      //   id:4,
      //   src:'/images/icon-game.png',
      //   text:'游戏'
      // },
      // {
      //   id:5,
      //   src:'/images/icon-fun.png',
      //   text:'娱乐'
      // },
      // {
      //   id:6,
      //   src:'/images/icon-technology.png',
      //   text:'科技'
      // },
      // {
      //   id:7,
      //   src:'/images/icon-trend.png',
      //   text:'时尚'
      // },
    ]
  },
  handlerTap() {
    // wx.switchTab({
    //   url: '/pages/index/index',
    //   success: function (e) {  
    //     var page = getCurrentPages().pop();  
    //     if (page == undefined || page == null) return;  
    //     page.onReady();  
    //   }  
    // })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  }
})

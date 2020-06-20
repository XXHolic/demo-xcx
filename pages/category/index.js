Component({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperOptions:{

    }
  },
  handlerTabChange:({detail})=>{
    console.info('change detail',detail)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  scroll(e) {
    console.log(e)
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },
  onLoad: function () {

    setTimeout(()=>{
      this.setData({
        swiperOptions:{
          background: [{src:'https://xxholic.github.io/segment/images/69/poster.jpg',mode:'aspectFill'},{src:'https://xxholic.github.io/segment/images/70/poster.jpg',mode:'aspectFit'},{src:'https://xxholic.github.io/segment/images/71/poster.jpg',mode:'aspectFit'}],
          indicatorDots: true,
          vertical: false,
          autoplay: true,
          interval: 2000,
          duration: 500
        }
      })
    },3000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  }
})

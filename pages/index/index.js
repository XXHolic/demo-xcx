const utils = require('../../utils/util.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    list:[],
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  getData() {
    new Promise((resolve) => {
      const backData = utils.getData();
      // console.info('backData')
      setTimeout(() => {
        resolve(backData)
      },2000)
    }).then((res) => {
      const {data} = res;
      console.info({data})
      this.setData({
        list:data
      })
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
  handlerTabChange(){
    this.getData();
  },
  onShow() {
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 0
    })
  }
  },
  onReady() {
    this.getData();
  }
})

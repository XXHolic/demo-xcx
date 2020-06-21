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
      },1000)
    }).then((res) => {
      const {data} = res;
      console.info({data})
      this.setData({
        list:data
      })
    })
  },
  handlerToBottom(e) {
    const backData = utils.getData();
    this.setData({
      list:[...this.data.list,...backData.data]
    })
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

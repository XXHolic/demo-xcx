const utils = require('../../utils/util.js');
const {testData} = require('./testData.js');
const tab1Req = {
  "topicIds": "",
  "nodeIds": "",
  "tagIds": "",
  "tags": "动态图",
  "GameLib": "0",
  "systemFieldNames": "DefaultPicUrl",
  "modelFieldNames": "Title,Author,ThumbnailsPicUrl,updateTime",
  "UpdateTime": 0,
  "order": "timeDesc",
  "recommendedIndex": "0",
  "pageIndex": 1,
  "pageSize": 20,
  "cacheMinutes": 1
}
//获取应用实例
const app = getApp()

Page({
  data: {
    allDataType:[],
    allData:null,
    hasShowedData:[],
    list:[],
    deviceMsg:{},
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  getData({params}) {
    const _that = this;
    wx.request({
      method:'POST',
      // url: 'https://wap.gamersky.com/news/ent/', 
      url: 'https://appapi2.gamersky.com/v5/getCMSNewsList',
      // url: 'https://wap.gamersky.com/news/Content-1299150.html',
      // url: 'https://wap.gamersky.com/news/Content-1299150.html_2',
      // url: 'https://wap.gamersky.com/news/Content-1299150.html_3', 详情分页
      // url: 'https://db2.gamersky.com/LabelJsonpAjax.aspx',
      data: params,
      header: {
        'content-type': 'application/json', // 默认值
      },
      success (res) {
        console.log('ds',res)
        
      }
    })
  },
  handlerToBottom(e) {
    this.getData();
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },
  handlerTabChange(){
    this.getData(true);
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
    // this.getData();
    wx.getSystemInfo({
      success:(res) => {
       const deviceMsg = utils.formatReqParms(res)
       const reqParams = {
        request:{...tab1Req},
        ...deviceMsg
      }
      console.info('testData',testData)
       this.setData({
        deviceMsg:deviceMsg,
        // list:testData.result
       })
      //  this.getData({params:reqParams});
      },
      fail:() => {

      },
      complete:() => {

      }
    })

  }
})

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
    pageIndex:0
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  getData(params = {}) {
    const {list,pageIndex} = this.data;
    const pageNum = pageIndex + 1;
    if (pageNum>3) {
      this.setData({
        pageIndex:pageNum
      })
      return;
    }
    const {} = params;
    const _that = this;
    const reqUrl = `https://xxholic.github.io/demo-images/data/ym/list${pageNum}.json`;
    wx.request({
      method:'GET',
      // url: 'https://wap.gamersky.com/news/ent/', 
      url: reqUrl,
      success (res) {
        console.log('ds',res)
        const {result} = res.data;
        const formatData = result.map(ele => {
          const {id,thumbnails,updateTime,commentsCount,Title} = ele;
          const imgSrc = thumbnails[0];
          const imgSrcSplit = imgSrc.split('/');
          const picSrc = 'https://xxholic.github.io/demo-images/ym/cover/'+imgSrcSplit[imgSrcSplit.length-1]
          const time = updateTime.replace(/T/g,' ')
          return {
            id,
            picSrc,
            updateTime:time,
            count:commentsCount,
            title:Title
          }
        })
        _that.setData({
          list:[...list,...formatData],
          pageIndex:pageNum
        });
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
    this.getData();
  }
})

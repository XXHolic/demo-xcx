const utils = require('../../utils/util.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    allDataType:[],
    allData:null,
    hasShowedData:[],
    list:[],
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  getData(update) {
    const _that = this;
    if (!this.data.allData || update) {
      wx.request({
        url: 'https://www.bilibili.com/index/ding.json', 
        data: {},
        header: {
          'content-type': 'application/json', // 默认值
        },
        success (res) {
          console.log('ds',res)
          let validData = {};
          let allDataType = [];
          const exceptData = ['bangumi']; // 排除的数据
          for (const ele of Object.entries(res.data)) {
            const [key,value] = ele;
            if (key && typeof value === 'object'&& exceptData.indexOf(key)===-1) {
              validData[key] = value;
              validData[key].dataType = key;
              allDataType.push(key);
            }
          }

          const firstDataKey = allDataType[0];
          const firstData = validData[firstDataKey];
          const formatData = utils.dealData(firstData);
          _that.setData({
            list: formatData,
            allData:validData,
            hasShowedData:[firstDataKey],
            allDataType
          })
        }
      })
    } else {
      let startIndex = 1;
      const {list,allData,hasShowedData,allDataType} = this.data;
      let hasShowedDataCopy = [...hasShowedData];
      while(hasShowedData.indexOf(allDataType[startIndex])>-1) {
        startIndex ++;
      }
      const dataType = allDataType[startIndex];
      const showData = allData[dataType];
      hasShowedDataCopy.push(dataType);
      const formatData = utils.dealData(showData);
      this.setData({
        hasShowedData:hasShowedDataCopy,
        list:[...list,...formatData]
      })
    }
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
    // wx.request({
    //   url: 'https://api.bilibili.com/x/player/playurl?bvid=BV1y7411Q7Eq&cid=171776208&qn=112', 
    //   data: {},
    //   header: {
    //     'content-type': 'application/json', // 默认值
    //     'referer':'https://www.bilibili.com'
    //   },
    //   success (res) {
    //     console.log('ds',res)
        
    //   }
    // })
    // http://api.bilibili.com/x/player/playurl?bvid=BV1y7411Q7Eq&cid=171776208&qn=112
  }
})

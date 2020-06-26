const {reqListDataMap,coverPre} = require('../../utils/util.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    list:[],
    tabs:[
      {text:'头条',value:'0'},
      {text:'热门',value:'1'}
    ],
    tabValue:'0',
    pageIndex:0,
    scrollTop:0
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  getData(params = {}) {
    const {list,pageIndex,tabValue} = this.data;
    const {type='0'} = params;
    const isChangeTab = type !== tabValue;
    const pageNum = isChangeTab ? 1:pageIndex + 1;
    if (pageNum>2) {
      this.setData({
        pageIndex:pageNum
      })
      return;
    }
    
    const _that = this;
    const reqUrl = `${reqListDataMap[type]}${pageNum}.json`;
    wx.request({
      method:'GET',
      url: reqUrl,
      success (res) {
        // console.log('ds',res)
        const {result} = res.data;
        const formatData = result.map(ele => {
          const {id,thumbnails,updateTime,commentsCount,Title} = ele;
          const imgSrc = thumbnails[0];
          const imgSrcSplit = imgSrc.split('/');
          const picSrc = coverPre + imgSrcSplit[imgSrcSplit.length-1]
          const time = updateTime.replace(/T/g,' ')
          return {
            id,
            picSrc,
            updateTime:time,
            count:commentsCount,
            title:Title
          }
        })
        let newStateData = {
          list:isChangeTab ? formatData:[...list,...formatData],
          pageIndex:pageNum,
          tabValue:type
        }
        if (isChangeTab) {
          newStateData.scrollTop = 0;
        }
        _that.setData({...newStateData});
      }
    })
  },
  handlerToBottom(e) {
    const {tabValue} = this.data;
    this.getData({type:tabValue});
  },
  handlerTabChange({detail}){
    // console.log(detail.value)
    this.getData({type:detail.value});
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
    this.getData({type:'0'});
  }
})

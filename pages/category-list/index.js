const {reqListDataMap,coverPre} = require('../../utils/util.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    list:[],
    pageIndex:0,
    scrollTop:0,
    type:'2'
  },
  getData(params = {}) {
    const {list,pageIndex} = this.data;
    const {type='0'} = params;
    const pageNum = pageIndex + 1;
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
            title:Title,
            type:type
          }
        })
        let newStateData = {
          list:[...list,...formatData],
          pageIndex:pageNum,
          type:type
        }
        _that.setData({...newStateData});
      }
    })
  },
  handlerToBottom(e) {
    const {type} = this.data;
    this.getData({type:type});
  },
  onShow() {
  },
  onReady() {

  },
  onLoad (options) {
    const {type='2'} = options;
    this.getData({type});
  }
})

const {reqDetailPre,detailImgPre} = require('../../utils/util.js');

Page({
  data: {
    time:'',
    content:[],
    title:'',
    isLoaded:false,
    showLoading:true
  },
  onLoad (options) {
    // console.log('fds',options.id);
    const {id='1294195',type='0'} = options
    const _that = this;
    const reqUrl = `${reqDetailPre}${id}.json`;
    wx.request({
      method:'GET',
      url: reqUrl,
      success (res) {
        console.log('ds',res)
        const {title,time,content} = res.data;
        let contentData = content;
        _that.setData({
          title,
          content:contentData,
          time:time.replace(/T/g,' '),
          isLoaded:true
        });
      },
      complete (){
        _that.setData({
          showLoading:false
        })
      }
    })
  }
})

const {reqDetailPre} = require('../../utils/util.js');

Page({
  data: {
    time:'',
    content:[""],
    title:''
  },
  onLoad (options) {
    // console.log('fds',options.id);
    const id = options.id || '1294195';
    const _that = this;
    const reqUrl = `${reqDetailPre}${id}.json`;
    wx.request({
      method:'GET',
      url: reqUrl,
      success (res) {
        console.log('ds',res)
        const {title,time,content} = res.data;
        _that.setData({
          title,
          content,
          time:time.replace(/T/g,' ')
        });
      }
    })
  }
})

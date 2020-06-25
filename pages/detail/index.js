const utils = require('../../utils/util.js');

Page({
  data: {
  },
  onLoad (options) {
    console.log('fds',options.id);
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

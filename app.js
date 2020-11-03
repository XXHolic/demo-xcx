//app.js
const Argos = require('./utils/argos/index.js');
Argos.init({url:'https://fundebug.com/wxjs/',enableLog: true})
// debugger
// var fundebug = require("./utils/fundebug.js");
// fundebug.init({
//     apikey: "8b82fd0ae1bd138623bf49e06a5f19a2f301fa1712c359e1346bda2d5190fc54"
// });
App({
  onLaunch: function () {
    // var window = (function (){
    //   return this
    // })();
    // console.info('ddddd',wx)
    // Argos.init({url:"https://fundebug.com/wxjs/",enableLog:true})
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // wx.getSystemInfoSync({
    //   success: res => {
    //     console.info('getSystemInfoSync',res)
    //   }
    // })

    // wx.getSystemInfo({
    //   success (res) {
    //     console.log(res.version)
    //     console.log(res.platform)
    //   }
    // })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  onError: function(err) {
    console.info('global error',err)
    // console.info('global',err)
    // Argos.captureException(err)
  }
})
import { captureException } from './Hub';
import {fill} from './utils'
import {logger} from './logger'

class GlobalHandlers {
  defaultOptions = {
    onerror:true,
    onRequest: true,
  };

  _isSet = false

  constructor(options={}) {
    // console.info('GlobalHandlers constructor')
    this.options = {...this.defaultOptions,...options};
    this.setUp();

  }

  setUp() {
    if (this._isSet) {
      return;
    }
    const {onerror,onRequest} = this.options;
    if (onerror) {
      this._wrapOnerror()
    }
    if (onRequest) {
      this._wrapRequest()
    }

    this._isSet = true;
  }

  _wrapOnerror() {
    /**
     * 必须要这种形式，如果直接扩展反而没有作用
     */
    let originApp = App;
    App = function(params) {
      // console.info('params',params)
      try {
          fill(params,'onError',function(original){
              return function(e) {
                  // console.info('wrap-e',e)
                  captureException(e)
                  return original.call(this,e);
              }
          })
      } catch (error) {
          console.error('catch',error)
      }
      originApp(params)
    }
  }

  // request 拦截
  _wrapRequest() {
    const {url} = this.options;
    // 另存一个原本的版本，防止请求死循环
    const copyWX = {...wx};
    const originRequest = wx.request;
    Object["defineProperty"](wx, "request", {
      writable: true,
      enumerable: true,
      configurable: true,
      value: function (args) {
        // console.info('wrap',args)
        try {
          const reg =  new RegExp(url);
          // 不是上报的请求
          if (args && !reg["test"](args["url"])) {
            return originRequest.apply(this, arguments);
          }
          copyWX.request({
            url:url,
            method: 'POST',
            data:args.data || {}
          })
          return;
        } catch (e) {
          logger.error(e);
        }
      },
    })
  }



}

// exports.GlobalHandlers = GlobalHandlers
export {GlobalHandlers} 
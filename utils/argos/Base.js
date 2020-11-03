
import {Request,sendData} from './Request';
import {logger} from './logger'


class Base {
  options = {
    headers:{
      'Content-Type': 'application/json'
    }
  };


  constructor(options) {
    this.options = {...this.options,...options};
    this.request = new Request();
    this.getSystemInfo()
  }

  captureException(exception,otherMsg) {
    const eventId = otherMsg && otherMsg.eventId;
    let exceptionFormat = {exception};
    exceptionFormat.eventId = eventId;
    const allData = this.combineData(exceptionFormat)
    logger.info('exception data',allData);
    this.request.add(
      new Promise(() => {
        sendData(allData,this.options);
      })
    )
  }

  // 获取环境基本信息
  getSystemInfo() {
    const that = this;
    try {
      wx.getSystemInfo({
        success (res) {
          that.environment = res;
        }
      })
    } catch (error) {
      that.environment = {};
    }
  }

  // 合并数据
  combineData(data) {
    if (!data.environment) {
      data.environment = this.environment;
    }
    return data;
  }

}

export {Base} 
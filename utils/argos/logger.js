import { getGlobalObject,globalMark } from './utils'

const global = getGlobalObject();

const prefix = 'Argos Log'
class Log {
  options = {
    enableLog: false,
    showLog: true,
    showInfo: true,
    showWarn: true,
    showError: true,
  }


  bindOptions(options) {
    this.options = {...this.options,...options};
  }

  log(...args) {
    const {enableLog,showLog} = this.options;
    if (!enableLog || !showLog) {
      return;
    }
    console.log(`[${prefix}]`,...args)
  }

  warn(...args) {
    const {enableLog,showWarn} = this.options;
    if (!enableLog || !showWarn) {
      return;
    }
    console.warn(`[${prefix}]`,...args)
  }

  info(...args) {
    const {enableLog,showInfo} = this.options;
    if (!enableLog || !showInfo) {
      return;
    }
    console.info(`[${prefix}]`,...args)
  }

  error(...args) {
    const {showError} = this.options;
    if (!showError) {
      return;
    }
    console.error(`[${prefix}]`,...args)
  }

}

global[globalMark] = global[globalMark] || {};
const logger = global[globalMark].logger || (global[globalMark].logger = new Log());

export {logger}
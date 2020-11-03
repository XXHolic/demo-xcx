// const handles  = require('./GlobalHandlers.js')
import {GlobalHandlers} from './GlobalHandlers.js'
import {captureException,getCurrentHub} from './Hub';
import {logger} from './logger';
import {Base} from './Base';

function init(options={}) {
  const defaultOptions = {
    url:'' // 上报的请求
  }
  const combineOptions = {...defaultOptions,...options};
  if (!combineOptions.url) {
    logger.error('There is no upload data url!');
    return;
  }
  const base = new Base(combineOptions)
  const hub = getCurrentHub();
  hub.bindClient(base);
    new GlobalHandlers(combineOptions)
}


module.exports = {
    init,
    captureException,
    getCurrentHub
}
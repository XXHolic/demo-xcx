import {logger} from './logger';
// import { fromHttpCode,Status,getGlobalObject } from './utils'

const ignoreMark = '__ignore__';


export class Request {
  tasks = [];

  options = {
    maxRequest: 20
  }

  constructor(options={}) {
    this.options = {...this.options,...options};
  }

  isReady() {
    return this.tasks.length <= this.options.maxRequest;
  }

  remove(task) {
    const removedTask = this.tasks.splice(this.tasks.indexOf(task), 1)[0];
    return removedTask;
  }

  add(task) {
    if(!this.isReady()) {
      console.warn('too many request')
      return;
    }
    this.tasks.push(task);
    task.then(() => this.remove(task)).then(null, () =>
      this.remove(task).then(null, () => {
        // We have to add this catch here otherwise we have an unhandledPromiseRejection
        // because it's a new Promise chain.
      }),
    );

    return task;
  }

}

export const sendData = (data,options) => {
  const {url} = options;
  if (!url) {
    console.error('There is no upload data url!');
    return;
  }

  return new Promise((resolve,reject) => {
    wx.request({
      url: url,
      method: 'POST',
      data: data
    })
  })
}


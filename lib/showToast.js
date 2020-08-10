const request = require('request')
class Toast {
  constructor(props = {}) {
    this.init(props)
  }
  init({title = '标题', content = '你确定嘛？', warn = true}) {
    const dom = `<div>
      <div class="mask"></div>
      <div class="content">
        <p class="title"><span class="${warn ? 'warn' : 'nowarn'}">!</span>${title}</p>
        <p class="msg">${content}</p>
        <x-button plain class="btn-confirm cancel">取消</x-button>
        <x-button class="btn-confirm">确定</x-button>
      </div>
    </div>`
    const appDom = document.createElement('div')
    const linkDom = document.createElement('link')
    linkDom.rel = "stylesheet"
    linkDom.type = "text/css"
    linkDom.href = '../lib/demo.css'
    appDom.innerHTML = dom
    appDom.id = 'app'
    document.body.appendChild(appDom)
    document.head.appendChild(linkDom)
  }
  fetchData (callback) {
    request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
      callback(body);
    })
  }
  fetchData2 () {
    return Promise.resolve({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    })
  }
  fetchData3 () {
    return new Promise((resolve, reject) => {
      request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
        if (error) {
          return reject(error)
        }
        resolve(JSON.parse(body))
      })
    })
  }
  fetchError() {
    return Promise.reject({
      error: 'network error'
    })
  }
  ok() {
    return this.fetchError()
  }
  cancel() {
    let appDom = document.getElementById('app')
    appDom.parentNode.removeChild(appDom)
  }
}
window.Toast = Toast
export default Toast
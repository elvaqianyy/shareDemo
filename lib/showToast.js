class Toast {
  constructor() {
    this.init({})
  }
  init({title = '标题', content = '你确定嘛？'}) {
    const dom = `<div>
      <div class="mask"></div>
      <div class="content">
        <p class="title">${title}</p>
        <p class="msg">${content}</p>
        <x-button plain class="btn-confirm cancel">取消</x-button>
        <x-button class="btn-confirm">确定</x-button>
      </div>
    </div>`
    const appDom = document.createElement('div')
    appDom.innerHTML = dom
    document.body.appendChild(appDom)
  }
}
window.Toast = Toast
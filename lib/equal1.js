const a = `
<div class="box">
<a href="https://www.baidu.com">一个链接</a>
</div>
`
const b = `
<div class="box">
</div>
`
const warp = document.createElement('div')
warp.innerHTML = a
document.body.appendChild(warp)

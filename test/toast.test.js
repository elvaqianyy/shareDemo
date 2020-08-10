import Toast from '../lib/showToast';

describe('Toast', () => {
  let toastDom
  beforeEach(() => {
    toastDom = new Toast({title: '提示', content:'你确定删除嘛？', warn: true})
  });

  test.skip('create', () => {
    expect(document.querySelector('.content .title').textContent).toEqual('提示');
  });
  test.skip('create warn', () => {
    expect(document.querySelector('.content .title span').classList.contains('warn')).toBeTruthy();
  });
  test.skip('点击确定', (done) => {
    function callback(data) {
      console.log(data) // 执行完测试用例后不能log
      expect(data).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      })
      done()
    } 
    toastDom.ok(callback) // 结束后，还有测试套件没有立刻离开，部分操作还在执行，这里要特别处理异步
  })
  test.only('点击确定2', () => {
    return toastDom.ok().then(data => {
      console.log(data, 'data')
      expect(data).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      })
    }, e => {
      console.log(e.error)
      expect(e.error).toMatch('error')
    })
    
  })
  test('点击取消', () => {
    toastDom.cancel()
    const appDom = document.getElementById('app')
    console.log(appDom, 'app')
    expect(appDom).toBeFalsy()
  })
});
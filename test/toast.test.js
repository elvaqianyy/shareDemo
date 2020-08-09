
import Toast from '../lib/showToast';

describe('Toast', () => {
  let toastDom
  beforeEach(() => {
    toastDom = new Toast({title: '提示', content:'你确定删除嘛？'})
  });

  test('create', () => {
    expect(document.querySelector('.content .title').textContent).toEqual('提示');
  });
  test.skip('点击取消', () => {
    toastDom.cancel()
    setTimeout(() => {
      const appDom = document.getElementById('app')
      expect(appDom).toBeFalsy()
    }, 1000)
  })
  test('点击确定', (done) => {
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
});
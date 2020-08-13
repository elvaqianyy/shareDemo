const toFixedScale = require('../lib/number.js')

test('6.1234保留两位小数，等于数字6.12', () => {
  expect(toFixedScale(6.1234, 2)).toBe('6.12')
})


test.skip('两个数组相等:toBe', () => {
  const a = [1,2,3]
  const b = [1,2,3]
  expect(a).toBe(b)
})

test('两个数组相等:toEqual', () => {
  const a = [1,2,3]
  const b = [1,2,3]
  expect(a).toEqual(b)
})

test.only('两个对象相等:toEqual', () => {
  const a = {
    name: 'animal',
    eat: function () {}
  }
  const b = {
    name: 'animal',
    eat: function () {}
  }
  expect(a).toEqual(b)
})
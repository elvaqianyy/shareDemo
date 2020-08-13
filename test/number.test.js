const toFixedScale = require('../lib/number.js')
// test unit1
test('6.1234保留两位小数后等于6.1234', () => {
  const value = toFixedScale(6.1234, 2)
  expect(value).toBe(6.12)
})

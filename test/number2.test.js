const toFixedScale = require('../lib/number.js')

describe('保留小数点', () => {
  beforeAll(() => {
    console.log('before all')
  })
    // test unit1
  test('6.1234保留两位小数后等于6.12', () => {
    expect(toFixedScale(6.1234, 2)).toBe('6.12')
  })
  // test unit2
  test('6.1234保留两位小数后等于6.12', () => {
    expect(toFixedScale(6.1234, 2)).toBe('6.12')
  })
  afterAll(() => {
    console.log('after all')
  })
})

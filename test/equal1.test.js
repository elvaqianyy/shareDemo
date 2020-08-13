import '../lib/equal1'
test('0是否为null', () => {
  let zero = 0
  expect(zero).toBeNull()
})
test.skip('链接是否为百度', () => {
  const item = {
    url: 'https://www.baidu.com',
    title: 'some-title'
  }
  const href = document.querySelector('.box a').getAttribute('href')
  expect(href === item.url).toBe(true)
})

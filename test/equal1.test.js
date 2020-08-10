import '../lib/boolean'
test('0是否为null', () => {
  const zero = 0
  expect(zero).toBeNull()
})
test.only('链接是否为百度', () => {
  const item = {
    url: 'https://www.baidu.com',
    title: 'some-title'
  }
  const href = document.querySelector('.box a').getAttribute('href')
  expect(href === item.url).toBe(true)
})

import Snapshot from '../lib/snapshot.vue'
import { shallowMount } from '@vue/test-utils'

it('正确渲染', () => {
  const wrapper = shallowMount(Snapshot, {
    propsData: {
      href: 'https://www.baidu1.com',
      name: 'hello world'
    }
  })
  expect(wrapper).toMatchSnapshot()
})
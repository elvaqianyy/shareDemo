import Snapshot from '../lib/snapshot.vue'
// import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'

it('正确渲染', () => {
  const wrapper = shallowMount(Snapshot).toJSON()
  expect(wrapper).toMatchSnapshot()
})
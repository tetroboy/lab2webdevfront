import { shallowMount } from '@vue/test-utils'
import WordList from '@/components/WordList.vue'

describe('WordList.vue', () => {
  it('renders words when passed', () => {
    const words = [{ id: 1, text: 'apple' }, { id: 2, text: 'banana' }]
    const wrapper = shallowMount(WordList, {
      propsData: { words }
    })
    expect(wrapper.text()).toMatch('apple')
    expect(wrapper.text()).toMatch('banana')
  })
})

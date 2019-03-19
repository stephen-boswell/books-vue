import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '../../src/views/Home.vue';
import BookList from '../../src/components/BookList.vue';

describe('Home.vue', () => {
  it('renders a booklist', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.contains(BookList)).to.equal(true);
  });
});

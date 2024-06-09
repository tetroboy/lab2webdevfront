import { mount } from '@vue/test-utils';
import Profile from '@/views/Profile.vue';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.config.ignoredElements = ['router-link'];

describe('Profile.vue', () => {
  beforeEach(() => {
    localStorage.setItem('currentUser', JSON.stringify({
      name: 'John Doe',
      email: 'john@example.com'
    }));
  });

  afterEach(() => {
    localStorage.removeItem('currentUser');
  });

  it('renders user profile', () => {
    const wrapper = mount(Profile, {
      data() {
        return {
          user: JSON.parse(localStorage.getItem('currentUser'))
        };
      }
    });

    expect(wrapper.find('h2').text()).toBe('User Profile');
    expect(wrapper.find('div').text()).toContain('John Doe');
    expect(wrapper.find('div').text()).toContain('john@example.com');
  });
});

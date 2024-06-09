import { mount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import VueRouter from 'vue-router';

const router = new VueRouter();

describe('Login.vue', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    localStorage.setItem('users', JSON.stringify([
      { email: 'john@example.com', password: 'password' }
    ]));
  });

  it('logs in with correct credentials', async () => {
    const wrapper = mount(Login, { router });

    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    const loginButton = wrapper.find('button');

    // Переконайся, що поля існують перед взаємодією з ними
    expect(emailInput.exists()).toBe(true);
    expect(passwordInput.exists()).toBe(true);

    await emailInput.setValue('john@example.com');
    await passwordInput.setValue('password');
    await loginButton.trigger('click');

    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  });
});

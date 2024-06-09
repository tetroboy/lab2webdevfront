import { mount } from '@vue/test-utils';
import Register from '@/views/Register.vue';
import VueRouter from 'vue-router';

const router = new VueRouter();

describe('Register.vue', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  it('registers a new user', async () => {
    const wrapper = mount(Register, { router });

    const nameInput = wrapper.find('input[name="name"]');
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    const registerButton = wrapper.find('button');

    // Переконайся, що поля існують перед взаємодією з ними
    expect(nameInput.exists()).toBe(true);
    expect(emailInput.exists()).toBe(true);
    expect(passwordInput.exists()).toBe(true);

    await nameInput.setValue('John Doe');
    await emailInput.setValue('john@example.com');
    await passwordInput.setValue('password');
    await registerButton.trigger('click');

    expect(window.alert).toHaveBeenCalledWith('Registration successful!');
  });
});

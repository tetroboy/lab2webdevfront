<!-- src/views/Register.vue -->
<template>
    <div class="container mt-5">
      <h2>Register</h2>
      <div class="mb-3">
        <input type="text" v-model="name" name="name" class="form-control" placeholder="Enter name">
      </div>
      <div class="mb-3">
        <input type="email" v-model="email" name="email" class="form-control" placeholder="Enter email">
      </div>
      <div class="mb-3">
        <input type="password" v-model="password" name="password" class="form-control" placeholder="Enter password">
      </div>
      <button class="btn btn-primary" @click="register">Register</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.email === this.email);
  
        if (userExists) {
          alert('User already exists with this email.');
        } else {
          const newUser = {
            name: this.name,
            email: this.email,
            password: this.password
          };
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          alert('Registration successful!');
          this.$router.push('/login');
        }
      }
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 400px;
    margin-top: 100px;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  
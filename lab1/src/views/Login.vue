<!-- src/views/Login.vue -->
<template>
    <div class="container mt-5">
      <h2>Login</h2>
      <div class="mb-3">
        <input type="email" v-model="email" name="email" class="form-control" placeholder="Enter email">
      </div>
      <div class="mb-3">
        <input type="password" v-model="password" name="password" class="form-control" placeholder="Enter password">
      </div>
      <button class="btn btn-primary" @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === this.email && user.password === this.password);
  
        if (user) {
          alert('Login successful!');
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.$router.push('/profile');
        } else {
          alert('Invalid email or password.');
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
  
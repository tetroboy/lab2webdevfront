<template>
    <div class="container mt-5">
      <h2>User Profile</h2>
      <div v-if="user">
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <span>{{ user.name }}</span>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <span>{{ user.email }}</span>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender:</label>
          <span>{{ user.gender }}</span>
        </div>
        <div class="mb-3">
          <label for="dob" class="form-label">Date of Birth:</label>
          <span>{{ user.dob }}</span>
        </div>
      </div>
      <div v-else>
        <p>No user is logged in. Please <router-link to="/login">login</router-link>.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null
      };
    },
    created() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-label {
    font-weight: bold;
  }
  
  .mb-3 {
    margin-bottom: 15px;
  }
  
  .user-profile {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .user-profile span {
    font-size: 1.1rem;
  }
  
  .user-profile label {
    display: block;
    margin-bottom: 5px;
  }
  
  .user-profile p {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  
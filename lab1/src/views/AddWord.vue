<!-- src/views/AddWord.vue -->
<template>
    <div class="container mt-5">
      <h2>Add a New Word</h2>
      <div class="mb-3">
        <input type="text" v-model="newWord" class="form-control" placeholder="Enter new word">
        <button class="btn btn-primary mt-2" @click="addWord">Add New Word</button>
      </div>
      <h3>Current Words</h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="(word, index) in words" :key="index">{{ word }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        words: [],
        newWord: ''
      };
    },
    created() {
      this.loadUserWords();
    },
    methods: {
      // Метод для завантаження даних з локального сховища
      loadUserWords() {
        const userWords = JSON.parse(localStorage.getItem('userWords')) || [];
        this.words = userWords;
      },
      // Метод для додавання нового слова
      addWord() {
        if (this.newWord.trim() === '') {
          alert('Please enter a word.');
          return;
        }
        const userWords = JSON.parse(localStorage.getItem('userWords')) || [];
        userWords.push(this.newWord.trim());
        localStorage.setItem('userWords', JSON.stringify(userWords));
        console.log('Слово додано:', this.newWord);
  
        // Оновити список слів
        this.loadUserWords();
        this.newWord = '';
      }
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 600px;
  }
  h2, h3 {
    text-align: center;
  }
  </style>
  
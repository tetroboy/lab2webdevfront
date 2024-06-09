<template>
    <div>
        <input type="text" v-model="newWord">
        <button @click="addWord">Add Word</button>
        <ul>
            <li v-for="(word, index) in dictionary" :key="index">
                {{ word }}
                <button @click="removeWord(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newWord: ''
        };
    },
    computed: {
        dictionary() {
            return this.$store.state.dictionary;
        }
    },
    methods: {
        addWord() {
            if (this.newWord.trim() !== '') {
                this.$store.dispatch('addWord', this.newWord);
                this.newWord = '';
            }
        },
        removeWord(index) {
            this.$store.dispatch('removeWord', index);
        }
    },
    mounted() {
        this.$store.dispatch('initDictionary');
    }
};
</script>
<template>
    <div>
        <h1>Registration</h1>
        <form @submit="register">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const username = ref('');

const email = ref('');

const password = ref('');

const register = () => {
    alert('Registration form submitted');
};

</script>

<style scoped>
/* Add your custom styles here */
</style>
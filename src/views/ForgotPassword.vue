<template>
    <div>
        <h1>Forgot Password</h1>
        <form @submit="submitForm">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <button type="submit">Reset Password</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const submitForm = () => {
    alert('Reset password form submitted');
};



</script>

<style scoped>
/* Add your custom styles here */
</style>
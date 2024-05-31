<template>
    <lay-container>
        <div class="container-demo">
            <form @submit="register">
                <div class="form-group">
                    <label for="username">用户名:</label>
                    <lay-input placeholder="请输入用户名" id="username" v-model="username" ></lay-input>
                </div>
                <div class="form-group">
                    <label for="email">邮箱:</label>
                    <lay-input type="email" placeholder="请输入邮箱"  id="email" v-model="email" ></lay-input>
                </div>
                <div class="form-group">
                    <label for="password">密码:</label>
                    <lay-input type="password" placeholder="请输入密码" id="password" v-model="password" ></lay-input>
                </div>
                <lay-button type="primary" native-type="submit">注册</lay-button>
            </form>
        </div>
    </lay-container>

</template>

<script setup lang="ts">

import { ref } from 'vue';
import { SHA256} from '../utils/encryptAes';

const username = ref('');

const email = ref('');

const password = ref('');

const register = (event:any) => {
    // 阻止表单默认提交行为
    event.preventDefault();
    const usernameError = validateUsername(username.value);
    const emailError = validateEmail(email.value);
    const passwordError = validatePassword(password.value);

    if (usernameError || emailError || passwordError) {
        alert(usernameError || emailError || passwordError);
        return;
    }


    // 加密密码
    let enpas = SHA256(password.value);

    // 提交表单 发送请求
    fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: enpas
        })
    }).then(response => {
        console.log('response :>> ', response);
        if (response.ok) {
            alert('注册成功');
        } else {
            alert('注册失败');
        }
    });

};

// 用户名校验 不能为空 不能超过10个字符 不能包含特殊字符
const validateUsername = (username: string) => {
    if (!username) {
        return '用户名不能为空';
    }
    if (username.length > 10) {
        return '用户名不能超过10个字符';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return '用户名不能包含特殊字符';
    }
    return '';
};

// 邮箱校验
const validateEmail = (email: string) => {
    if (!email) {
        return '邮箱不能为空';
    }
    if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)) {
        return '邮箱格式不正确';
    }
    return '';
};

// 密码校验
const validatePassword = (password: string) => {
    if (!password) {
        return '密码不能为空';
    }
    if (password.length < 6) {
        return '密码不能少于6个字符';
    }
    return '';
};

</script>

<style scoped>
.form-group {
    padding: 12px;
    display: flex;
    align-items: center;

    label {
        display: block;
        font-weight: bold;
        width: 100px;
    }
}
</style>
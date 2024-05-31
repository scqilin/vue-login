<template>
    <lay-container>
        <div class="container-demo">
            <form @submit="login">
                <div class="form-group">
                    <label for="username">用户名:</label>
                    <lay-input placeholder="请输入用户名" id="username" v-model="username" ></lay-input>
                </div>
                <div class="form-group">
                    <label for="password">密码:</label>
                    <lay-input type="password" placeholder="请输入密码" id="password" v-model="password" ></lay-input>
                </div>
                <lay-button type="primary" native-type="submit">登录</lay-button>
            </form>

            <div class="list">
                <lay-button @click="getList" type="primary">获取文章列表</lay-button>
                <ul>
                    <li v-for="item in list" :key="item.id">
                        <span>{{ item.title }}</span>:&nbsp;
                        <span>{{ item.content }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </lay-container>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { SHA256} from '../utils/encryptAes';
import axios from 'axios';

const username = ref('');

const password = ref('');

const list:any = ref([]);

// 页面加载完成后执行
onMounted(() => {
    
});

const login = (event:any) => {
   // 阻止表单默认提交行为
   event.preventDefault();
    const usernameError = validateUsername(username.value);
    const passwordError = validatePassword(password.value);

    if (usernameError || passwordError) {
        alert(usernameError || passwordError);
        return;
    }

    // 加密密码
    let enpas = SHA256(password.value);

    // 提交表单 发送请求
    /* fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: enpas
        })
    }).then(response => {
        console.log('response :>> ', response);
        return response.json();
    }); */

    // 使用axios发送请求
    axios.post('http://localhost:3000/user/login', {
        username: username.value,
        password: enpas
    }).then(response => {
        console.log('response :>> ', response);
        if (response.data.code === 200) {
            alert('登录成功');
            saveToken(response.data.access_token);
            setHeader();
        } else {
            alert('登录失败');
        }
    });
    
};

// 获取list
const getList = () => {
    axios.get('http://localhost:3000/article').then(response => {
        list.value = response?.data?.data || [];
    });
};

// 设置请求头 axios
const setHeader = () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
};

// 保存access_token  到 localStorage中
const saveToken = (token: string) => {
    localStorage.setItem('access_token', token);
};


const validateUsername = (username: string) => {
    if (!username) {
        return '用户名不能为空';
    }
    return '';
};

const validatePassword = (password: string) => {
    if (!password) {
        return '密码不能为空';
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
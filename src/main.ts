import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import { createRouter, createMemoryHistory } from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import ForgotPassword from './views/ForgotPassword.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgotPassword },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

createApp(App).use(router).use(Layui).mount('#app')

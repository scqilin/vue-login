<script setup lang="ts">
</script>

<template>
  <lay-layout class="example">
    <lay-header>
      <lay-button type="primary">
        <RouterLink to="/register">注册</RouterLink>
    </lay-button>
    <lay-button type="normal">
        <RouterLink to="/login">登录</RouterLink>
    </lay-button>
    <lay-button type="warm">
        <RouterLink to="/forgot-password">找回密码</RouterLink>
    </lay-button>
    </lay-header>
    <lay-body>
      <router-view />
    </lay-body>
    <lay-footer>
        <p>© 2021-2028</p>
    </lay-footer>
  </lay-layout>
</template>

<style scoped>
.example{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.example .layui-footer,
.example .layui-header {
  line-height: 60px;
  text-align: center;
  background: #87ca9a;
  color: white;
}

.example .layui-side {
  display: flex;
  background: #77c38c;
  align-items: center;
  justify-content: center;
  color: white;
}

.example .layui-body {
  display: flex;
  background: #5FB878;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>

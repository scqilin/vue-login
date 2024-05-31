<script setup lang="ts">
</script>

<template>
  <lay-layout class="example">
    <lay-header>
      <lay-space>
        <RouterLink to="/register"><lay-button type="primary">注册</lay-button></RouterLink>
      <RouterLink to="/login"><lay-button type="normal">登录</lay-button></RouterLink>
      <RouterLink to="/forgot-password"><lay-button type="warm">找回密码</lay-button></RouterLink>
      </lay-space>
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
.example {
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

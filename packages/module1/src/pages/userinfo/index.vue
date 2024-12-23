<template>
  <div>
    <h1>用户信息</h1>
    <div v-if="user">
      <p>ID: {{ user.id }}</p>
      <p>名称: {{ user.username }}</p>
      <p>电话: {{ user.mobile }}</p>
      <button @click="certify">个人认证</button>
      <button @click="logout">退出登录</button>
    </div>
    <div v-else>
      <p>未登录</p>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const user = userStore.user_info.user;
const login = () => {
  uni.navigateTo({ url : '/pages/login/index' });
};
const logout = () => {
  userStore.clearUser();
  uni.navigateTo({ url : '/pages/login/index' });
};

const certify = () => {
  uni.navigateTo({ url : '/pages/certify/index' });
};
</script>

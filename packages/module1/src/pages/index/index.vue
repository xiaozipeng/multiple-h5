<template lang="">
  <div>
    <button @click="goPage('/pages/login/index')">登录页面</button>
    <button @click="goPage('/pages/certify/index')">认证页面</button>
    <button @click="goPage('/pages/counter/index')">pinia页面</button>
  </div>
</template>
<script setup>
const goPage = (url) => {
  // 使用 uni.navigateTo 进行页面跳转
  uni.navigateTo({ url });
}
</script>
<style lang="">

</style>
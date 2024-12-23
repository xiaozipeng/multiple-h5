<template lang="">
  <div>
    <button @click="goToDetail('/pages/minutes/index?code=000001&secumarket=zs')">跳转第一个页面</button>
    <button @click="goToDetail('/pages/hqChart/index')">跳转第二个页面</button>
  </div>
</template>
<script setup>
const goToDetail = (url) => {
  // 使用 uni.navigateTo 进行页面跳转
  uni.navigateTo({ url });
}
</script>
<style lang="">

</style>
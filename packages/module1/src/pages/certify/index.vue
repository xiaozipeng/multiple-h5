<template>
  <view class="container">
    <!-- 用户名输入框 -->
    <view class="form-item">
      <text>用户名</text>
      <input type="text" placeholder="请输入用户名" v-model="form.username" />
    </view>

    <!-- 身份证输入框 -->
    <view class="form-item">
      <text>身份证</text>
      <input type="text" placeholder="请输入身份证号码" v-model="form.idCard" />
    </view>

    <!-- 提交按钮 -->
    <view :disabled="!isFormValid" @click="handleSubmit" class="submit-button" :class="{ disabled: !isFormValid }">
      提交
    </view>
  </view>
</template>

<script setup lang="ts">
import { verify_identity } from '@/services/certify';
import type { Form, VerifyIdentityResponse } from "@/types";
import { computed, reactive } from 'vue';
import { useTokenStore } from "@/stores/token";
const tokenStore = useTokenStore();

const form = reactive<Form>({
  username: '',
  idCard: '',
});

// 计算表单是否有效
const isFormValid = computed<boolean>(() => {
  return form.username.trim() !== '' && form.idCard.trim() !== '';
});

// 提交表单
const handleSubmit = (): void => {
  if (!isFormValid.value) return;

  const token = tokenStore.token_info.token?.short;
  const params = { name: form.username, identity: form.idCard };

  verify_identity(`dx/secure/verify_identity?token=${token}`, params)
    .then((res: VerifyIdentityResponse) => {
      uni.showToast({
        title: res.msg,
        icon: 'none',
      });
    })
    .catch((err: unknown) => {
      console.error(err);
      uni.showToast({
        title: '提交失败',
        icon: 'none',
      });
    });
};
</script>
<style lang="scss" scoped>
/* 390 改成实际设计稿 */
@function pxToRpx($px) {
  @return calc($px / 750) * 750 * 1rpx;
}

.container {
  padding: pxToRpx(20);
}

.form-item {
  margin-bottom: pxToRpx(20);
}

input {
  height: 40px;
  padding: 0 pxToRpx(10);
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  width: pxToRpx(700);
  height: 40px;
  background-color: #007aff;
  color: #fff;
  text-align: center;
  line-height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

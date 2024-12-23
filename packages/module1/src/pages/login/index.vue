<template>
  <view class="container">
    <!-- 用户名输入框 -->
    <view class="form-item">
      <text>用户名</text>
      <input type="text" placeholder="请输入用户名" v-model="form.mobile" />
    </view>

    <!-- 身份证输入框 -->
    <view class="form-item">
      <text>密码</text>
      <input type="password" placeholder="请输入密码" v-model="form.password" />
    </view>

    <!-- 提交按钮 -->
    <view :disabled="!isFormValid" @click="handleSubmit" class="submit-button" :class="{ disabled: !isFormValid }">
      登入
    </view>
  </view>
</template>

<script setup lang="ts">
import { login } from '@/services/certify';
import { useTokenStore } from "@/stores/token";
import { useUserStore } from "@/stores/user";
import type { ILoginResponse, LoginForm } from "@/types";
import { computed, reactive } from 'vue';
const userStore = useUserStore();
const tokenStore = useTokenStore();
const form = reactive<LoginForm>({
  mobile: '',
  password: '',
});

// 计算表单是否有效
const isFormValid = computed<boolean>(() => {
  return form.mobile.trim() !== '' && form.password.trim() !== '';
});

// 提交表单
const handleSubmit = (): void => {
  if (!isFormValid.value) return;
  const defaultParams = { from: 'cppclient', client_type: 1 };
  const params = { mobile: form.mobile, password: form.password, ...defaultParams };
  uni.request({
    url: 'https://test-dxzg-api.dexunzhenggu.cn/dx/user/login', // 请求地址
    method: 'POST', // 请求方法
    data: params, // 请求参数
    success: (response) => {
      const { code, msg, data } = response.data as ILoginResponse;

      if (code === 0 && data) {
        const { user, token } = data;

        // 更新用户信息和 token
        userStore.setUser(user);
        tokenStore.setToken(token);
        uni.navigateTo({ url: '/pages/userinfo/index' });
      }

      // 显示提示信息
      uni.showToast({
        title: '登入成功',
        icon: 'none',
      });
    },
    fail: (error) => {
      console.error(error);
      // 显示错误提示
      uni.showToast({
        title: '登录失败',
        icon: 'none',
      });
    },
  });
  // login(`dx/user/login`, params).then((res: ILoginResponse) => {
  //   const { code, msg, data: { user, token } } = res;
  //   if (code === 0) {
  //     userStore.setUser(user);
  //     tokenStore.setToken(token);
  //   }
  //   uni.showToast({
  //     title: msg,
  //     icon: 'none',
  //   });
  // }).catch((err: unknown) => {
  //   console.error(err);
  //   uni.showToast({
  //     title: '登录失败',
  //     icon: 'none',
  //   });
  // });
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

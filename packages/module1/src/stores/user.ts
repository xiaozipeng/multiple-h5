import { defineStore } from 'pinia';
import { computed, ref, reactive } from 'vue';
import type { User } from '@/types';

export const useUserStore = defineStore('user', () => {
  const user_info = reactive({
    user: null as User | null, // 用户信息
  });
  // 设置用户信息
  function setUser(user: User) {
    user_info.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
  // 清除用户信息
  function clearUser() {
    user_info.user = null;
    localStorage.removeItem('user');
  }

  // 从 localStorage 加载用户信息
  function getUser() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user_info.user = JSON.parse(storedUser);
    }
  }

	return {
		user_info,
		setUser,
		clearUser,
		getUser,
	}
});

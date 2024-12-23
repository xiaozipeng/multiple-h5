import type { Token } from '@/types';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useTokenStore = defineStore('token', () => {
  const token_info = reactive({
    token: null as Token | null,
  });
  function setToken(token: Token) {
    token_info.token = token;
    localStorage.setItem('token', JSON.stringify(token));
  }
  function clearToken() {
    token_info.token = null;
    localStorage.removeItem('token');
  }

  function getToken() {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      token_info.token = JSON.parse(storedToken);
    }
  }

	return {
    token_info,
    setToken,
    clearToken,
    getToken,
	}
});

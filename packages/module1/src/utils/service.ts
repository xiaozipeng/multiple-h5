
export const fetchApi = async (url: string, options: any = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetch(url, {
      ...options,
      headers: { ...defaultHeaders, ...options.headers },
    });
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// 定义 GET 方法
export const get = (url: string, params = {}, options = {}) => {
  // 将参数转换为查询字符串
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;

  return fetchApi(fullUrl, { ...options, method: 'GET' });
};

// 定义 POST 方法
export const post = (url: string, body = {}, options = {}) => {
  return fetchApi(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  });
};

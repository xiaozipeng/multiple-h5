import { reactive, toRef, watch } from 'vue';
import { useRoute } from 'vue-router';

type QueryParams = Record<string, string>;

// 根据传入的 keys 数组动态构建返回值类型
type QueryParamsRefs<T extends string[]> = {
  [K in T[number]]: ReturnType<typeof toRef>;
};

export function useQueryParams<T extends string[]>(keys: T) {
  const route = useRoute();
  
  // 使用 reactive 创建一个响应式对象，存储查询参数
  const params = reactive(
    keys.reduce((acc, key) => {
      acc[key] = ''; // 初始化每个键对应的参数值
      return acc;
    }, {} as QueryParams)
  );

  // 使用 toRef 解构并保持响应性
  const paramRefs = keys.reduce((acc, key) => {
    acc[key] = toRef(params, key); // 使用 toRef 保持每个属性的响应性
    return acc;
  }, {} as Record<string, any>);

  // 更新查询参数
  const updateParams = () => {
    keys.forEach(key => {
      params[key] = route.query[key] as any; // 默认值为空字符串
    });
  };

  // 初始化时获取参数
  updateParams();

  // 监听路由变化
  watch(
    () => route.query,
    () => {
      updateParams();
    }
  );

  return paramRefs as QueryParamsRefs<T>; // 返回类型签名
}

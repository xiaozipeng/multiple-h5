import { post } from "@/utils/service";
// @ts-ignore
import getDomain from "~/common/env/domain"
const domainKey = 'dx';
export const getBaseURL = (url: string) => (process.env.NODE_ENV === 'development' ? `/api/${url}` : `${getDomain(process.env.PROJECT_ENV)??[domainKey]}/${url}`);
export const verify_identity = (url: string, params: any) => {
  return post(getBaseURL(url), params);
};

export const login = (url: string, params: any) => {
  return post(getBaseURL(url), params);
};

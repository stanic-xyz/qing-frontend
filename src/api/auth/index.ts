import { qingHttp } from "@/utils/service";

/** 登录 */
export const getLogin = (username: string, password: string) => {
  return qingHttp.post("api/authorize/formLogin", {
    username: username,
    password: password,
  });
};

export const exchangeToken = (code: string, state: string) => {
  return qingHttp.post("api/authorize/auth/token", {
    code: code,
    state: state,
  });
};

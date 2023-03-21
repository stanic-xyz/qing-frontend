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

export const logOut = (accessToken: string) => {
  return qingHttp.get("api/authorize/auth/logout", {
    token: accessToken,
  });
};

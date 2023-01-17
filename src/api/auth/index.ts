import { qingHttp } from "@/utils/service";

/** 登录 */
export const getLogin = (username: string, password: string) => {
  return qingHttp.post("api/authorize/formLogin", {
    username: username,
    password: password,
  });
};

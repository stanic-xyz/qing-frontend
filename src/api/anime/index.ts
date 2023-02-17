import { qingHttp } from "@/utils/service";

/** 登录 */
export const getLogin = (username: string, password: string) => {
  return qingHttp.post("api/authorize/formLogin", {
    username: username,
    password: password,
  });
};

/** 卡片列表 */
export const getAnimeList = (data?: object) => {
  return qingHttp.get("/getCardList", {
    page: 1,
    pageSize: 2,
  });
};

export interface Anime {
  animeId: String;
  animeName?: String;
  coverUrl?: String;
  premiereDate?: String;
}

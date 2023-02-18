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
  id: Number;
  animeId?: String;
  name?: String;
  coverUrl?: String;
  premiereDate?: String;
  districtId?: Number;
  instruction?: String;
  districtName?: String;
  typeId?: Number;
  typeName?: String;
  originalName?: String;
  otherName?: String;
  author?: String;
  company?: String;
  playStatus?: String;
  plotType?: String;
  tags?: Array<String>;
  officialWebsite?: String;
  playHeat?: String;
}

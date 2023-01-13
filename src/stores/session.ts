import { defineStore } from "pinia";
import moment from "moment";

export const userInfoStore = defineStore("userInfo", {
  state: () => {
    return {
      username: "username",
      nickname: "Static",
      avatar: "http://dummyimage.com/100x100",
      token:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XHJcbiAgXCJ1c2VybmFtZVwiIDogXCLpkrHoibNcIixcclxuICBcIm5pY2tuYW1lXCIgOiBcIuWRqOW8ulwiLFxyXG4gIFwiYXZhdGFyXCIgOiBcImh0dHA6Ly9kdW1teWltYWdlLmNvbS8xMDB4MTAwXCIsXHJcbiAgXCJ0b2tlblwiIDogbnVsbFxyXG59IiwiYXV0aCI6ImF1dGhvcml0aWVzIiwidXNlcklkIjoiIiwidXNlckFnZW50IjoiIiwiZXhwIjoxNjczMzIxNzg3fQ.5FMCpUiClFYKnKb6i8jng4ZiOxGjaT_9xqyK0CmCxG3otikZTQvQeJxsYX1eJ9C_xrCGcWH4FHTHSyu4GyysGw",
      expireAt: moment(),
    };
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    login() {},
  },
});

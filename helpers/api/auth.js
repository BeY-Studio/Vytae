import * as handler from "./handler";
// import { CREDENTIALS } from "../../configs/configs";
// import {
//   PATH_ACCESS_TOKEN
// } from "./path";
import cookieCutter from 'cookie-cutter'

const getAccessToken = () => {
  return handler
    .post(
    //   PATH_ACCESS_TOKEN,
    //   {
    //     email: CREDENTIALS.EMAIL,
    //     password: CREDENTIALS.PASSWORD,
    //   },
        true
    )
    .then((res) => {
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("expiredTime", new Date());
      cookieCutter.set('accessToken', res.data.token)
      return res.data.token;
    });
};

export default {
  getAccessToken
};

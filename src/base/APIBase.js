import axios from "axios";
import Cookies from "universal-cookie";

class APIBase {
  static cookies = new Cookies(null, {
    path: "/",
    domain: "game.gkcorp.com.vn",
  });

  static access_token =
    new Cookies().get("access_token") || localStorage.getItem("access_token");

  static updateAccessToken(token) {
    APIBase.access_token = token;
  }

  static apiCaller(method, url, data, otherHeaders) {
    return new Promise((resolve, reject) => {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${APIBase.access_token}`,
      };
      axios({
        method,
        url,
        headers: {
          ...headers,
          ...otherHeaders,
        },
        data,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          if (error.message == "Network Error") {
            alert("Vui lòng kiểm tra kết nối Internet");
          }
        });
    });
  }
}

export default APIBase;

import API from "../apis/APIConstants";
import APIBase from "./APIBase";

const updateQuantityItem = async (body) => {
  try {
    let dataResult = [];
    let uriApi = `${API.baseURL}${API.saveQuantityItem}`;

    const result = await APIBase.apiCaller("POST", uriApi, body);
    if (result?.status) {
      // console.log(result);
      dataResult = result;
    }
    return dataResult;
  } catch (e) {
    // console.log(e);
  }
};

export default updateQuantityItem;

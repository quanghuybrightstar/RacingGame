import { useState, useEffect } from "react";
import StorageValue from "../../storage/StorageValue";
import APIBase from "../../base/APIBase";
import API from "../../apis/APIConstants";
import axios from "axios";
import ParamAuth from "../../constants/ParamAuth";

export const raceLogic = (props) => {
  const [dataRace, setDataRace] = useState([]);

  const platformSelected = StorageValue.platformSelected;

  const getDetailPlatform = async () => {
    if (platformSelected) {
      try {
        let uriApi = `${API.baseURL}${API.detailPlatform}?id_platform=${platformSelected.id}&type=${platformSelected.type}`;

        const result = await APIBase.apiCaller("GET", uriApi);
        if (result?.status) {
          const filterDiamond = result.data.filter(
            (data) => data.item_category == "diamond"
          );
          const filterTicket = result.data.filter(
            (data) => data.item_category == "ticket"
          );
          setDataRace(result.data);
          // console.log(filterDiamond[0]);
          StorageValue.updateQuantityDiamonds(
            filterDiamond[0].quantity_available
          );
          StorageValue.updateQuantityTickets(
            filterTicket[0].quantity_available
          );
          // console.log(filterTicket[0].quantity_available);
          StorageValue.updateDetailItem(result.data);
        }
      } catch (e) {
        // console.log(e);
      }
    }
  };

  // Get Access token
  // const getAccessToken = async () => {
  //   try {
  //     const urlApi = `${API.baseURL}${API.accessToken}`;

  //     const dataBody = {
  //       client_id: ParamAuth.client_id,
  //       client_secret: ParamAuth.client_secret,
  //       grant_type: ParamAuth.grant_type,
  //       password: "Khongcomk123123",
  //       scope: ParamAuth.scope,
  //       username: "daoquanghuy29077@gmail.com",
  //     };

  //     const result = await APIBase.apiCaller("POST", urlApi, dataBody);
  //     console.log(result);
  //     if (result) {
  //       APIBase.updateAccessToken(result.access_token);
  //       localStorage.setItem("access_token", result.access_token);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     if (e.message == "Network Error") {
  //       alert("Vui lòng kiểm tra kết nối Internet");
  //     }
  //   }
  // };
  // getAccessToken();
  useEffect(() => {
    getDetailPlatform();
  }, [StorageValue.countDiamond]);

  return { dataRace };
};

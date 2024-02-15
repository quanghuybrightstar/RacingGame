/* eslint-disable no-unused-vars */
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const createLineCaro = (_this, _graphicsRace) => {
  const lineCaro = _this?.add.image(0, 0, "imgLine");
  lineCaro.setPosition(widthScreen * 632, widthScreen * 180);
  lineCaro.setDisplaySize(widthScreen * 1265, widthScreen * 1);
  lineCaro.setDepth(0);

  // console.log(930 / widthScreen + "_" + 418 / widthScreen);
  StorageValue.updateListLineCaro(lineCaro);

  return lineCaro;
  
};

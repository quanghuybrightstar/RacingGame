/* eslint-disable no-unused-vars */
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const createBanderol = (_this, _graphicsRace) => {
  const banderol = _this?.add.image(0, 0, "imgBanderol");
  banderol.setPosition(widthScreen * 636, widthScreen * 135);
  banderol.setDisplaySize(widthScreen * 302, widthScreen * 101);
  banderol.setDepth(9999);

  // console.log(930 / widthScreen + "_" + 418 / widthScreen);
  //   StorageValue.updateListLineCaro(imgBanderol);
  StorageValue.updateCountLamps(1);
  StorageValue.updateListBanderol(banderol);

  return banderol;
};

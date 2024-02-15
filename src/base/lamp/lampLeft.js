/* eslint-disable no-unused-vars */
import { Constants } from "../../constants/Constants";
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const createLampLeft = (_this, _graphicsRace) => {
  const imgLampLeft =
    StorageValue.countLamps % 5 == 0 && StorageValue.countLamps % 10 != 0
      ? _this.add.image(0, 0, "imgBillboardLeft")
      : _this.add.image(0, 0, "imgLampLeft");

  imgLampLeft.setPosition(widthScreen * 510, widthScreen * 145);
  imgLampLeft.setDisplaySize(
    imgLampLeft.texture.key == "imgLampLeft"
      ? widthScreen * 30
      : widthScreen * 43,

    imgLampLeft.texture.key == "imgLampLeft"
      ? widthScreen * 80
      : widthScreen * 113
  );
  imgLampLeft.setDepth(2);
  imgLampLeft.setAlpha(0.1);

  setTimeout(() => {
    imgLampLeft.setAlpha(1);
  }, 80 / StorageValue.kValue);

  // console.log(930 / widthScreen + "_" + 418 / widthScreen);

  StorageValue.updateListLampLeft(imgLampLeft);
  StorageValue.updateCountLamps(1);
  return imgLampLeft;
};

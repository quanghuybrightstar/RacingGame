/* eslint-disable no-unused-vars */
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const createLampRight = (_this, _graphicsRace) => {
  const imgLampRight =
    StorageValue.countLamps % 5 == 0 && StorageValue.countLamps % 10 == 0
      ? _this.add.image(0, 0, "imgBillboardRight")
      : _this.add.image(0, 0, "imgLampRight");
  imgLampRight.setPosition(widthScreen * 763, widthScreen * 145);
  imgLampRight.setDisplaySize(widthScreen * 30, widthScreen * 80);
  imgLampRight.setDisplaySize(
    imgLampRight.texture.key == "imgLampRight"
      ? widthScreen * 30
      : widthScreen * 43,

    imgLampRight.texture.key == "imgLampRight"
      ? widthScreen * 80
      : widthScreen * 113
  );
  imgLampRight.setDepth(2);

  imgLampRight.setAlpha(0.1);

  setTimeout(() => {
    imgLampRight.setAlpha(1);
  }, 80 / StorageValue.kValue);

  // console.log(814 / widthScreen + "_" + 380 / widthScreen);

  StorageValue.updateListLampRight(imgLampRight);
  return imgLampRight;
};

/* eslint-disable no-unused-vars */
import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const motivationCenter = (_this, _item, _positionY) => {
  const positionX = widthScreen * 635;

  _item.setPosition(positionX, widthScreen * _positionY);

  // _item.setScale(_scaleX, _scaleY);
};

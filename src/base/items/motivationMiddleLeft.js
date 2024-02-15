/* eslint-disable no-unused-vars */
import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const motivationMiddleLeft = (_this, _item, _positionY) => {
  const positionX =
    Constants.aMiddleLeft * _positionY * _positionY +
    Constants.bMiddleLeft * _positionY +
    Constants.cMiddleLeft;

  _item.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

/* eslint-disable no-unused-vars */
import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const motivationMiddleRight = (_this, _item, _positionY) => {
  const positionX =
    Constants.aMiddleRight * _positionY * _positionY +
    Constants.bMiddleRight * _positionY +
    Constants.cMiddleRight;

  _item.setPosition(widthScreen * positionX, widthScreen * _positionY);

  // _item.setScale(_scaleX, _scaleY);
};

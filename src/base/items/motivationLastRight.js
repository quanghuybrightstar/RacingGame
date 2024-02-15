/* eslint-disable no-unused-vars */
import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const motivationLastRight = (_this, _item, _positionY) => {
  const positionX =
    Constants.aLastRight * _positionY * _positionY +
    Constants.bLastRight * _positionY +
    Constants.cLastRight;

  _item.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

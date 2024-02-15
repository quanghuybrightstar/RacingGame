/* eslint-disable no-unused-vars */
import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const motivationLastLeft = (_this, _item, _positionY) => {
  const positionX =
    Constants.aLastLeft * _positionY * _positionY +
    Constants.bLastLeft * _positionY +
    Constants.cLastLeft;

  _item.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

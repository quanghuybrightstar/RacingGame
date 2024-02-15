/* eslint-disable no-unused-vars */
import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const moveLineCaro = (_this, _lineCaro, _positionY) => {
  _lineCaro.setPosition(widthScreen * 632, widthScreen * _positionY);
};

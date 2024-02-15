/* eslint-disable no-unused-vars */
import StorageValue from "../../storage/StorageValue";
import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const moveLampRight = (_this, _lamp, _positionY) => {
  const positionX =
    Constants.aLampRight * _positionY * _positionY +
    Constants.bLampRight * _positionY +
    Constants.cLampRight;

  _lamp.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

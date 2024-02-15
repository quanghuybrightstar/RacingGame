/* eslint-disable no-unused-vars */
import { Constants } from "../../constants/Constants";
import { tweensLamp } from "../animations/tweenAnims";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const moveLampLeft = (_this, _lamp, _positionY, _graphicsRace) => {
  const positionX =
    Constants.aLampLeft * _positionY * _positionY +
    Constants.bLampLeft * _positionY +
    Constants.cLampLeft;
    
  _lamp.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

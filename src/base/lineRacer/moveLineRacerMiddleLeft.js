import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const moveLineRacerMiddleLeft = (_this, _lineRacer, _positionY) => {
  const positionX =
    Constants.aLineRaceMiddleLeft * _positionY * _positionY +
    Constants.bLineRaceMiddleLeft * _positionY +
    Constants.cLineRaceMiddleLeft;

  _lineRacer.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

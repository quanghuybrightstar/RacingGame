import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const moveLineRacerMiddleRight = (_this, _lineRacer, _positionY) => {
  const positionX =
    Constants.aLineRaceMiddleRight * _positionY * _positionY +
    Constants.bLineRaceMiddleRight * _positionY +
    Constants.cLineRaceMiddleRight;

  _lineRacer.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

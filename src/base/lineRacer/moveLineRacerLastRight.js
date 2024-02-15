import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const moveLineRacerLastRight = (_this, _lineRacer, _positionY) => {
  const positionX =
    Constants.aLineRaceLastRight * _positionY * _positionY +
    Constants.bLineRaceLastRight * _positionY +
    Constants.cLineRaceLastRight;

  _lineRacer.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

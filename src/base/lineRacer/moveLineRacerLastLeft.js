import { Constants } from "../../constants/Constants";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const moveLineRacerLastLeft = (_this, _lineRacer, _positionY) => {
  const positionX =
    Constants.aLineRaceLastLeft * _positionY * _positionY +
    Constants.bLineRaceLastLeft * _positionY +
    Constants.cLineRaceLastLeft;

  _lineRacer.setPosition(widthScreen * positionX, widthScreen * _positionY);
};

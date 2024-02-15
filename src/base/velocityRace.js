import { Constants } from "../constants/Constants";
import SmartBaseScreen from "./SmartBaseScreen";
import StorageValue from "../storage/StorageValue";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const velocityRace = (_time, _typeDistance, _delta, _percent) => {
  const numberOfUpdate = _typeDistance / ((_percent * _time * 1000) / _delta);

  return numberOfUpdate;
};

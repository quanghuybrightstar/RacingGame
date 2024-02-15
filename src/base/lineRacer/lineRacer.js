import SmartBaseScreen from "../SmartBaseScreen";
import { Constants } from "../../constants/Constants";
import StorageValue from "../../storage/StorageValue";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const createLineRacer = (
  _this,
  _positionXIndex,
  _positionYIndex,
  _scale
) => {
  const lineRacer = _this?.add.image(0, 0, "imgLineRacer");
  lineRacer.setPosition(
    widthScreen * (494 + _positionXIndex * 57),
    _positionYIndex || widthScreen * 190
  );
  lineRacer.setDisplaySize(
    widthScreen * 5 * (_scale / 1.8 || 1),
    widthScreen * 30 * (_scale / 1.2 || 1)
  );
  lineRacer.setDepth(1);
  if (!_positionYIndex) {
    lineRacer.setAlpha(0.3);
    setTimeout(() => {
      lineRacer.setAlpha(0.5);
    }, 50 / StorageValue.kValue);
  } else {
    lineRacer.setAlpha(0.5);
  }
  switch (_positionXIndex) {
    case 1:
      lineRacer.rotation = Math.PI / 11;
      break;
    case 2:
      lineRacer.rotation = Math.PI / 28;
      break;
    case 3:
      lineRacer.rotation = -Math.PI / 28;
      break;
    case 4:
      lineRacer.rotation = -Math.PI / 11;
      break;
    default:
      break;
  }

  // console.log(930 / widthScreen + "_" + 418 / widthScreen);

  StorageValue.updateListLineRacer({
    lineRacer,
    positionXIndex: _positionXIndex,
  });

  return lineRacer;
};

import { moveLineRacerLastLeft } from "./moveLineRacerLastLeft";
import { moveLineRacerLastRight } from "./moveLineRacerLastRight";
import { moveLineRacerMiddleLeft } from "./moveLineRacerMiddleLeft";
import { moveLineRacerMiddleRight } from "./moveLineRacerMiddleRight 2";

export const moveLineRacer = (
  _this,
  _lineRacer,
  _positionXIndex,
  _positionY
) => {
  switch (_positionXIndex) {
    case 1:
      moveLineRacerLastLeft(_this, _lineRacer, _positionY);
      break;
    case 2:
      moveLineRacerMiddleLeft(_this, _lineRacer, _positionY);
      break;
    case 3:
      moveLineRacerMiddleRight(_this, _lineRacer, _positionY);
      break;
    case 4:
      moveLineRacerLastRight(_this, _lineRacer, _positionY);
      break;
    default:
      break;
  }
};

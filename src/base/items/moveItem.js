/* eslint-disable no-unused-vars */
import { TypeItem } from "../../constants/items/typeItem";
import StorageValue from "../../storage/StorageValue";
import { motivationCenter } from "./motivationCenter";
import { motivationLastLeft } from "./motivationLastLeft";
import { motivationLastRight } from "./motivationLastRight";
import { motivationMiddleLeft } from "./motivationMiddleLeft";
import { motivationMiddleRight } from "./motivationMiddleRight";

export const moveItem = (
  _this,
  _item,
  _positionY,
  _carPlayer,
  _positionXIndex
) => {
  switch (_positionXIndex) {
    case 1:
      motivationLastLeft(_this, _item, _positionY);
      break;
    case 2:
      motivationMiddleLeft(_this, _item, _positionY);
      break;
    case 3:
      motivationCenter(_this, _item, _positionY);
      break;
    case 4:
      motivationMiddleRight(_this, _item, _positionY);
      break;
    case 5:
      motivationLastRight(_this, _item, _positionY);
      break;
    default:
      break;
  }

};

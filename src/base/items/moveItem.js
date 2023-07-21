/* eslint-disable no-unused-vars */
import { tweensItem } from "../animations/tweenAnims";
import { TypeItem } from "../../constants/items/typeItem";
import StorageValue from "../../storage/StorageValue";

export const moveItem = (
  _this,
  _item,
  positionX,
  positionY,
  _scaleX,
  _scaleY,
  itemInited,
  _itemContainer,
  _carPlayer,
  _positionXIndex
) => {
  setInterval(() => {
    tweensItem(
      _this,
      _item,
      positionX,
      _itemContainer.y * (1 + positionY),
      _scaleX,
      _scaleY,
      itemInited,
      handleUpdate
    );

    function handleUpdate() {}

    // Check positionY
    if (positionY >= 0.15) {
      positionY += 0.6;
      switch (_positionXIndex) {
        case 1:
          positionX -= _itemContainer.x * 1.35;
          break;
        case 2:
          positionX -= _itemContainer.x * 0.48;
          break;
        case 3:
          break;
        case 4:
          positionX += _itemContainer.x * 0.48;
          break;
        case 5:
          positionX += _itemContainer.x * 1.35;
          break;
        default:
      }
    } else if (positionY > -0.35 && positionY < 0.15) {
      positionY += 0.4;
      switch (_positionXIndex) {
        case 1:
          positionX -= _itemContainer.x * 1.15;
          break;
        case 2:
          positionX -= _itemContainer.x * 0.4;
          break;
        case 3:
          break;
        case 4:
          positionX += _itemContainer.x * 0.4;
          break;
        case 5:
          positionX += _itemContainer.x * 1.15;
          break;
        default:
      }
    } else {
      positionY += 0.2;
      switch (_positionXIndex) {
        case 1:
          positionX -= _itemContainer.x * 0.45;
          break;
        case 2:
          positionX -= _itemContainer.x * 0.25;
          break;
        case 3:
          break;
        case 4:
          positionX += _itemContainer.x * 0.25;
          break;
        case 5:
          positionX += _itemContainer.x * 0.45;
          break;
        default:
      }
    }

    if (_itemContainer.y * (1 + positionY) > _itemContainer.y * 3.7) {
      _item.destroy();
    }

    // // Scale
    if (itemInited.type === TypeItem.CAR_COLLIDE) {
      _scaleX += 0.11;
      _scaleY += 0.11;
    } else {
      _scaleX += 0.05;
      _scaleY += 0.05;
    }

    _this.physics.add.collider(_carPlayer, _item, function () {
      StorageValue.updateIsCollided(true);
      StorageValue.updateTypeCollider(itemInited.type);
      
      _item.destroy();
    });
  }, itemInited.velocity);
};

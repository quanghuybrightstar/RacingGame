/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../SmartBaseScreen";
import { TypeItem } from "../../constants/items/typeItem";
import StorageValue from "../../storage/StorageValue";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
let index = 0;

export const createItem = (
  _this,
  _type,
  imgKey,
  positionX,
  positionY,
  depth
) => {
  const item = _this.physics.add?.sprite(0, 0, imgKey);
  item?.setDepth(depth);
  item?.setPosition(positionX, positionY);

  _type == TypeItem.BARRIER
    ? item?.setDisplaySize(widthScreen * 65, widthScreen * 22)
    : _type == TypeItem.CAR_COLLIDE
    ? item?.setDisplaySize(widthScreen * 62, widthScreen * 35)
    : item?.setDisplaySize(widthScreen * 22, widthScreen * 22);

  item?.setSize(item.width * 0.75, item.height * 0.6);
  item?.setName(`item_${index}`);

  item.setAlpha(0.5);

  setTimeout(() => {
    item.setAlpha(1);
  }, 30 / StorageValue.kValue);

  index++;

  return item;
};

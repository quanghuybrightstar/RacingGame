/* eslint-disable no-unused-vars */
import { listItems } from "../../constants/items/listItem";
import { createItem } from "./item";
import { TypeItem } from "../../constants/items/typeItem";
import { moveItem } from "./moveItem";

export const randomItem = (
  _this,
  _itemContainer,
  _carPlayer,
  _graphicsRace
) => {
  let scaleX = 0;
  let scaleY = 0;
  const expanded = listItems.flatMap((item) => Array(item.pct).fill(item));
  const itemCreated = expanded[Math.floor(Math.random() * expanded.length)];
  const carID = Math.floor(Math.random() * (3 - 2 + 1) + 2);

  if (itemCreated.type === TypeItem.CAR_COLLIDE) {
    itemCreated.imgKey = `imgCar${carID}`;
  }

  const positionXIndex = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  // console.log(positionXIndex);

  // if(_itemContainer)

  // console.log(_itemContainer.list);

  // console.log(_graphicsRace.x * (6 + 0.17 * positionXIndex));

  let itemObj = createItem(
    _this,
    itemCreated.type,
    itemCreated.imgKey,
    _itemContainer.x * (6.33 + 0.06 * positionXIndex),
    _itemContainer.y * 0,
    itemCreated.depth,
    _itemContainer
  );

  // console.log(6.33 + 0.06 * positionXIndex));

  if (itemCreated.type === TypeItem.CAR_COLLIDE) {
    scaleX = 0.1;
    scaleY = 0.1;
  } else {
    scaleX = 0.08;
    scaleY = 0.08;
  }

  moveItem(
    _this,
    itemObj,
    _itemContainer.x * (6.33 + 0.06 * positionXIndex),
    -0.85,
    scaleX,
    scaleY,
    itemCreated,
    _itemContainer,
    _carPlayer,
    positionXIndex
  );
};

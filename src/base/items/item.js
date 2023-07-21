/* eslint-disable no-unused-vars */

let index = 99;

export const createItem = (
  _this,
  _type,
  imgKey,
  positionX,
  positionY,
  depth,
  _itemContainer
) => {
  const item = _this.physics.add.sprite(0, 0, imgKey);
  _itemContainer.add(item);
  item.setDepth(depth);
  item.setPosition(positionX, positionY);

  item.setDisplaySize(5, 5);

  index++;

  return item;
};

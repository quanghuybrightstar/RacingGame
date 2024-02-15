/* eslint-disable no-unused-vars */
import { listItems } from "../../constants/items/listItem";
import { createItem } from "./item";
import { TypeItem } from "../../constants/items/typeItem";
import { moveItem } from "./moveItem";
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";
import { randomNumberExcept } from "../randomNumberExcept";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

// Method random and check condition to create item
export const randomItem = (_this, _carPlayer, _graphicsRace) => {
  let isCreateItem = true;

  const expanded = listItems.flatMap((item) => Array(item.pct).fill(item));
  const itemCreated = expanded[Math.floor(Math.random() * expanded.length)];

  const carID = Math.floor(Math.random() * (3 - 2 + 1) + 2);

  if (itemCreated.type) {
    if (itemCreated.type === TypeItem.CAR_COLLIDE) {
      itemCreated.imgKey = `imgCar${carID}`;
    }

    // const positionXIndex = 1;
    let positionXIndex = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    // Condition create item
    StorageValue.listItem.forEach((item) => {
      // Barrier and car collide dont create in a same lane
      if (
        itemCreated.type === TypeItem.BARRIER &&
        item.itemCreated.type === TypeItem.CAR_COLLIDE &&
        item.positionXIndex === positionXIndex
      ) {
        isCreateItem = false;
      }

      // Condition check maximum 3 item barrier/car collide dont run in a horizontal line
      if (
        (itemCreated.type === TypeItem.BARRIER ||
          itemCreated.type === TypeItem.CAR_COLLIDE) &&
        (item.itemCreated.type === TypeItem.BARRIER ||
          item.itemCreated.type === TypeItem.CAR_COLLIDE) &&
        Math.abs(positionXIndex - item.positionXIndex) <= 2
      ) {
        if (
          Math.abs(
            175 * widthScreen +
              (500 * widthScreen) / (((itemCreated.time / 2) * 2) / 3) -
              item.itemObj.y <=
              widthScreen * 30
          )
        ) {
          isCreateItem = false;
        }
      }

      // Check static item dont create with car item
      if (
        itemCreated.type != TypeItem.CAR_COLLIDE &&
        item.itemCreated.type == TypeItem.CAR_COLLIDE &&
        item.itemObj.y < 320 * widthScreen &&
        item.positionXIndex == positionXIndex
      ) {
        isCreateItem = false;
        // positionXIndex = randomNumberExcept(5, 1, positionXIndex);
      }

      // Change position when double item create consecutive
      if (
        item.positionXIndex === positionXIndex &&
        Math.abs(item.itemObj.y - 175 * widthScreen) < 30 * widthScreen
      ) {
        positionXIndex = randomNumberExcept(5, 1, positionXIndex);
        // isCreateItem = false;
      }
    });

    // Create item
    if (isCreateItem) {
      let itemObj = createItem(
        _this,
        itemCreated.type,
        itemCreated.imgKey,
        widthScreen * (465 + positionXIndex * 57),
        widthScreen * 175,
        itemCreated.depth
      );
      // console.log(itemObj);
      StorageValue.updateListItem({ itemObj, positionXIndex, itemCreated });
    }
  }
};

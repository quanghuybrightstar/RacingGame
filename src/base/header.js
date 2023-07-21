/* eslint-disable no-unused-vars */
import StorageValue from "../storage/StorageValue";
import { createTriangleHeal } from "./triangleHeal";
import { Constants } from "../constants/Constants";

export const createHeader = (_this, _game) => {
  let listCurrentHealElement = [];

  const headerContainer = _this.add.container();
  headerContainer.x = (_game.config.width * 1) / 15;
  headerContainer.y = (_game.config.height * 1) / 15;

  // Right Container
  const headerRightContainer = _this.add.container();
  headerRightContainer.x = headerContainer.x * 9;
  headerRightContainer.y = headerContainer.y;

  // Heal task bar
  const healTaskBar = _this.add.image(
    headerRightContainer.x * 1.38,
    headerContainer.y,
    "imgHealTaskbar"
  );
  healTaskBar.setDisplaySize(_game.config.width / 3.2, _game.config.height / 9);

  for (let i = 0; i < Constants.numTriangleHeal; i++) {
    let triangleHealElement;
    if (i % 2 === 0) {
      triangleHealElement = createTriangleHeal(
        _this,
        "imgTriangleDown",
        healTaskBar,
        healTaskBar.x * 0.85 + 20 * i,
        healTaskBar.y
      );
    } else {
      triangleHealElement = createTriangleHeal(
        _this,
        "imgTriangleUp",
        healTaskBar,
        healTaskBar.x * 0.85 + 20 * i,
        healTaskBar.y
      );
    }
    listCurrentHealElement.push(triangleHealElement);
  }
  console.log(listCurrentHealElement);
  StorageValue.updateListHealElement(listCurrentHealElement);
  StorageValue.updateListCurrentHealElement(listCurrentHealElement);
  // Heal count
  const healCount = _this.add.text(
    headerRightContainer.x + healTaskBar.width / 2.42,
    headerRightContainer.y * 0.75,
    `${StorageValue.healRemaining}%`,
    {
      font: "36px Roboto",
      fill: "#ffffff",
    }
  );
  healCount.setDepth(1);

  // Remain Diamond
  const remainDiamondContainer = _this.add.container();
  remainDiamondContainer.setPosition(
    headerRightContainer.x * 1.525,
    headerContainer.y * 2.2
  );

  const imgDiamond = _this.add.image(
    remainDiamondContainer.x,
    remainDiamondContainer.y,
    "imgDiamondBoard"
  );
  imgDiamond.setOrigin(0.5, 0.25);
  imgDiamond.setDisplaySize(_game.config.width / 7.8, _game.config.height / 11);

  const countDiamond = _this.add.text(
    remainDiamondContainer.x + imgDiamond.width / 8,
    remainDiamondContainer.y * 1.1,
    StorageValue.countDiamond,
    {
      fontSize: "42px Roboto",
      color: "#ffb366",
      stroke: "#ffb366",
      strokeThickness: 2,
      align: "center",
    }
  );
  countDiamond.setOrigin(0.5, 0.1);
  countDiamond.setDepth(1);

  // Left Container
  const headerLeftContainer = _this.add.container();
  headerLeftContainer.setPosition(
    headerContainer.x * 2.5,
    headerContainer.y * 0.95
  );

  const timeBoard = _this.add.image(
    headerLeftContainer.x,
    headerLeftContainer.y,
    "imgTimeBoard"
  );

  timeBoard.setDisplaySize(_game.config.width / 3.5, _game.config.height / 7);

  const timePlayText = _this.add.text(
    headerLeftContainer.x * 0.95,
    headerLeftContainer.y * 0.85,
    "",
    {
      font: "42px Roboto",
      fill: "#ffffff",
    }
  );
  timePlayText.setDepth(1);

  return {
    countDiamond,
    healTaskBar,
    healCount,
    timePlayText,
  };
};

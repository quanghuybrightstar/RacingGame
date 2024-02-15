/* eslint-disable no-unused-vars */
import StorageValue from "../storage/StorageValue";
import { createTriangleHeal } from "./triangleHeal";
import { Constants } from "../constants/Constants";
import SmartBaseScreen from "./SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const createHeader = (_this, _game) => {
  let listCurrentHealElement = [];

  const headerContainer = _this.add.container();
  headerContainer.x = (widthScreen * 1265) / 15;
  headerContainer.y = 120 * widthScreen;

  // Right Container
  const headerRightContainer = _this.add.container();
  headerRightContainer.x = headerContainer.x * 9;
  headerRightContainer.y = headerContainer.y;

  // for (let i = 0; i < Constants.numTriangleHeal; i++) {
  //   let triangleHealElement;
  //   if (i % 2 === 0) {
  //     triangleHealElement = createTriangleHeal(
  //       _this,
  //       "imgTriangleDown",
  //       healTaskBar,
  //       healTaskBar.x * 0.855 + i * widthScreen * 13,
  //       healTaskBar.y
  //     );
  //   } else {
  //     triangleHealElement = createTriangleHeal(
  //       _this,
  //       "imgTriangleUp",
  //       healTaskBar,
  //       healTaskBar.x * 0.855 + i * widthScreen * 13,
  //       healTaskBar.y
  //     );
  //   }
  //   listCurrentHealElement.push(triangleHealElement);
  // }
  // StorageValue.updateListHealElement(listCurrentHealElement);
  // StorageValue.updateListCurrentHealElement(listCurrentHealElement);

  // Heal Container
  const healContainer = _this.add.container();
  healContainer.setPosition(
    headerRightContainer.x * 1.41,
    headerContainer.y * 1.95
  );
  healContainer.setDepth(2);

  // Heal task bar
  const healTaskBar = _this.add.image(125 * widthScreen, 0, "imgHeartHeader");
  healTaskBar.setDisplaySize(80 * widthScreen, 80 * widthScreen);
  // Heal count
  const healCount = _this.add.text(0, 0, `${StorageValue.healRemaining}%`, {
    font: `${smFontSize * 52}px RadioSpaceBoldItalic`,
    color: "#fff",
    stroke: "#2E3192",
    // "#29FFE7"
    strokeThickness: smFontSize * 4,
    align: "right",
    resolution: 2,
    padding: 8 * widthScreen,
  });
  healCount.setDepth(2);
  healCount.setOrigin(0, 0.4);
  healCount.setPosition(65 * widthScreen - healCount.width, 0);

  healContainer.add(healTaskBar);
  healContainer.add(healCount);

  // Remain Diamond
  const remainDiamondContainer = _this.add.container();
  remainDiamondContainer.setPosition(
    headerRightContainer.x * 1.41,
    headerContainer.y * 0.75
  );

  const imgDiamond = _this.add.image(125 * widthScreen, 0, "imgDiamondHeader");
  imgDiamond.setOrigin(0.5, 0.25);
  imgDiamond.setDisplaySize(80 * widthScreen, 80 * widthScreen);

  const countDiamond = _this.add.text(0, 0, StorageValue.countDiamond || "", {
    font: `${smFontSize * 52}px RadioSpaceBoldItalic`,
    color: "#fff",
    stroke: "#2E3192",
    // "#29FFE7"
    strokeThickness: smFontSize * 4,
    align: "right",
    resolution: 2,
    padding: 8 * widthScreen,
  });
  countDiamond.setOrigin(0, 0.15);
  countDiamond.setDepth(1);
  if (countDiamond != 0) {
    countDiamond.setPosition(65 * widthScreen - countDiamond?.width, 0);
  }
  // countDiamond.setDisplaySize(100 * widthScree);
  remainDiamondContainer.add(imgDiamond);
  remainDiamondContainer.add(countDiamond);

  // Left Container
  const headerLeftContainer = _this.add.container();
  headerLeftContainer.setPosition(
    headerContainer.x * 0.8,
    headerContainer.y * 1.95
  );

  const timeBoard = _this.add.image(
    headerLeftContainer.x,
    headerLeftContainer.y,
    "imgTimeHeader"
  );

  timeBoard.setDisplaySize(80 * widthScreen, 80 * widthScreen);

  const timePlayText = _this.add.text(
    headerLeftContainer.x * 1.8,
    headerLeftContainer.y,
    "",
    {
      font: `${smFontSize * 52}px RadioSpaceBoldItalic`,
      color: "#fff",
      stroke: "#2E3192",
      // "#29FFE7"
      strokeThickness: smFontSize * 4,
      align: "left",
      resolution: 2,
      padding: 8 * widthScreen,
    }
  );
  timePlayText.setOrigin(0, 0.4);
  timePlayText.setDepth(1);

  return {
    countDiamond,
    healTaskBar,
    healCount,
    timePlayText,
  };
};

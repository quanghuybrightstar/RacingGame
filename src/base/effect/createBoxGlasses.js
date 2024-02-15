import SmartBaseScreen from "../SmartBaseScreen";
import StorageValue from "../../storage/StorageValue";
import { Constants } from "../../constants/Constants";
SmartBaseScreen.baseSetUp();

const widthScreen = SmartBaseScreen.smBaseWidth,
  smFontSize = SmartBaseScreen.smFontSize;

export const createBoxGlasses = (
  _this,
  _graphicsRace,
  _groupCarPlayer,
  keyImg
) => {
  let boxGlassesContainer = _this.add.container(
    -2 * widthScreen,
    -85 * widthScreen
  );

  // Img Effect
  let imgBoxGlasses = _this.add.sprite(0, 0 * 0.89, "imgGlasses");
  _graphicsRace.add(imgBoxGlasses);
  imgBoxGlasses.setDisplaySize(Constants.carWidth * 0.7, 70 * widthScreen);
  imgBoxGlasses.setDepth(0);
  imgBoxGlasses?.setPosition(0, 0);
  imgBoxGlasses.alpha = 0.65;

  // Text
  const contentBoxGlasses = _this.add.text(0, 0, "+", {
    font: `${smFontSize * 28}px RadioSpaceBoldItalic`,
    color: "#fff",
    stroke: "#2E3192",
    // "#29FFE7"
    strokeThickness: smFontSize * 4,
    align: "right",
    resolution: 2,
    padding: 8 * widthScreen,
  });

  // Image Content
  contentBoxGlasses.setOrigin(1, 0.45);

  const imgHeartBox = _this.add.image(0, 0, keyImg);
  imgHeartBox.setOrigin(0, 0.45);
  imgHeartBox.setDisplaySize(
    keyImg == "imgRedHeart" ? 30 * widthScreen : 27 * widthScreen,
    keyImg == "imgRedHeart" ? 24 * widthScreen : 27 * widthScreen
  );

  boxGlassesContainer.add([imgBoxGlasses, contentBoxGlasses, imgHeartBox]);
  _groupCarPlayer.add(boxGlassesContainer);

  StorageValue.updateListBoxGlasses(boxGlassesContainer);

  return imgBoxGlasses;
};

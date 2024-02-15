import SmartBaseScreen from "../SmartBaseScreen";
import StorageValue from "../../storage/StorageValue";

SmartBaseScreen.baseSetUp();

const widthScreen = SmartBaseScreen.smBaseWidth;

export const createAccident = (_this) => {
  const accidentEffect = _this.add.container(0, 0);
  accidentEffect.x = widthScreen * 632.5;
  accidentEffect.y = widthScreen * 356;
  accidentEffect.setSize(widthScreen * 1265, widthScreen * 712);
  accidentEffect.setDepth(99999);
  
  const bgAccidentImg = _this.add.sprite(0, 0, "bgAccident");
  bgAccidentImg.setDisplaySize(widthScreen * 1265, widthScreen * 712);
  bgAccidentImg.setAlpha(0.7);

  const glassesAccidentImg = _this.add.sprite(
    0,
    -30 * widthScreen,
    "imgGlassesAccident"
  );
  glassesAccidentImg.setDisplaySize(widthScreen * 1265, widthScreen * 712);

  accidentEffect.add([bgAccidentImg, glassesAccidentImg]);
  StorageValue.updateListAccident(accidentEffect);

  return accidentEffect;
};

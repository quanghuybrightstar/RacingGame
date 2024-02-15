import { Constants } from "../../constants/Constants";
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();

const widthScreen = SmartBaseScreen.smBaseWidth;

export const createBenefitEffect = (_this, _graphicsRace, _groupCarPlayer) => {
  // Img Effect
  let imgEffect = _this.add.image(0, 0 * 0.89, "imgEffect");
  _graphicsRace.add(imgEffect);
  imgEffect.setDisplaySize(Constants.carWidth * 0.9, Constants.carHeight * 0.8);
  imgEffect.setDepth(-999);
  imgEffect?.setPosition(-2 * widthScreen, -60 * widthScreen);
  _groupCarPlayer.add(imgEffect);
  _groupCarPlayer.sendToBack(imgEffect);

  StorageValue.updateListBenefitEffect(imgEffect);

  return imgEffect;
};

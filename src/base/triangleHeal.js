/* eslint-disable no-unused-vars */
import SmartBaseScreen from "./SmartBaseScreen";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

export const createTriangleHeal = (
  _this,
  _imgKey,
  _healTaskbar,
  positionX,
  positionY
) => {
  const triangleImg = _this.add.sprite(positionX, positionY, _imgKey);
  triangleImg.setDepth(2);
  triangleImg.setDisplaySize(widthScreen * 20, widthScreen * 15);

  return triangleImg;
};

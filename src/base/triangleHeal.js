/* eslint-disable no-unused-vars */
export const createTriangleHeal = (
  _this,
  _imgKey,
  _healTaskbar,
  positionX,
  positionY
) => {
  const triangleImg = _this.add.sprite(positionX, positionY, _imgKey);
  triangleImg.setDepth(2);
  triangleImg.setDisplaySize(_healTaskbar.width / 50, _healTaskbar.height / 9);

  return triangleImg;
};

/* eslint-disable no-unused-vars */
export const createLampRight = (_this, _graphicsRace) => {
  const imgLampRight = _this.add.image(0, 0, "imgLampRight");
  _graphicsRace?.add(imgLampRight);
  imgLampRight.setPosition(_graphicsRace.x * 6.7, _graphicsRace.y * 0);
  imgLampRight.setDisplaySize(18, 15);

  return imgLampRight;
};

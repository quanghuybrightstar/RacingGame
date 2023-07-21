/* eslint-disable no-unused-vars */
export const createLampLeft = (_this, _graphicsRace) => {
  const imgLampLeft = _this.add.image(0, 0, "imgLampLeft");
  _graphicsRace?.add(imgLampLeft);
  imgLampLeft.setPosition(_graphicsRace.x * 6.35, _graphicsRace.y * 0);
  imgLampLeft.setDisplaySize(18, 15);

  return imgLampLeft;
};

/* eslint-disable no-unused-vars */
import Phaser from "phaser";
import { Constants } from "../../constants/Constants";

export const createCarPlayer = (_this, x, y) => {
  let _car = _this.physics.add.sprite(x, y, "imgCarFrame1");

  _car.setDisplaySize(Constants.carWidth, Constants.carHeight);
  _car.setOrigin(0.5);

  _car.setSize(Constants.carWidth * 0.3, Constants.carHeight * 0.55);

  _car.setPosition(x, y);

  _car.setDepth(9999);

  return _car;
};

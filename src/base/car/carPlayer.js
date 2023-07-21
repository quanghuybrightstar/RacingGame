/* eslint-disable no-unused-vars */
import Phaser from "phaser";
import { Constants } from "../../constants/Constants";

export const createCarPlayer = (_this, x, y, _car) => {
  _car.setDisplaySize(Constants.carWidth, Constants.carHeight);
  _car.setOrigin(0.5);

  _car.setPosition(x, y);

  _car.setDepth(9999);
};

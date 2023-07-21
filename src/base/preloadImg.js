/* eslint-disable no-unused-vars */
import {
  IMG_BG,
  IMG_CAR_PLAYER,
  IMG_VELOCITY,
  IMG_WHEEL,
  IMG_DIAMOND,
  IMG_LAMP_LEFT,
  IMG_LAMP_RIGHT,
  IMG_CAR_2,
  IMG_CAR_3,
  IMG_GASOLINE,
  IMG_WRENCH,
  IMG_BARRIER,
  IMG_DIAMOND_BOARD,
  IMG_TIME_BOARD,
  IMG_TIME_INCREASE_BOARD,
  IMG_EFFECT,
  IMG_TRIANGLE_DOWN,
  IMG_TRIANGLE_UP,
  IMG_HEAL_TASKBAR,
  IMG_INSTRUCT_BOARD,
  IMG_SUMMARY_BOARD,
} from "../assets";

export const preloadImg = (_this) => {
  _this.load.image("imgBg", IMG_BG);

  // Car player
  _this.load.image("imgCarPlayer", IMG_CAR_PLAYER);

  _this.load.image("imgWheel", IMG_WHEEL);
  _this.load.image("imgVelocity", IMG_VELOCITY);

  // Lamp
  _this.load.image("imgLampLeft", IMG_LAMP_LEFT);
  _this.load.image("imgLampRight", IMG_LAMP_RIGHT);

  // Car
  _this.load.image("imgCar2", IMG_CAR_2);
  _this.load.image("imgCar3", IMG_CAR_3);

  // Item
  _this.load.image("imgDiamond", IMG_DIAMOND);
  _this.load.image("imgGasoline", IMG_GASOLINE);
  _this.load.image("imgWrench", IMG_WRENCH);
  _this.load.image("imgBarrier", IMG_BARRIER);

  _this.load.image("imgEffect", IMG_EFFECT);

  // Header
  _this.load.image("imgDiamondBoard", IMG_DIAMOND_BOARD);
  _this.load.image("imgTimeBoard", IMG_TIME_BOARD);
  _this.load.image("imgTimeIncreaseBoard", IMG_TIME_INCREASE_BOARD);
  _this.load.image("imgHealTaskbar", IMG_HEAL_TASKBAR);

  // triangle
  _this.load.image("imgTriangleDown", IMG_TRIANGLE_DOWN);
  _this.load.image("imgTriangleUp", IMG_TRIANGLE_UP);

  //Board
  _this.load.image("imgInstructBoard", IMG_INSTRUCT_BOARD);
  _this.load.image("imgSummaryBoard", IMG_SUMMARY_BOARD);
};

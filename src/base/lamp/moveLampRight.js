/* eslint-disable no-unused-vars */
import { tweensLamp } from "../animations/tweenAnims";

export const moveLampRight = (
  _this,
  _lamp,
  positionX,
  positionY,
  _scaleX,
  _scaleY,
  _graphicsRace
) => {
  setInterval(() => {
    // _lamp.setPosition(
    //   _graphicsRace.x * (7 + positionX),
    //   _graphicsRace.y * (1 + positionY)
    // );
    tweensLamp(
      _this,
      _lamp,
      _graphicsRace.x * (6.7 + positionX),
      _graphicsRace.y * (1 + positionY),
      _scaleX,
      _scaleY
    );
    // _lamp.setDisplaySize(sizeWidth, sizeHeight);
    if (positionY > -0.1) {
      positionY += 1;
      positionX += 6;
    } else if (positionY > -0.5 && positionY <= -0.1) {
      positionY += 0.45;
      positionX += 3.52;
    } else {
      positionX += 2;
      positionY += 0.6;
    }

    _scaleX += 0.22;
    _scaleY += 0.25;
  }, 600);
};

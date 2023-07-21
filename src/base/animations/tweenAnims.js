/* eslint-disable no-unused-vars */
import StorageValue from "../../storage/StorageValue";

const tweenAnims = (_this, _carPlayer, deltaX) => {
  StorageValue.updateCanMove(false);

  _this.tweens.add({
    targets: _carPlayer,
    x: _carPlayer.x + deltaX,
    duration: 150, // Duration of the animation in milliseconds
    ease: "Back",
    onComplete: () => {
      StorageValue.updateCanMove(true);
      StorageValue.updatePositionCarPlayer({
        x: _carPlayer.x,
        y: _carPlayer.y,
      });
    },
  });
};
const tweensLamp = (_this, _lamp, positionX, positionY, _scaleX, _scaleY) => {
  _this.tweens.add({
    targets: _lamp,
    x: positionX,
    y: positionY,
    scaleX: _scaleX,
    scaleY: _scaleY,
    duration: 600,
    ease: "Linear.easeInOut",
  });
};

const tweensItem = (
  _this,
  _item,
  positionX,
  positionY,
  _scaleX,
  _scaleY,
  itemInited,
  handleUpdate
) => {
  _this.tweens.add({
    targets: _item,
    x: positionX,
    y: positionY,
    scaleX: _scaleX,
    scaleY: _scaleY,
    duration: itemInited.velocity + 500,
    onUpdate: handleUpdate,
    ease: "Linear",
  });
};

export { tweenAnims, tweensItem, tweensLamp };

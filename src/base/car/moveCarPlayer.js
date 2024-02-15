/* eslint-disable no-unused-vars */
import { Game } from "phaser";
import { tweenAnims } from "../animations/tweenAnims";
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();

const widthScreen = SmartBaseScreen.smBaseWidth;

export const moveCarPlayer = (_this, _carPlayer, _game) => {
  // _this.input.keyboard.on("keydown", (event) => {
  //   switch (event.code) {
  //     case "ArrowLeft":
  //       // if (_carPlayer.x - 154 * widthScreen <= _game.config.width / 10) {
  //       //   StorageValue.updateCanMove(true);
  //       //   console.log("123");
  //       // } else {
  //       // tweenAnims(_this, _carPlayer, -widthScreen * 76);
  //       StorageValue.canMove &&
  //         // tweenAnims(_this, _carPlayer, -widthScreen * 150);
  //         _carPlayer.setVelocityX(-widthScreen * 150);
  //       // }
  //       break;
  //     case "ArrowRight":
  //       // if (
  //       //   _carPlayer.x + 154 * widthScreen >=
  //       //   _game.config.width - 154 * 2 * widthScreen
  //       // ) {
  //       //   StorageValue.updateCanMove(true);
  //       // } else {
  //       // tweenAnims(_this, _carPlayer, +widthScreen * 150);
  //       StorageValue.canMove && _carPlayer.setVelocityX(widthScreen * 150);
  //       // }
  //       break;
  //     default:
  //       _carPlayer.body.setVelocityX(0);
  //       break;
  //     // console.log(event.code);
  //   }
  // });

  let cursors = _this.input.keyboard.createCursorKeys();

  // switch (true) {
  //   // Move to the left.
  //   case cursors.left.isDown:
  //     if (_carPlayer.x - 154 * widthScreen <= _game.config.width / 10) {
  //       StorageValue.updateCanMove(true);
  //     } else {
  //       _carPlayer.body.setVelocityX(-widthScreen * 400);
  //     }
  //     break;
  //   // Move to the right.
  //   case cursors.right.isDown:
  //     if (
  //       _carPlayer.x + 154 * widthScreen >=
  //       _game.config.width - 154 * 2 * widthScreen
  //     ) {
  //       StorageValue.updateCanMove(true);
  //     } else {
  //       _carPlayer.body.setVelocityX(widthScreen * 400);
  //     }
  //     break;
  //   // Stand still.
  //   default:
  //     _carPlayer.body.setVelocityX(0);
  //     // this.anims.play(ANIMATION_TURN);
  //     break;
  // }

  switch (true) {
    // Move to the left.
    case cursors.left.isDown:
      if (_carPlayer.x - 152 * widthScreen <= _game.config.width / 10) {
        StorageValue.updateCanMove(true);
      } else {
        StorageValue.canMove &&
          tweenAnims(_this, _carPlayer, -widthScreen * 95);
      }
      break;
    // Move to the right.
    case cursors.right.isDown:
      if (
        _carPlayer.x + 152 * widthScreen >=
        _game.config.width - 152 * 2 * widthScreen
      ) {
        StorageValue.updateCanMove(true);
      } else {
        StorageValue.canMove &&
          tweenAnims(_this, _carPlayer, +widthScreen * 95);
      }
      break;
    // Stand still.
    default:
      // _carPlayer.body.setVelocityX(0);
      // this.anims.play(ANIMATION_TURN);
      break;
  }
};

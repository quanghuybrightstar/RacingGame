/* eslint-disable no-unused-vars */
import { Game } from "phaser";
import { tweenAnims } from "../animations/tweenAnims";
import StorageValue from "../../storage/StorageValue";

export const moveCarPlayer = (_this, _carPlayer, _game) => {
  // console.log(StorageValue.canMove);

  _this.input.keyboard.on("keydown", (event) => {
    switch (event.code) {
      case "ArrowLeft":
        if (_carPlayer.x - _game.config.width / 6 <= _game.config.width / 20) {
          StorageValue.updateCanMove(true);
        } else {
          StorageValue.canMove &&
            tweenAnims(_this, _carPlayer, -_game.config.width / 6, _game);
            
        }
        break;
      case "ArrowRight":
        if (_carPlayer.x + _game.config.width / 6 >= _game.config.width * 0.8) {
          StorageValue.updateCanMove(true);
        } else {
          StorageValue.canMove &&
            tweenAnims(_this, _carPlayer, +_game.config.width / 6, _game);
        }
        break;
      default:
        console.log(event.code);
    }
  });
};

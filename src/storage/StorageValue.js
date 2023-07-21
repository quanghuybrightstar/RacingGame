/* eslint-disable no-unused-vars */
class StorageValue {
  static countDiamond = 0;
  static canMove = true;
  static timePlay = 35;
  static isIncreaseTime = true;
  static healRemaining = 100;
  static isCollided = false;
  static positionCarPlayer = {};
  static listHealElement = [];
  static listCurrentHealElement = [];
  static typeCollider = "";
  static isCreateTriangleHeal = false;
  static listHealDestroy = [];
  static lengthHealElement = 20;

  static updateCountDiamond(count) {
    StorageValue.countDiamond += count;
  }

  static updateCanMove(boolean) {
    StorageValue.canMove = boolean;
  }

  static updateTimePlay(time) {
    StorageValue.timePlay += time;
  }

  static updateIsIncreaseTime(boolean) {
    StorageValue.isIncreaseTime = boolean;
  }

  static setTimePlay(time) {
    StorageValue.timePlay = time;
  }

  static updateHealRemaining(heal) {
    StorageValue.healRemaining += heal;
  }

  static updateIsCollided(boolean) {
    StorageValue.isCollided = boolean;
  }

  static updatePositionCarPlayer(position) {
    StorageValue.positionCarPlayer = position;
  }

  static updateListHealElement(list) {
    StorageValue.listHealElement = list;
  }

  static updateListCurrentHealElement(list) {
    StorageValue.listCurrentHealElement = list;
  }

  static updateTypeCollider(type) {
    StorageValue.typeCollider = type;
  }

  static updateIsCreateTriangleHeal(boolean) {
    StorageValue.isCreateTriangleHeal = boolean;
  }

  static destroyListTriangleHeal(_listTriangleHeal) {
    if (Array.isArray(_listTriangleHeal) && _listTriangleHeal.length !== 0) {
      _listTriangleHeal?.map((item) => {
        item.destroy();
      });
    }
  }

  static updateListHealDestroy(list) {
    StorageValue.listHealDestroy = list;
  }

  static updateLengthHealElement(length) {
    StorageValue.lengthHealElement = length;
  }

  static changeColorTriangle(_this, list) {
    list.map((item) => {
      item.setTint(0xe60000); // Set initial tint (red)

      // Create a tween for color change from red to white
      // _this.tweens.add({
      //   targets: item,
      //   tint: 0xffffff,
      //   duration: duration,
      //   yoyo: true,
      //   repeat: -1,
      // });
    });
  }

  static resetAll() {
    StorageValue.countDiamond = 0;
    StorageValue.canMove = true;
    StorageValue.timePlay = 35;
    StorageValue.isIncreaseTime = true;
    StorageValue.healRemaining = 100;
    StorageValue.isCollided = false;
    StorageValue.positionCarPlayer = {};
    StorageValue.listHealElement = [];
    StorageValue.listCurrentHealElement = [];
    StorageValue.typeCollider = "";
  }
}

export default StorageValue;

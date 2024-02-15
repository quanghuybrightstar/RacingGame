/* eslint-disable no-unused-vars */
class StorageValue {
  static countTickets = 0;
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
  static lengthHealElement = 20;
  static listInterval = [];
  static isGameOver = false;
  static isStartGame = false;
  static listItem = [];
  static listLampLeft = [];
  static listLampRight = [];
  static timeTotal = 0;
  static kValue = 1;
  static scaleValue = 1;
  static isCreateGift = true;
  static listLineCaro = [];
  static platformSelected =
    {
      id: "1648FFC89000000",
      name: "\u0110\u1ea5u tr\u01b0\u1eddng si\u00eau t\u1ed1c",
      type: "racing",
      category_id: "1648FFC89000001",
      description: null,
      status: 1,
      number_ticket: 0,
      required_ticket: 0,
    } || localStorage.getItem("platformSelected");

  static detailItem = [];
  static listAccident = [];
  static listBenefitEffect = [];
  static listBoxGlasses = [];
  static listLineRacer = [];
  static countLamps = 0;
  static listBanderol = [];
  static timeStaticItem = 9;
  static timeDynamicItem = 12;
  static isCreateItem = true;

  static updateDetailItem(detail) {
    StorageValue.detailItem = detail;
  }

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

  static updateLengthHealElement(length) {
    StorageValue.lengthHealElement = length;
  }

  static changeColorTriangle(_this, list) {
    list.map((item) => {
      item.setTint(0xe60000);
    });
  }

  static updateIsGameOver(boolean) {
    StorageValue.isGameOver = boolean;
  }

  static updateListInterval(list) {
    StorageValue.listInterval.push(list);
  }

  static clearAllInterval() {
    StorageValue.listInterval.map((item) => {
      clearInterval(item);
    });
  }

  static updateIsStartGame(boolean) {
    StorageValue.isStartGame = boolean;
  }

  static updateCountTickets(ticket) {
    StorageValue.countTickets += ticket;
  }

  static updateQuantityTickets(ticket) {
    StorageValue.countTickets = ticket;
  }

  static updateQuantityDiamonds(diamond) {
    StorageValue.countDiamond = diamond;
  }

  static updateListItem(item) {
    StorageValue.listItem.push(item);
  }

  // Update lamp
  static updateListLampLeft(lamp) {
    StorageValue.listLampLeft.push(lamp);
  }
  static updateListLampRight(lamp) {
    StorageValue.listLampRight.push(lamp);
  }

  static updateListLineCaro(lineCaro) {
    StorageValue.listLineCaro.push(lineCaro);
  }

  static updateTimeTotal(time) {
    StorageValue.timeTotal += time;
  }

  static updateKValue(k) {
    StorageValue.kValue += k;
  }

  static updateScaleValue(scale) {
    StorageValue.scaleValue += scale;
  }

  static updateIsCreateGift(boolean) {
    StorageValue.isCreateGift = boolean;
  }

  static updateArrayListItem(listArray) {
    StorageValue.listItem = listArray;
  }

  static updateListAccident(accident) {
    StorageValue.listAccident.push(accident);
  }

  static updateListBenefitEffect(effect) {
    StorageValue.listBenefitEffect.push(effect);
  }

  static updateListBoxGlasses(glasses) {
    StorageValue.listBoxGlasses.push(glasses);
  }

  static updateListLineRacer(lineRacer) {
    StorageValue.listLineRacer.push(lineRacer);
  }

  static updateCountLamps(count) {
    StorageValue.countLamps += count;
  }

  static updateListBanderol(banderol) {
    StorageValue.listBanderol.push(banderol);
  }

  static updateTimeStaticItem(time) {
    StorageValue.timeStaticItem = time;
  }

  static updateTimeDynamicItem(time) {
    StorageValue.timeDynamicItem = time;
  }

  static updateIsCreateItem(boolean) {
    StorageValue.isCreateItem = boolean;
  }

  static resetAll() {
    StorageValue.canMove = true;
    StorageValue.timePlay = 35;
    StorageValue.isIncreaseTime = true;
    StorageValue.healRemaining = 100;
    StorageValue.isCollided = false;
    StorageValue.positionCarPlayer = {};
    StorageValue.listHealElement = [];
    StorageValue.listCurrentHealElement = [];
    StorageValue.typeCollider = "";
    StorageValue.isCreateTriangleHeal = false;
    StorageValue.lengthHealElement = 20;
    StorageValue.isGameOver = false;
    StorageValue.isStartGame = false;
    StorageValue.listInterval = [];
    StorageValue.listItem = [];
    StorageValue.listLampLeft = [];
    StorageValue.listLampRight = [];
    StorageValue.timeTotal = 0;
    StorageValue.kValue = 1;
    StorageValue.scaleValue = 1;
    StorageValue.isCreateGift = true;
    StorageValue.detailItem = [];
    StorageValue.listLineCaro = [];
    StorageValue.listAccident = [];
    StorageValue.listBenefitEffect = [];
    StorageValue.listBoxGlasses = [];
    StorageValue.listLineRacer = [];
    StorageValue.countLamps = 0;
    StorageValue.listBanderol = [];

    StorageValue.timeDynamicItem = 12;
    StorageValue.timeStaticItem = 9;
    StorageValue.isCreateItem = true;
  }
}

export default StorageValue;

/* eslint-disable no-unused-vars */
import StorageValue from "../../storage/StorageValue";
import { TypeItem } from "../../constants/items/typeItem";
import { createTriangleHeal } from "../triangleHeal";
import SmartBaseScreen from "../SmartBaseScreen";
import {
  createAccident,
  createBenefitEffect,
  createBoxGlasses,
} from "../effect";
import { Constants } from "../../constants/Constants";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

// Method check collider between car player and item
export const collidedItem = (
  _this,
  _graphicsRace,
  _groupCarPlayer,
  healTaskBar,
  timerEvent,
  kValue,
  timeOut,
  delta,
  _soundGetItem,
  _soundCollision
) => {
  // let listHealElement = StorageValue.listHealElement;
  let listCurrentHealElement = StorageValue.listCurrentHealElement;

  // if (StorageValue.isCreateTriangleHeal) {
  //   StorageValue.destroyListTriangleHeal(listHealElement);

  //   listCurrentHealElement = [];

  //   const length = StorageValue.lengthHealElement;

  //   for (let i = 0; i < length; i++) {
  //     let triangleHealElement;
  //     if (i % 2 === 0) {
  //       triangleHealElement = createTriangleHeal(
  //         _this,
  //         "imgTriangleDown",
  //         healTaskBar,
  //         healTaskBar.x * 0.855 + i * widthScreen * 13,
  //         healTaskBar.y
  //       );
  //     } else {
  //       triangleHealElement = createTriangleHeal(
  //         _this,
  //         "imgTriangleUp",
  //         healTaskBar,
  //         healTaskBar.x * 0.855 + i * widthScreen * 13,
  //         healTaskBar.y
  //       );
  //     }
  //     listCurrentHealElement.push(triangleHealElement);
  //   }
  //   StorageValue.updateListCurrentHealElement(listCurrentHealElement);
  //   StorageValue.updateIsCreateTriangleHeal(false);
  // }
  let accidentEffect;
  let imgBenefitEffect;
  let imgBoxGlasses;

  // Update collided
  if (StorageValue.isCollided === true) {
    StorageValue.listBenefitEffect[0]?.destroy();
    let listDestroy = [];
    const lengthList = listCurrentHealElement.length;
    switch (StorageValue.typeCollider) {
      case TypeItem.DIAMOND:
        StorageValue.listAccident[0]?.removeAll({ destroyChild: true });
        StorageValue.listBoxGlasses[0]?.removeAll({ destroyChild: true });
        // console.log(StorageValue.listBoxGlasses);
        imgBenefitEffect = createBenefitEffect(
          _this,
          _graphicsRace,
          _groupCarPlayer
        );
        StorageValue.updateCountDiamond(1);
        StorageValue.updateIsCollided(false);
        _soundGetItem.play();
        break;
      case TypeItem.GASOLINE:
        StorageValue.listBoxGlasses[0]?.removeAll({ destroyChild: true });
        imgBenefitEffect = createBenefitEffect(
          _this,
          _graphicsRace,
          _groupCarPlayer
        );
        setTimeout(() => {
          imgBoxGlasses = createBoxGlasses(
            _this,
            _graphicsRace,
            _groupCarPlayer,
            "imgClock"
          );
        }, 10);

        StorageValue.updateIsCollided(false);
        _this.time.removeEvent(timerEvent);
        StorageValue.updateTimePlay(3);
        StorageValue.updateIsIncreaseTime(true);
        _soundGetItem.play();
        break;
      case TypeItem.WRENCH:
        StorageValue.listBoxGlasses[0]?.removeAll({ destroyChild: true });
        imgBenefitEffect = createBenefitEffect(
          _this,
          _graphicsRace,
          _groupCarPlayer
        );
        setTimeout(() => {
          imgBoxGlasses = createBoxGlasses(
            _this,
            _graphicsRace,
            _groupCarPlayer,
            "imgRedHeart"
          );
        }, 10);
        StorageValue.updateIsCollided(false);
        if (
          StorageValue.healRemaining < 100 &&
          StorageValue.lengthHealElement < 20
        ) {
          StorageValue.destroyListTriangleHeal(listCurrentHealElement);
          // console.log("length before " + StorageValue.lengthHealElement);
          StorageValue.updateLengthHealElement(
            StorageValue.lengthHealElement + 5
          );
          StorageValue.updateHealRemaining(25);
          StorageValue.updateIsCreateTriangleHeal(true);
        }
        _soundGetItem.play();
        break;
      case TypeItem.BARRIER:
        StorageValue.listAccident[0]?.removeAll({ destroyChild: true });
        accidentEffect = createAccident(_this);
        listDestroy = listCurrentHealElement.splice(lengthList - 5, 5);
        // console.log(listCurrentHealElement);
        StorageValue.updateIsCollided(false);
        StorageValue.updateLengthHealElement(listCurrentHealElement.length);

        StorageValue.changeColorTriangle(_this, listDestroy);

        setTimeout(() => {
          StorageValue.updateIsCreateTriangleHeal(true);
          StorageValue.destroyListTriangleHeal(listDestroy); // StorageValue.destroyListTriangleHeal(
          StorageValue.destroyListTriangleHeal(listCurrentHealElement);
        }, 1000 / kValue);

        StorageValue.updateHealRemaining(-25);

        StorageValue.updateListCurrentHealElement(listCurrentHealElement);
        _soundCollision.play();
        break;
      case TypeItem.CAR_COLLIDE:
        StorageValue.listAccident[0]?.removeAll({ destroyChild: true });
        accidentEffect = createAccident(_this);
        StorageValue.updateIsCollided(false);

        listDestroy = listCurrentHealElement.splice(lengthList - 10, 10);
        // console.log(listCurrentHealElement);
        StorageValue.updateLengthHealElement(listCurrentHealElement.length);

        StorageValue.changeColorTriangle(_this, listDestroy);
        setTimeout(() => {
          StorageValue.updateIsCreateTriangleHeal(true);
          StorageValue.destroyListTriangleHeal(listDestroy); // StorageValue.destroyListTriangleHeal(
          StorageValue.destroyListTriangleHeal(listCurrentHealElement);
        }, 1000 / kValue);

        StorageValue.updateHealRemaining(-50);
        StorageValue.updateListCurrentHealElement(listCurrentHealElement);
        _soundCollision.play();
        break;
      case TypeItem.GIFT:
        StorageValue.listAccident[0]?.removeAll({ destroyChild: true });
        StorageValue.listBoxGlasses[0]?.removeAll({ destroyChild: true });
        imgBenefitEffect = createBenefitEffect(
          _this,
          _graphicsRace,
          _groupCarPlayer
        );
        console.log("GIFT");
        StorageValue.updateIsCollided(false);
        _soundGetItem.play();
        break;
      default:
        break;
    }
    setTimeout(() => {
      StorageValue.updateIsCollided(false);
    }, 200);
  } else {
    StorageValue.listBenefitEffect.map((imgEffect) => {
      setTimeout(() => {
        imgEffect.destroy();
      }, 150);
    });

    StorageValue.listAccident.map((accident) =>
      setTimeout(() => {
        accident.destroy();
      }, 1000)
    );

    StorageValue.listBoxGlasses.map((glasses) =>
      setTimeout(() => {
        glasses.destroy();
      }, 1500)
    );
  }
};

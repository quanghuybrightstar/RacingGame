/* eslint-disable no-case-declarations */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Phaser from "phaser";
import React, { useState, useEffect } from "react";
import {
  preloadImg,
  createCarPlayer,
  createHeader,
  moveCarPlayer,
  createLampLeft,
  createLampRight,
  moveLampLeft,
  moveLampRight,
} from "../../base";
import StorageValue from "../../storage/StorageValue";
import { randomItem } from "../../base/items/randomItem";
import { Constants } from "../../constants/Constants";
import { createTriangleHeal } from "../../base/triangleHeal";
import { TypeItem } from "../../constants/items/typeItem";

const Race = () => {
  let countDiamond;
  let healTaskbar;

  useEffect(() => {
    let graphicsRace;
    let carPlayer;
    let scaleX = 0.35;
    let scaleY = 0.2;
    let lampLeft;
    let lampRight;
    let timePlayText;
    let timeCount;
    let imgEffect;
    let healCountText;

    let listHealElement;
    let listCurrentHealElement;

    let timerEvent;

    const config = {
      type: Phaser.AUTO,
      parent: "game",
      width: 1900,
      height: 1100,
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
          gravity: { y: 0 },
        },
      },
      scene: {
        preload() {
          preloadImg(this);
        },
        create() {
          timeCount = StorageValue.timePlay;
          listHealElement = StorageValue.listHealElement;
          listCurrentHealElement = StorageValue.listCurrentHealElement;
          // Background
          const backgroundImg = this.add.sprite(0, 0, "imgBg");
          backgroundImg.setDisplaySize(game.config.width, game.config.height);
          backgroundImg.setOrigin(0);

          // Header
          const header = createHeader(this, game, timeCount);
          countDiamond = header.countDiamond;
          healTaskbar = header.healTaskBar;
          timePlayText = header.timePlayText;
          healCountText = header.healCount;

          // Racing way
          graphicsRace = this.add.container();
          graphicsRace.x = (game.config.width * 1) / 15;
          graphicsRace.y = (game.config.height * 1) / 4;

          // this.physics.world.enable(graphicsRace);
          graphicsRace.setSize(game.config.width * 0.95, game.config.height);

          // create player
          carPlayer = this.physics.add.sprite(0, 0, "imgCarPlayer");
          createCarPlayer(
            this,
            graphicsRace.x * 6.5,
            graphicsRace.y * 2.4,
            carPlayer
          );
          graphicsRace.add(carPlayer);
          StorageValue.updatePositionCarPlayer({
            x: carPlayer.x,
            y: carPlayer.y,
          });
          moveCarPlayer(this, carPlayer, game);

          const itemContainer = this.add.container();
          // graphicsRace.add(itemContainer);
          itemContainer.setPosition(graphicsRace.x, graphicsRace.y);
          itemContainer.setSize(graphicsRace.width, graphicsRace.height);

          // Img Effect
          imgEffect = this.add.image(
            carPlayer.x,
            carPlayer.y * 0.89,
            "imgEffect"
          );
          graphicsRace.add(imgEffect);
          imgEffect.setDisplaySize(
            (Constants.carWidth * 2) / 3,
            Constants.carHeight
          );
          imgEffect.setDepth(0);
          imgEffect.setVisible(false);

          // create lamp
          setInterval(() => {
            lampLeft = createLampLeft(this, graphicsRace);
            lampRight = createLampRight(this, graphicsRace);

            moveLampLeft(
              this,
              lampLeft,
              0.7,
              -0.5,
              scaleX,
              scaleY,
              graphicsRace
            );
            moveLampRight(
              this,
              lampRight,
              0.7,
              -0.5,
              scaleX,
              scaleY,
              graphicsRace
            );
          }, 800);

          setInterval(() => {
            randomItem(this, itemContainer, carPlayer, graphicsRace);
          }, 800);
        },
        update() {
          countDiamond.setText(StorageValue.countDiamond);

          if (StorageValue.isIncreaseTime) {
            timeCount = StorageValue.timePlay;
            StorageValue.updateIsIncreaseTime(false);
            const padNumber = (number) => {
              return String(number).padStart(2, "0");
            };

            const updateTimePlay = () => {
              timeCount = StorageValue.timePlay;
              timeCount--;
              StorageValue.setTimePlay(timeCount);

              const minutes = Math.floor(timeCount / 60);
              const seconds = timeCount % 60;

              const formattedTime =
                padNumber(minutes) + ":" + padNumber(seconds);

              timePlayText.setText(formattedTime);

              // if (timeCount === 0) {
              //   this.scene.pause();
              // }
            };

            timerEvent = this.time.addEvent({
              delay: 1000, // 1 second
              callback: updateTimePlay,
              callbackScope: this,
              repeat: timeCount - 1, // Repeat countdownValue - 1 times (to account for the initial value)
            });
          }

          listHealElement = StorageValue.listHealElement;
          listCurrentHealElement = StorageValue.listCurrentHealElement;

          if (StorageValue.isCreateTriangleHeal) {
            StorageValue.destroyListTriangleHeal(listHealElement);

            listCurrentHealElement = [];

            const length = StorageValue.lengthHealElement;

            for (let i = 0; i < length; i++) {
              let triangleHealElement;
              if (i % 2 === 0) {
                triangleHealElement = createTriangleHeal(
                  this,
                  "imgTriangleDown",
                  healTaskbar,
                  healTaskbar.x * 0.85 + 20 * i,
                  healTaskbar.y
                );
              } else {
                triangleHealElement = createTriangleHeal(
                  this,
                  "imgTriangleUp",
                  healTaskbar,
                  healTaskbar.x * 0.85 + 20 * i,
                  healTaskbar.y
                );
              }
              listCurrentHealElement.push(triangleHealElement);
            }
            StorageValue.updateListCurrentHealElement(listCurrentHealElement);
            StorageValue.updateIsCreateTriangleHeal(false);
          }

          imgEffect.setPosition(
            StorageValue.positionCarPlayer.x,
            StorageValue.positionCarPlayer.y * 0.89
          );
          // Update collided
          if (StorageValue.isCollided === true) {
            imgEffect.setVisible(true);
            let listDestroy = [];
            const lengthList = listCurrentHealElement.length;
            switch (StorageValue.typeCollider) {
              case TypeItem.DIAMOND:
                StorageValue.updateCountDiamond(1);
                StorageValue.updateIsCollided(false);
                break;
              case TypeItem.GASOLINE:
                StorageValue.updateIsCollided(false);
                this.time.removeEvent(timerEvent);
                StorageValue.updateTimePlay(3);
                StorageValue.updateIsIncreaseTime(true);
                break;
              case TypeItem.WRENCH:
                StorageValue.updateIsCollided(false);
                // let healIncrease = 0;
                // let effectIncreaseHeal = setInterval(() => {
                //   if (
                //     StorageValue.healRemaining < 100 ||
                //     StorageValue.lengthHealElement < 20
                //   ) {
                //     if (healIncrease === 4) {
                //       clearInterval(effectIncreaseHeal);
                //       StorageValue.updateIsCreateTriangleHeal(false);
                //     }
                //     healIncrease += 1;
                //     StorageValue.updateLengthHealElement(
                //       StorageValue.lengthHealElement + healIncrease
                //     );

                //     StorageValue.updateIsCreateTriangleHeal(true);
                //   }
                // }, 200);
                if (
                  StorageValue.healRemaining <= 100 &&
                  StorageValue.lengthHealElement < 20
                ) {
                  StorageValue.updateLengthHealElement(
                    StorageValue.lengthHealElement + 5
                  );
                  StorageValue.updateHealRemaining(25);
                  StorageValue.updateIsCreateTriangleHeal(true);
                }

                break;
              case TypeItem.BARRIER:
                listDestroy = listCurrentHealElement.splice(lengthList - 5, 5);
                StorageValue.updateIsCollided(false);
                StorageValue.updateLengthHealElement(
                  listCurrentHealElement.length
                );

                StorageValue.changeColorTriangle(this, listDestroy);
                setTimeout(() => {
                  StorageValue.destroyListTriangleHeal(listDestroy);
                  // StorageValue.destroyListTriangleHeal(listCurrentHealElement);
                }, 1000);
                StorageValue.updateHealRemaining(-25);

                StorageValue.updateListCurrentHealElement(
                  listCurrentHealElement
                );

                StorageValue.updateIsCreateTriangleHeal(true);
                break;
              case TypeItem.CAR_COLLIDE:
                StorageValue.updateIsCollided(false);
                listDestroy = listCurrentHealElement.splice(
                  lengthList - 10,
                  10
                );
                StorageValue.updateLengthHealElement(
                  listCurrentHealElement.length
                );

                StorageValue.changeColorTriangle(this, listDestroy);
                setTimeout(() => {
                  StorageValue.destroyListTriangleHeal(listDestroy);
                  // StorageValue.destroyListTriangleHeal(listCurrentHealElement);
                }, 1000);

                StorageValue.updateHealRemaining(-50);
                StorageValue.updateListCurrentHealElement(
                  listCurrentHealElement
                );

                StorageValue.updateIsCreateTriangleHeal(true);
                break;
            }
            setTimeout(() => {
              StorageValue.updateIsCollided(false);
            }, 100);
          } else {
            imgEffect.setVisible(false);
          }

          if (StorageValue.healRemaining <= 0) {
            StorageValue.healRemaining = 0;
            this.scene.pause();
          } else if (StorageValue.healRemaining >= 100) {
            StorageValue.healRemaining = 100;
          }

          healCountText.setText(`${StorageValue.healRemaining}%`);
        },
      },
    };
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="race_container" />;
};

export default Race;

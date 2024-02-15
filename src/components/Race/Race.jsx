/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./Race.css";
import Phaser from "phaser";
import React, { useEffect } from "react";
import {
  preloadImg,
  createCarPlayer,
  createHeader,
  moveCarPlayer,
  createLampLeft,
  createLampRight,
  moveLampLeft,
  moveLampRight,
  randomNumberExcept,
  createBanderol,
  moveBanderol,
  moveLineRacer,
  createLineRacer,
  velocityRace,
  createAnimation,
  moveLineCaro,
  createLineCaro,
  createItem,
  moveItem,
  randomItem,
  collidedItem,
  instructBoard,
  summaryBoard,
} from "../../base";
import StorageValue from "../../storage/StorageValue";
import { Constants } from "../../constants/Constants";
import { TypeItem } from "../../constants/items/typeItem";
import SmartBaseScreen from "../../base/SmartBaseScreen";
import { raceLogic } from "./Race.logic";
import updateQuantityItem from "../../base/UpdateQuantityItem";

let mtime = 0;
let timeOut = 0;
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;

const Race = (props) => {
  let countDiamond;
  let healTaskBar;
  let { dataRace } = raceLogic(props);

  // console.log(dataRace);

  useEffect(() => {
    let graphicsRace;
    let groupCarPlayer;
    let carPlayer;
    let lampLeft;
    let lampRight;
    let timePlayText;
    let timeCount;
    let healCountText;

    let listHealElement;
    let listCurrentHealElement;

    let timerEvent;

    let lampInterval;
    let itemsInterval;
    let valueInterval;
    let lineCaroInterval;

    let summaryBoardContainer;

    let timeCreateGift;

    let isSaveResult = true;

    let lineCaro;
    let lineRacer;

    let banderol;

    let audioBg;

    let soundGetItem;

    let soundCollision;

    let timerEventCreateItems;

    let timerCreateLamp;

    let timerCreateLineRacer;

    let timerValueInterval;

    let timerCreateLineCaro;

    let carInstruct;

    const config = {
      type: Phaser.AUTO,
      parent: "race_container",
      width: widthScreen * 1270,
      height: widthScreen * 665,
      resolution: 3,
      // audio: {
      //   disabledWebAudio: true,
      // },
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
      scale: {
        mode: Phaser.Scale.FIT,
        parent: "race_container",
        resolution: 3,
        width: widthScreen * 1270,
        height: widthScreen * 665,
        // height: "100%",
      },
      scene: {
        preload() {
          preloadImg(this);
        },
        create() {
          // this.events.on(
          //   "hidden",
          //   function () {
          //     this.scene.pause();
          //   },
          //   this
          // );

          // this.events.on(
          //   "visible",
          //   function () {
          //     this.scene.pause();
          //   },
          //   this
          // );
          audioBg = this.sound.add("audioBg", { loop: true });
          audioBg.play();
          if (!this.sound.locked) {
            audioBg.play();
          } else {
            // wait for 'unlocked' to fire and then play
            this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
              audioBg.play();
            });
          }
          soundGetItem = this.sound.add("effectGetItems", { loop: false });
          soundCollision = this.sound.add("soundCollision", { loop: false });
          // if (game.sound.context.state === "suspended") {
          //   game.sound.context.resume();
          // }

          createAnimation(this);
          this.scale.resolution = 3;
          timeCount = StorageValue.timePlay;
          listHealElement = StorageValue.listHealElement;
          listCurrentHealElement = StorageValue.listCurrentHealElement;

          // Background
          const backgroundImg = this.add.sprite(0, 0, "imgBg");
          backgroundImg.setDisplaySize(widthScreen * 1265, widthScreen * 712);
          backgroundImg.setOrigin(0);

          // Accident Effect

          // Caro
          const caroImg = this.add.sprite(0, 0, "imgCaro");
          caroImg.setDisplaySize(widthScreen * 1265, widthScreen * 712);
          caroImg.setPosition(635 * widthScreen, 540 * widthScreen);
          caroImg.setDepth(0);

          // Race
          const raceImg = this.add.sprite(0, 0, "imgRace");
          raceImg.setDisplaySize(widthScreen * 957, widthScreen * 539);
          raceImg.setPosition(635 * widthScreen, 448 * widthScreen);
          raceImg.setDepth(1);

          // Create Line Racer
          for (var i = 1; i < 3; i++) {
            lineRacer = createLineRacer(
              this,
              1,
              widthScreen * (115 * i + 80),
              1.2 * i
            );
            lineRacer = createLineRacer(
              this,
              2,
              widthScreen * (115 * i + 80),
              1.2 * i
            );
            lineRacer = createLineRacer(
              this,
              3,
              widthScreen * (115 * i + 80),
              1.2 * i
            );
            lineRacer = createLineRacer(
              this,
              4,
              widthScreen * (115 * i + 80),
              1.2 * i
            );
          }

          // Line Caro
          lineCaro = createLineCaro(this, graphicsRace);

          // Racing way
          graphicsRace = this.add.container();
          graphicsRace.x = (widthScreen * 1265) / 15;
          graphicsRace.y = (widthScreen * 720) / 4;

          // this.physics.world.enable(graphicsRace);
          graphicsRace.setSize(widthScreen * 1265 * 0.95, widthScreen * 720);
          graphicsRace.setDepth(99);
          groupCarPlayer = this.add.container(
            graphicsRace.x * 6.5,
            graphicsRace.y * 2.15
          );
          graphicsRace.add(groupCarPlayer);

          // // Game over modal
          summaryBoardContainer = summaryBoard(this, game);

          if (!StorageValue.isStartGame) {
            instructBoard(this, game, summaryBoardContainer);
            // summaryBoard(this, game);
            carInstruct = createCarPlayer(
              this,
              graphicsRace.x * 6.5,
              graphicsRace.y * 2.15
            );
            graphicsRace.add(carInstruct);
            carInstruct.play("racing");
          } else {
            // create player
            carInstruct.destroy();
            carPlayer = createCarPlayer(this, 0, 0);
            // carPlayer.setDepth(9999);
            carPlayer.anims.play("racing");
            groupCarPlayer.add(carPlayer);

            // Create Button
            const btnToggle = this.add.image(0, 0, "imgPlay");
            btnToggle.setPosition(60 * widthScreen, 60 * widthScreen);
            btnToggle
              .setInteractive({ useHandCursor: true })
              .on("pointerup", () => {
                btnToggle.toggle = !btnToggle.toggle;
                if (btnToggle.toggle) {
                  btnToggle.setTexture("imgPause");
                  setTimeout(() => {
                    game.loop.sleep();
                  }, 10);
                } else {
                  btnToggle.setTexture("imgPlay");
                  game.loop.wake();
                }
              });
            btnToggle.setDisplaySize(81 * widthScreen, 81 * widthScreen);

            // Header
            const header = createHeader(this, game, timeCount);
            countDiamond = header.countDiamond;
            healTaskBar = header.healTaskBar;
            timePlayText = header.timePlayText;
            healCountText = header.healCount;

            // Line Racer Interval
            let lineRacerInterval = () => {
              lineRacer = createLineRacer(this, 1);
              lineRacer = createLineRacer(this, 2);
              lineRacer = createLineRacer(this, 3);
              lineRacer = createLineRacer(this, 4);
            };

            timerEventCreateItems = this.time.addEvent({
              delay: 350 / StorageValue.kValue,
              callback: () => randomItem(this, carPlayer, graphicsRace),
              callbackScope: this,
              loop: true,
            });

            timerCreateLamp = this.time.addEvent({
              delay: 1700 / StorageValue.kValue,
              callback: () => lampInterval(),
              callbackScope: this,
              loop: true,
            });

            timerCreateLineCaro = this.time.addEvent({
              delay: 200 / StorageValue.kValue,
              callback: () => createLineCaro(this, graphicsRace),
              callbackScope: this,
              loop: true,
            });

            timerCreateLineRacer = this.time.addEvent({
              delay: 1000 / StorageValue.kValue,
              callback: () => lineRacerInterval(),
              callbackScope: this,
              loop: true,
            });

            timerValueInterval = this.time.addEvent({
              delay: 5000,
              callback: () => valueInterval(),
              callbackScope: this,
              loop: true,
            });

            lampLeft = createLampLeft(this, graphicsRace);
            lampRight = createLampRight(this, graphicsRace);

            // Create Lamp
            lampInterval = () => {
              if (
                StorageValue.countLamps % 20 == 0 &&
                StorageValue.countLamps != 0
              ) {
                banderol = createBanderol(this, graphicsRace);
              } else {
                lampLeft = createLampLeft(this, graphicsRace);
                lampRight = createLampRight(this, graphicsRace);
              }
            };

            valueInterval = () => {
              StorageValue.updateKValue(0.25);
              StorageValue.updateScaleValue(0.5);
              StorageValue.updateTimeDynamicItem(
                StorageValue.timeDynamicItem -
                  StorageValue.timeDynamicItem * 0.1
              );
              StorageValue.updateTimeStaticItem(
                StorageValue.timeStaticItem - StorageValue.timeStaticItem * 0.1
              );
              timerEventCreateItems.delay = 350 / StorageValue.kValue;
              timerCreateLamp.delay = 1700 / StorageValue.kValue;
              timerCreateLineCaro.delay = 250 / StorageValue.kValue;
              timerCreateLineRacer.delay = 1000 / StorageValue.kValue;
            };
            // }

            timeCreateGift = Math.floor(Math.random() * (45 - 30 + 1) + 30);
            // timeCreateGift = 5;

            //
            document.addEventListener("visibilitychange", () => {
              if (document.hidden && game.scene.isActive()) {
                // The game's tab/window is hidden
                // Handle hidden state here

                game.scene.pause("default");
                this.scene.pause();
              } else if (btnToggle.texture.key != "imgPause") {
                // The game's tab/window is visible
                // Handle visible state here

                game.scene.resume("default");
                this.scene.resume();
              }
            });
          }
        },

        update(time, delta) {
          if (StorageValue.isStartGame) {
            moveCarPlayer(this, groupCarPlayer, game);
            mtime = mtime + delta;

            if (Math.round(mtime / 1000) == timeCreateGift) {
              // Render gift item at a random time
              if (StorageValue.isCreateGift) {
                let positionIndex = Math.floor(Math.random() * (5 - 1 + 1) + 1);

                StorageValue.listItem.forEach((item) => {
                  if (
                    item.positionXIndex === positionIndex &&
                    Math.abs(item.itemObj.y - 175 * widthScreen) <
                      30 * widthScreen
                  ) {
                    positionIndex = randomNumberExcept(5, 1, positionIndex);
                  }
                });

                const giftItem = createItem(
                  this,
                  TypeItem.GIFT,
                  "imgGift",
                  widthScreen * (465 + positionIndex * 57),
                  widthScreen * 175,
                  1
                );

                StorageValue.updateListItem({
                  itemObj: giftItem,
                  positionXIndex: positionIndex,
                  itemCreated: {
                    type: TypeItem.GIFT,
                    imgKey: "imgGift",
                    velocity: 1.8,
                    time: StorageValue.timeStaticItem,
                  },
                });

                StorageValue.updateIsCreateGift(false);
              }
            }
            countDiamond?.setText(StorageValue.countDiamond);

            // Count down time play
            if (StorageValue.isIncreaseTime) {
              timeCount = StorageValue.timePlay;
              StorageValue.updateIsIncreaseTime(false);
              const padNumber = (number) => {
                return String(number).padStart(2, "0");
              };

              const updateTimePlay = () => {
                // timeCount = StorageValue.timePlay;
                StorageValue.setTimePlay(timeCount);
                timeCount--;

                const minutes = Math.floor(timeCount / 60);
                const seconds = timeCount % 60;

                const formattedTime =
                  padNumber(minutes) + ":" + padNumber(seconds);

                timePlayText?.setText(formattedTime);

                if (timeCount === 0) {
                  StorageValue.clearAllInterval();
                  StorageValue.updateIsGameOver(true);
                  this.input.keyboard.enabled = false;
                  mtime = 0;
                  timeOut = 0;
                  this.time.removeEvent();
                  StorageValue.listAccident.map((accident) =>
                    accident.destroy()
                  );

                  setTimeout(() => {
                    game.loop.sleep();
                  }, 5);
                  // this.scene.pause();
                }
              };
              timerEvent = this.time.addEvent({
                delay: 1000, // 1 second
                callback: updateTimePlay,
                callbackScope: this,
                repeat: timeCount - 1, // Repeat countdownValue - 1 times (to account for the initial value)
              });
            }

            // Lamp motivation
            if (StorageValue.listLampLeft && StorageValue.listLampRight) {
              StorageValue.listLampLeft.forEach((lamp) => {
                moveLampLeft(this, lamp, lamp.y / widthScreen);

                if (lamp.y > 420 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.11
                  );
                } else if (lamp.y > 390 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.145
                  );
                } else if (lamp.y > 350 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.18
                  );
                } else if (lamp.y > 325 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.21
                  );
                } else if (lamp.y > 300 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.24
                  );
                } else if (lamp.y > 275 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.28
                  );
                } else if (lamp.y > 250 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.32
                  );
                } else if (lamp.y > 225 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.36
                  );
                } else if (lamp.y > 200 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.4
                  );
                } else if (lamp.y > 150 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.45
                  );
                } else {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer1,
                    delta,
                    0.58
                  );
                }

                lamp.scaleX +=
                  (0.0004 + 0.00015 * StorageValue.scaleValue) * widthScreen;
                lamp.scaleY +=
                  (0.00101 + 0.00036 * StorageValue.scaleValue) * widthScreen;

                if (widthScreen * lamp.y > widthScreen * 1000) {
                  lamp.destroy();
                }
              });

              // List Lamp Right
              StorageValue.listLampRight.forEach((lamp) => {
                moveLampRight(this, lamp, lamp.y / widthScreen);
                if (lamp.y > 420 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.11
                  );
                } else if (lamp.y > 390 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.145
                  );
                } else if (lamp.y > 350 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.18
                  );
                } else if (lamp.y > 325 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.21
                  );
                } else if (lamp.y > 300 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.24
                  );
                } else if (lamp.y > 275 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.28
                  );
                } else if (lamp.y > 250 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.32
                  );
                } else if (lamp.y > 225 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.36
                  );
                } else if (lamp.y > 200 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.4
                  );
                } else if (lamp.y > 150 * widthScreen) {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.45
                  );
                } else {
                  lamp.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer1,
                    delta,
                    0.58
                  );
                }

                lamp.scaleX +=
                  (0.0004 + 0.00015 * StorageValue.scaleValue) * widthScreen;
                lamp.scaleY +=
                  (0.00101 + 0.00036 * StorageValue.scaleValue) * widthScreen;

                if (widthScreen * lamp.y > widthScreen * 1000) {
                  lamp.destroy();
                }
              });
            }

            // Banderol motivation
            if (StorageValue.listBanderol) {
              StorageValue.listBanderol.forEach((banderolItem) => {
                moveBanderol(this, banderolItem, banderolItem?.y / widthScreen);

                if (banderolItem.y > 420 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.1
                  );
                  banderolItem.scaleX +=
                    (0.0038 + 0.0026 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.0042 + 0.0021 * StorageValue.scaleValue) * widthScreen;
                } else if (banderolItem.y > 390 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.12
                  );
                  banderolItem.scaleX +=
                    (0.00325 + 0.00218 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.0042 + 0.0018 * StorageValue.scaleValue) * widthScreen;
                } else if (banderolItem.y > 350 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.16
                  );
                  banderolItem.scaleX +=
                    (0.00275 + 0.0019 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.0035 + 0.0017 * StorageValue.scaleValue) * widthScreen;
                } else if (banderolItem.y > 300 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.19
                  );
                  banderolItem.scaleX +=
                    (0.0022 + 0.0016 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.003 + 0.0014 * StorageValue.scaleValue) * widthScreen;
                } else if (banderolItem.y > 275 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.25
                  );
                  banderolItem.scaleX +=
                    (0.00195 + 0.0015 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.0026 + 0.00125 * StorageValue.scaleValue) * widthScreen;
                } else if (banderolItem.y > 250 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.3
                  );
                  banderolItem.scaleX +=
                    (0.00152 + 0.0014 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.0019 + 0.0012 * StorageValue.scaleValue) * widthScreen;
                } else if (banderolItem.y > 225 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.36
                  );
                  banderolItem.scaleX +=
                    (0.00123 + 0.00125 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.0016 + 0.00124 * StorageValue.scaleValue) * widthScreen;
                } else if (banderolItem.y > 200 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.4
                  );
                  banderolItem.scaleX +=
                    (0.00102 + 0.0009 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.0015 + 0.00122 * StorageValue.scaleValue) * widthScreen;
                } else if (banderolItem.y > 150 * widthScreen) {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.45
                  );
                  banderolItem.scaleX +=
                    (0.00065 + 0.0009 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.002 + 0.0012 * StorageValue.scaleValue) * widthScreen;
                } else {
                  banderolItem.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer1,
                    delta,
                    0.58
                  );
                  banderolItem.scaleX +=
                    (0.0004 + 0.00059 * StorageValue.scaleValue) * widthScreen;
                  banderolItem.scaleY +=
                    (0.001 + 0.001 * StorageValue.scaleValue) * widthScreen;
                }

                if (widthScreen * banderolItem.y > widthScreen * 1000) {
                  banderolItem.destroy();
                }
              });
            }

            // Line Caro
            if (StorageValue.listLineCaro) {
              StorageValue.listLineCaro.forEach((lineCaro) => {
                moveLineCaro(this, lineCaro, lineCaro.y / widthScreen);
                if (lineCaro.y > 390 * widthScreen) {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.11
                  );
                } else if (lineCaro.y > 350 * widthScreen) {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.15
                  );
                } else if (lineCaro.y > 300 * widthScreen) {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.19
                  );
                } else if (lineCaro.y > 275 * widthScreen) {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.25
                  );
                } else if (lineCaro.y > 250 * widthScreen) {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.3
                  );
                } else if (lineCaro.y > 225 * widthScreen) {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.36
                  );
                } else if (lineCaro.y > 200 * widthScreen) {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.4
                  );
                } else if (lineCaro.y > 150 * widthScreen) {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.45
                  );
                } else {
                  lineCaro.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer1,
                    delta,
                    0.58
                  );
                }

                if (widthScreen * lineCaro.y > widthScreen * 1000) {
                  lineCaro.destroy();
                }
              });
            }

            // Line Racer
            if (StorageValue.listLineRacer) {
              StorageValue.listLineRacer.forEach((item) => {
                const { lineRacer, positionXIndex } = item;
                moveLineRacer(
                  this,
                  lineRacer,
                  positionXIndex,
                  lineRacer.y / widthScreen
                );
                if (lineRacer.y > 420 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.12
                  );
                  lineRacer.scaleX +=
                    (0.0037 + 0.00075 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.004 + 0.0013 * StorageValue.scaleValue) * widthScreen;
                } else if (lineRacer.y > 390 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.15
                  );
                  lineRacer.scaleX +=
                    (0.0037 + 0.00075 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.004 + 0.0013 * StorageValue.scaleValue) * widthScreen;
                } else if (lineRacer.y > 350 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.18
                  );
                  lineRacer.scaleX +=
                    (0.0032 + 0.0007 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.0036 + 0.00095 * StorageValue.scaleValue) * widthScreen;
                } else if (lineRacer.y > 325 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.21
                  );
                  lineRacer.scaleX +=
                    (0.0031 + 0.0007 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.0034 + 0.00095 * StorageValue.scaleValue) * widthScreen;
                } else if (lineRacer.y > 300 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.25
                  );
                  lineRacer.scaleX +=
                    (0.003 + 0.0007 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.0032 + 0.00095 * StorageValue.scaleValue) * widthScreen;
                } else if (lineRacer.y > 275 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.29
                  );
                  lineRacer.scaleX +=
                    (0.0028 + 0.00065 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.003 + 0.00085 * StorageValue.scaleValue) * widthScreen;
                } else if (lineRacer.y > 250 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.33
                  );
                  lineRacer.scaleX +=
                    (0.0024 + 0.00065 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.0027 + 0.00085 * StorageValue.scaleValue) * widthScreen;
                } else if (lineRacer.y > 225 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.36
                  );
                  lineRacer.scaleX +=
                    (0.002 + 0.00065 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.0023 + 0.00085 * StorageValue.scaleValue) * widthScreen;
                } else if (lineRacer.y > 200 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.42
                  );
                } else if (lineRacer.y > 150 * widthScreen) {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer2,
                    delta,
                    0.45
                  );
                  lineRacer.scaleX +=
                    (0.001 + 0.0006 * StorageValue.scaleValue) * widthScreen;
                  lineRacer.scaleY +=
                    (0.0015 + 0.0008 * StorageValue.scaleValue) * widthScreen;
                } else {
                  lineRacer.y += velocityRace(
                    StorageValue.timeStaticItem,
                    Constants.distanceRacer1,
                    delta,
                    0.58
                  );
                }

                // lineRacer.y += 0.5;
                if (widthScreen * lineRacer.y > widthScreen * 1000) {
                  lineRacer.destroy();
                }
              });
            }

            // Motivation Items
            if (StorageValue.listItem) {
              // Render list item and move them
              StorageValue.listItem.forEach((item) => {
                const { itemObj, positionXIndex, itemCreated } = item;

                moveItem(
                  this,
                  itemObj,
                  itemObj.y / widthScreen,
                  carPlayer,
                  positionXIndex
                );

                switch (true) {
                  case itemObj.y > 500 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.1
                    );
                    itemObj.scaleX +=
                      (0.0016 + 0.00054 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.0016 + 0.00054 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 450 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.12
                    );
                    itemObj.scaleX +=
                      (0.0014 + 0.000525 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.0014 + 0.000525 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 425 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.13
                    );
                    itemObj.scaleX +=
                      (0.00115 + 0.000515 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.00115 + 0.000515 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 400 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.15
                    );
                    itemObj.scaleX +=
                      (0.001 + 0.0005 * StorageValue.scaleValue) * widthScreen;
                    itemObj.scaleY +=
                      (0.001 + 0.0005 * StorageValue.scaleValue) * widthScreen;
                    break;
                  case itemObj.y > 375 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.18
                    );
                    itemObj.scaleX +=
                      (0.00085 + 0.000492 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.00085 + 0.000492 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 350 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.2
                    );
                    itemObj.scaleX +=
                      (0.0007 + 0.00048 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.0007 + 0.00048 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 325 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.23
                    );
                    itemObj.scaleX +=
                      (0.0006 + 0.000465 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.0006 + 0.000465 * StorageValue.scaleValue) *
                      widthScreen;
                    break;

                  case itemObj.y > 300 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.275
                    );
                    itemObj.scaleX +=
                      (0.0005 + 0.000448 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.0005 + 0.000448 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 275 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.3
                    );
                    itemObj.scaleX +=
                      (0.000445 + 0.000425 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.000445 + 0.000425 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 250 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.33
                    );
                    itemObj.scaleX +=
                      (0.00038 + 0.0004 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.00038 + 0.0004 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 225 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.36
                    );
                    itemObj.scaleX +=
                      (0.00028 + 0.00038 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.00028 + 0.00038 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 200 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.38
                    );
                    itemObj.scaleX +=
                      (0.00018 + 0.00035 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.00018 + 0.00035 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  case itemObj.y > 150 * widthScreen:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer2,
                      delta,
                      0.43
                    );
                    itemObj.scaleX +=
                      (0.00012 + 0.0003 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.00012 + 0.0003 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                  default:
                    itemObj.y += velocityRace(
                      itemCreated.type == TypeItem.CAR_COLLIDE
                        ? StorageValue.timeDynamicItem
                        : StorageValue.timeStaticItem,
                      Constants.distanceRacer1,
                      delta,
                      0.58
                    );
                    itemObj.scaleX +=
                      (0.0001 + 0.00025 * StorageValue.scaleValue) *
                      widthScreen;
                    itemObj.scaleY +=
                      (0.0001 + 0.00025 * StorageValue.scaleValue) *
                      widthScreen;
                    break;
                }

                if (itemObj.y >= widthScreen * 720) {
                  const listItemFilter = StorageValue.listItem.filter(
                    (item) => item.itemObj.name !== itemObj.name
                  );
                  itemObj.destroy();
                  StorageValue.updateArrayListItem(listItemFilter);
                }

                this.physics.add.collider(carPlayer, itemObj, function () {
                  StorageValue.updateIsCollided(true);
                  StorageValue.updateTypeCollider(itemCreated.type);
                  itemObj.destroy();
                });
              });
            }

            // Check colllider item
            collidedItem(
              this,
              graphicsRace,
              groupCarPlayer,
              healTaskBar,
              timerEvent,
              StorageValue.kValue,
              timeOut,
              delta,
              soundGetItem,
              soundCollision
            );

            // Heal remaining update
            if (StorageValue.healRemaining <= 0) {
              StorageValue.healRemaining = 0;
              StorageValue.clearAllInterval();
              StorageValue.updateIsGameOver(true);
              this.input.keyboard.enabled = false;
              mtime = 0;
              timeOut = 0;
              timeCount = 1;
              this.time.removeEvent();
              setTimeout(() => {
                game.loop.sleep();
              }, 5);
              StorageValue.listAccident.map((accident) => accident.destroy());
              // this.scene.pause();
            } else if (StorageValue.healRemaining >= 100) {
              StorageValue.healRemaining = 100;
            }

            healCountText?.setText(`${StorageValue.healRemaining}%`);

            // render game over modal
            if (StorageValue.isGameOver) {
              if (isSaveResult) {
                const platformSelected = StorageValue.platformSelected;

                const detailItemDiamond = StorageValue.detailItem.filter(
                  (item) => item.item_category == "diamond"
                );
                const item_result = StorageValue.detailItem.filter(
                  (item) => item.item_category != "diamond"
                );

                // console.log(StorageValue.countDiamond);
                detailItemDiamond[0] = {
                  ...detailItemDiamond[0],
                  quantity_available: StorageValue.countDiamond,
                };

                item_result.push(detailItemDiamond[0]);
                StorageValue.updateDetailItem(item_result);

                const body = {
                  platform_id: platformSelected.id,
                  platform_category: platformSelected.type,
                  item_result: JSON.stringify(item_result),
                  type: "playing",
                };

                const result = updateQuantityItem(body);

                isSaveResult = false;
              }
              StorageValue.updateQuantityDiamonds(StorageValue.countDiamond);
              summaryBoardContainer
                ?.getAt(1)
                ?.getAt(1)
                .setText(`+ ${StorageValue.countDiamond}`);
              summaryBoardContainer?.setVisible(true);
              StorageValue.updateIsGameOver(false);
            }
          }
        },
      },

      // },
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="race_container" />;
};

export default Race;

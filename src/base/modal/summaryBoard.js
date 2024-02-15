/* eslint-disable no-unused-vars */
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";
import { useEffect } from "react";
import updateQuantityItem from "../UpdateQuantityItem";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const summaryBoard = (_this, _game) => {
  const summaryBoardContainer = _this.add.container();
  summaryBoardContainer.setSize(widthScreen * 1265, widthScreen * 675);
  summaryBoardContainer.setPosition(0, 0);
  summaryBoardContainer.setDepth(99999);

  const summaryBoard = _this.add.sprite(0, 0, "imgBoard");
  summaryBoard.setDisplaySize(widthScreen * 1265, widthScreen * 675);
  summaryBoard.setOrigin(0);
  summaryBoard.setVisible(true);
  summaryBoard.setDepth(10);

  // Diamond
  const diamondContainer = _this.add.container();
  diamondContainer.setSize(summaryBoard.width / 12, summaryBoard.height / 17);
  diamondContainer.setPosition(
    summaryBoard.width / 1.9,
    summaryBoard.height / 2.2
  );
  diamondContainer.setDepth(15);

  const imgDiamond = _this.add.image(0, 0, "imgDiamondSummary");
  imgDiamond.setDisplaySize(widthScreen * 100, widthScreen * 100);
  diamondContainer.add(imgDiamond);

  const diamondRemaining = _this.add.text(
    widthScreen * 35,
    0,
    `+${StorageValue.countDiamond}`,
    {
      font: `${smFontSize * 62}px RadioSpaceBoldItalic`,
      color: "#FCEE21",
      stroke: "#FCEE21",
      strokeThickness: smFontSize * 2,
      align: "center",
      padding: 10 * widthScreen,
      resolution: 2,
    }
  );
  diamondRemaining.setOrigin(0, 0.35);
  diamondContainer.add(diamondRemaining);

  // Ticket remaining
  const ticketsContainer = _this.add.container();
  ticketsContainer.setSize(summaryBoard.width / 10, summaryBoard.height / 17);
  ticketsContainer.setPosition(
    summaryBoard.width / 2.1,
    summaryBoard.height / 1.42
  );
  ticketsContainer.setDepth(15);

  const ticketsText = _this.add.text(0, 0, "Bạn đang sử hữu", {
    font: `${smFontSize * 26}px JuraMedium`,
    color: "#fff",
    shadow: {
      offsetX: smFontSize * 1,
      offsetY: smFontSize * 1,
      color: "#000F3A",
      blur: smFontSize * 1,
      // stroke: true,
      // fill: true,
    },
    align: "center",
    resolution: 2,
  });

  ticketsText.setOrigin(0, 0.3);
  ticketsContainer.add(ticketsText);

  const ticketsRemaining = _this.add.text(
    ticketsText.x + ticketsText.width + 12 * widthScreen,
    0,
    `${StorageValue.countTickets} vé`,
    {
      font: `${smFontSize * 26}px JuraMedium`,
      color: "#FCEE21",
      shadow: {
        offsetX: smFontSize * 1,
        offsetY: smFontSize * 1,
        color: "#000F3A",
        blur: smFontSize * 1,
        // stroke: true,
        fill: true,
      },
      align: "center",
      resolution: 2,
    }
  );

  ticketsRemaining.setOrigin(0, 0.35);
  ticketsContainer.add(ticketsRemaining);

  const imgTickets = _this.add.image(
    ticketsRemaining.x + ticketsRemaining.width + 50 * widthScreen,
    0,
    "imgTickets"
  );
  imgTickets.setDisplaySize(widthScreen * 80, widthScreen * 80);
  ticketsContainer.add(imgTickets);

  // Back button
  const backBtnContainer = _this.add.container();
  backBtnContainer.setSize(widthScreen * 170, widthScreen * 70);
  backBtnContainer.setPosition(widthScreen * 500, widthScreen * 495);
  backBtnContainer.setDepth(15);

  const backBtn = _this.add.image(0, 0, "imgButton");
  backBtn.setDisplaySize(backBtnContainer.width, backBtnContainer.height);
  backBtnContainer.add(backBtn);

  const backText = _this.add.text(0, 0, "Trở về", {
    font: `${smFontSize * 26}px JuraMedium`,
    color: "#1B1464",
    stroke: "#2E3192",
    strokeThickness: smFontSize * 1,
    align: "center",
    resolution: 2,
  });
  backText.setOrigin(0.5);
  backBtnContainer.add(backText);
  backBtnContainer
    .setInteractive({ useHandCursor: true })
    .on("pointerup", () => {});

  // Containue button
  const continueBtnContainer = _this.add.container();
  continueBtnContainer.setSize(widthScreen * 170, widthScreen * 70);
  continueBtnContainer.setPosition(widthScreen * 780, widthScreen * 495);
  continueBtnContainer.setDepth(15);

  const continueBtn = _this.add.image(0, 0, "imgButton");
  continueBtn.setDisplaySize(
    continueBtnContainer.width,
    continueBtnContainer.height
  );
  continueBtnContainer.add(continueBtn);

  const continueText = _this.add.text(0, 0, "Tiếp tục", {
    font: `${smFontSize * 26}px JuraMedium`,
    color: "#1B1464",
    stroke: "#2E3192",
    strokeThickness: smFontSize * 1,
    align: "center",
    resolution: 2,
  });
  continueText.setOrigin(0.5);
  continueBtnContainer.add(continueText);

  continueBtnContainer.setInteractive({ useHandCursor: true });
  continueBtnContainer.on("pointerup", () => {
    // summaryBoardContainer.destroy();
    if (StorageValue.countTickets > 0) {
      const platformSelected = StorageValue.platformSelected;

      const detailItemTicket = StorageValue.detailItem.filter(
        (item) => item.item_category == "ticket"
      );

      const item_result = StorageValue.detailItem.filter(
        (item) => item.item_category != "ticket"
      );
      // console.log(StorageValue.countTicket);
      detailItemTicket[0] = {
        ...detailItemTicket[0],
        quantity_available: StorageValue.countTicket - 1,
      };
      item_result.push(detailItemTicket[0]);
      StorageValue.updateDetailItem(item_result);

      const body = {
        platform_id: platformSelected.id,
        platform_category: platformSelected.type,
        item_result: JSON.stringify(item_result),
        type: "playing",
      };

      const result = updateQuantityItem(body);

      // console.log("continue");
      StorageValue.updateCountTickets(-1);
      StorageValue.resetAll();
      _this.scene.stop();
      _this.scene.restart();
      _this.input.keyboard.enabled = true;
    } else {
      // continueBtnContainer.disableInteractive();
    }
  });

  summaryBoardContainer.add([
    summaryBoard,
    diamondContainer,
    ticketsContainer,
    backBtnContainer,
    continueBtnContainer,
  ]);

  summaryBoardContainer.setVisible(false);

  return summaryBoardContainer;
};

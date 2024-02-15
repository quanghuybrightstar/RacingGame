/* eslint-disable no-unused-vars */
import StorageValue from "../../storage/StorageValue";
import SmartBaseScreen from "../SmartBaseScreen";

SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
const smFontSize = SmartBaseScreen.smFontSize;

export const instructBoard = (_this, _game, _summaryBoardContainer) => {
  // Instruct Container
  const instructBoardContainer = _this.add.container();
  instructBoardContainer.setSize(widthScreen * 1265, widthScreen * 675);
  instructBoardContainer.setPosition(0, 0);
  instructBoardContainer.setDepth(99999);

  // Instruct board
  const instructBoard = _this.add.sprite(0, 0, "imgBoard");
  instructBoard.setDisplaySize(widthScreen * 1265, widthScreen * 675);
  instructBoard.setOrigin(0);
  instructBoard.setDepth(10);

  const imgPS5 = _this.add.image(
    widthScreen * 350,
    widthScreen * 200,
    "imgPS5"
  );
  imgPS5.setDisplaySize(widthScreen * 70, widthScreen * 45);
  imgPS5.setDepth(15);

  const instructTitle = _this.add.text(
    widthScreen * 400,
    widthScreen * 205,
    "Hướng dẫn",
    {
      font: `${smFontSize * 32}px JuraMedium`,
      color: "#FCEE21",
      // stroke: "#333",
      // strokeThickness: smFontSize * 2,
      shadow: {
        offsetX: smFontSize * 1,
        offsetY: smFontSize * 1,
        color: "#000F3A",
        blur: smFontSize * 1,
        stroke: true,
        fill: true,
      },
      resolution: 2,
      align: "center",
    }
  );
  instructTitle.setDepth(15);
  instructTitle.setOrigin(0, 0.75);

  // Text content
  const instructTextContent = _this.add.text(
    widthScreen * 320,
    widthScreen * 320,
    "Sử dụng mũi tên di chuyển sang trái hoặc phải để thu nhập kim cương và vật phẩm, đồng thời tránh chướng ngại vật.",
    {
      font: `${smFontSize * 22}px JuraMedium`,
      color: "#fff",
      stroke: "#2E3192",
      strokeThickness: smFontSize * 1,
      shadow: {
        offsetX: smFontSize * 1,
        offsetY: smFontSize * 1,
        color: "#000F3A",
        blur: smFontSize * 1,
        stroke: true,
        fill: true,
      },
      resolution: 2,
      align: "justify",
      wordWrap: {
        width: widthScreen * 400,
        useAdvancedWrap: true,
      },
    }
  );

  instructTextContent.setDepth(99);
  instructTextContent.setOrigin(0, 0.75);

  // Start button
  const startBtnContainer = _this.add.container();
  startBtnContainer.setSize(widthScreen * 170, widthScreen * 70);
  startBtnContainer.setPosition(widthScreen * 400, widthScreen * 425);
  startBtnContainer.setDepth(15);

  const startBtn = _this.add.image(0, 0, "imgButton");
  startBtn.setDisplaySize(startBtnContainer.width, startBtnContainer.height);
  startBtnContainer.add(startBtn);

  const startText = _this.add.text(0, 0, "Bắt đầu", {
    font: `${smFontSize * 26}px JuraMedium`,
    color: "#1B1464",
    stroke: "#2E3192",
    strokeThickness: smFontSize * 1,
    align: "center",
    resolution: 2,
  });
  startText.setOrigin(0.5);
  startBtnContainer.add(startText);

  startBtnContainer.setInteractive({ useHandCursor: true });
  startBtnContainer.on("pointerup", () => {
    if (StorageValue.countTickets > 0) {
      StorageValue.updateIsStartGame(true);
      instructBoardContainer?.destroy();
      _this.create();
    } else {
      instructBoardContainer?.destroy();
      StorageValue.updateIsGameOver(true);
      _summaryBoardContainer.setVisible(true);
    }
  });

  // Wheel
  const imgWheel = _this.add.image(
    widthScreen * 880,
    widthScreen * 260,
    "imgWheel"
  );
  imgWheel.setDepth(15);
  imgWheel.setDisplaySize(widthScreen * 190, widthScreen * 190);

  // Control
  const imgControl = _this.add.image(
    widthScreen * 880,
    widthScreen * 405,
    "imgControl"
  );
  imgControl.setDepth(15);
  imgControl.setDisplaySize(widthScreen * 160, widthScreen * 130);

  instructBoardContainer.add([
    instructBoard,
    imgPS5,
    instructTitle,
    instructTextContent,
    startBtnContainer,
    imgWheel,
    imgControl,
  ]);
};

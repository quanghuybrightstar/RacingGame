/* eslint-disable no-unused-vars */
class SmartBaseScreen {
  static smBaseWidth = 0;
  static smBaseHeight = 0;

  static smFontSize = 0;

  static baseSetUp() {
    const sWidth = window.innerWidth;

    SmartBaseScreen.smBaseWidth = sWidth / 1280;
    SmartBaseScreen.smFontSize = sWidth / 1280;
  }
}

export default SmartBaseScreen;

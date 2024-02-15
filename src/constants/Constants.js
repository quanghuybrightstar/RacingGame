/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../base/SmartBaseScreen";
SmartBaseScreen.baseSetUp();
const widthScreen = SmartBaseScreen.smBaseWidth;
export class Constants {
  // Size of car player
  static carWidth = widthScreen * 230;
  static carHeight = widthScreen * 115;
  static numTriangleHeal = 20;

  static distanceRacerTotal = 486 * widthScreen;
  static distanceRacer1 = 160 * widthScreen;
  static distanceRacer2 = 326 * widthScreen;

  // Value of quadratic lane 1
  static aLastLeft = 0.0000129542522;
  static bLastLeft = -0.48682524183;
  static cLastLeft = 606.7976833;

  // Value of quadratic lane 2
  static aMiddleLeft = 0.00003422948392;
  static bMiddleLeft = -0.2644579383;
  static cMiddleLeft = 617.2318613;

  // Value of quadratic lane 5
  static aLastRight = 0.00002992878101;
  static bLastRight = 0.450780393;
  static cLastRight = 670.1968623;

  // Value of quadratic lane 4
  static aMiddleRight = -0.00002477382538;
  static bMiddleRight = 0.2521767399;
  static cMiddleRight = 656.6277689;

  // Value of quadratic lamp right
  static aLampRight = -0.0002336343999;
  static bLampRight = 0.8768201099;
  static cLampRight = 645.7732473;

  // Value of quadratic lamp left
  static aLampLeft = 0.0002336343999;
  static bLampLeft = -0.8768201099;
  static cLampLeft = 627.2267527;

  // Line Racer 1
  static aLineRaceLastLeft = 0.00004922714765;
  static bLineRaceLastLeft = -0.3862368938;
  static cLineRaceLastLeft = 602.083875;

  // Line Racer 2
  static aLineRaceMiddleLeft = -0.00007333935905;
  static bLineRaceMiddleLeft = -0.03157754943;
  static cLineRaceMiddleLeft = 600.772089;

  // Line Racer 3
  static aLineRaceMiddleRight = -0.00005245602303;
  static bLineRaceMiddleRight = 0.1150592833;
  static cLineRaceMiddleRight = 651.4710911;

  // Line Racer 4
  static aLineRaceLastRight = 0.000002000643407;
  static bLineRaceLastRight = 0.3459444557;
  static cLineRaceLastRight = 664.3984505;
}

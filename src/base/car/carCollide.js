/* eslint-disable no-unused-vars */
export const creatCarCollide = (_this, _graphicsRace, positionX, positionY) => {
  const carID = Math.floor(Math.random() * (6 - 2 + 1) + 2);

  const car = _this.add.image(0, 0, `imgCar${carID}`);
  _graphicsRace.add(car);
  car.setPosition(positionX, positionY);

  car.setDisplaySize(100, 70);
  car.setOrigin(0.5);
  car.setDepth(1);
};

/* eslint-disable no-unused-vars */
import { TypeItem } from "./typeItem";
import StorageValue from "../../storage/StorageValue";

export const listItems = [
  {
    type: TypeItem.CAR_COLLIDE,
    imgKey: `imgCar`,
    pct: 37,
    velocity: 1.1,
    depth: 3,
    time: StorageValue.timeDynamicItem,
  },
  {
    type: TypeItem.DIAMOND,
    imgKey: "imgDiamond",
    pct: 24,
    velocity: 1.3,
    depth: 4,
    time: StorageValue.timeStaticItem,
  },
  {
    type: TypeItem.GASOLINE,
    imgKey: "imgGasoline",
    pct: 2,
    velocity: 1.3,
    depth: 5,
    time: StorageValue.timeStaticItem,
  },
  {
    type: TypeItem.BARRIER,
    imgKey: "imgBarrier",
    pct: 34,
    velocity: 1.3,
    depth: 6,
    time: StorageValue.timeStaticItem,
  },
  {
    type: TypeItem.WRENCH,
    imgKey: "imgWrench",
    pct: 3,
    velocity: 1.3,
    depth: 7,
    time: StorageValue.timeStaticItem,
  },
  {
    type: "",
    imgKey: "",
    pct: 10,
    velocity: 1.3,
    depth: 8,
    time: StorageValue.timeStaticItem,
  },
];

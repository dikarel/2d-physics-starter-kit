import { Bodies, Body, Vector, World } from "matter-js";
import P5 from "p5";
import { drawAllBodies } from "../helpers";
import ISketch from "./ISketch";

export default class Toy implements ISketch {
  public setup(p5: P5, world: World, width: number, height: number) {}

  public draw(p5: P5, world: World) {
    p5.background("white");
    drawAllBodies(p5, world);
  }
}

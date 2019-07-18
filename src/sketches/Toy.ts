import { World } from "matter-js";
import P5 from "p5";
import { drawAllBodies } from "../helpers";
import Sketch from "./Sketch";

export default class Toy implements Sketch {
  public setup(): void {}

  public draw(p5: P5, world: World): void {
    p5.background("white");
    drawAllBodies(p5, world);
  }
}

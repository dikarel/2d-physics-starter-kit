import { World } from "matter-js";
import P5 from "p5";

export default interface ISketch {
  setup(p5: P5, world: World, width: number, height: number): void;
  draw(p5: P5, world: World): void;
}

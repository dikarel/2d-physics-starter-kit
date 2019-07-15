import { World } from "matter-js";
import P5 from "p5";

export default abstract class BaseSketch {
  public abstract setup(
    p5: P5,
    world: World
  ): { width: number; height: number; fps: number; title: string };

  public abstract draw(p5: P5, world: World): void;
}

import { Engine } from "matter-js";
import P5 from "p5";
import { draw, setup } from "./sketch";

const FPS = 60;
const TITLE = "My sketch";

// tslint:disable-next-line: no-unused-expression
new P5((p5: P5): void => {
  const { clientWidth: width, clientHeight: height } = document.body;
  const engine = Engine.create({ enableSleeping: true });
  const period = 1000 / FPS;

  p5.setup = (): void => {
    setup(p5, engine.world, width, height);
    p5.createCanvas(width, height);
    p5.frameRate(FPS);
    document.title = TITLE;
  };

  p5.draw = (): void => {
    Engine.update(engine, period);
    draw(p5, engine.world);
  };
}, document.body);

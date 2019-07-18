import { Engine } from "matter-js";
import P5 from "p5";
import sketches from "./sketches";

const FPS = 60;

// console.warn(localStorage.getItem("sketch"));
// localStorage.setItem("sketch", "world");

// tslint:disable-next-line: no-unused-expression
new P5((p5: P5): void => {
  const engine = Engine.create({ enableSleeping: true });
  const sketch = new sketches[0]();

  let period = -1;
  const { clientWidth: width, clientHeight: height } = document.body;

  p5.setup = (): void => {
    sketch.setup(p5, engine.world, width, height);
    p5.createCanvas(width, height);
    p5.frameRate(FPS);

    period = 1000 / FPS;
  };

  p5.draw = (): void => {
    Engine.update(engine, period);
    sketch.draw(p5, engine.world);
  };
}, document.body);

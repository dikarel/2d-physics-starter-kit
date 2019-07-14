import { Engine } from "matter-js";
import P5 from "p5";
import { draw, setup } from "./sketch";

// tslint:disable-next-line: no-unused-expression
new P5((p5: P5) => {
  const engine = Engine.create();

  p5.setup = () => {
    const { width, height } = setup(p5, engine.world);
    p5.createCanvas(width, height);
    Engine.run(engine);
  };

  p5.draw = () => {
    draw(p5, engine.world);
  };
}, document.body);

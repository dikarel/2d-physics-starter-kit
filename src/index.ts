import { Engine } from "matter-js";
import P5 from "p5";
import NiceBoxes from "./sketches/NiceBoxes";

const SKETCH = NiceBoxes;

// tslint:disable-next-line: no-unused-expression
new P5((p5: P5) => {
  const engine = Engine.create();
  const sketch = new SKETCH();

  let period: number = null;

  p5.setup = () => {
    const { width, height, fps, title } = sketch.setup(p5, engine.world);

    document.title = title;
    p5.createCanvas(width, height);
    p5.frameRate(fps);

    period = 1000 / fps;
  };

  p5.draw = () => {
    Engine.update(engine, period);
    sketch.draw(p5, engine.world);
  };
}, document.body);

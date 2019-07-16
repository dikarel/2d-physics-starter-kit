import { Bodies, Body, Vector, World } from "matter-js";
import P5 from "p5";
import { drawAllBodies, makeGround } from "../helpers";
import ISketch from "./ISketch";

const Line = require("matter-lines").default;
const allColors = require("nice-color-palettes");
const randomNormal = require("random-normal");

const COLORS = allColors[Math.floor(Math.random() * allColors.length)];

export default class NiceBoxes implements ISketch {
  public setup(p5: P5, world: World, width: number, height: number) {
    World.add(world, makeGround(width, height));
    World.add(
      world,
      Bodies.rectangle(0, height / 2, 10, height, { isStatic: true })
    );
    World.add(
      world,
      Bodies.rectangle(width, height / 2, 10, height, { isStatic: true })
    );

    setInterval(() => {
      const boxWidth = randomNormal({ mean: 50, dev: 30 });
      const box = Bodies.rectangle(
        Math.random() * width,
        0,
        boxWidth,
        boxWidth,
        {
          angle: Math.random() * Math.PI * 2
        }
      );
      box.label = COLORS[Math.floor(Math.random() * (COLORS.length - 1)) + 1];

      Body.setAngularVelocity(
        box,
        box.mass * randomNormal({ mean: 0, dev: 0.1 })
      );
      Body.applyForce(
        box,
        Vector.create(0, 0),
        Vector.create(randomNormal({ mean: 0, dev: 0.05 }), 0)
      );
      World.add(world, box);
    }, 1000);

    return {
      fps: 60,
      height,
      title: "Nice boxes",
      width
    };
  }

  public draw(p5: P5, world: World) {
    p5.background(COLORS[0]);
    drawAllBodies(p5, world);
  }
}

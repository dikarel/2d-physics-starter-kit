import { Bodies, Body, Vector, World } from "matter-js";
import P5 from "p5";
import { drawAllBodies, drawBody, makeGround } from "../helpers";
import BaseSketch from "./BaseSketch";

const allColors = require("nice-color-palettes");
const randomNormal = require("random-normal");

const COLORS = allColors[Math.floor(Math.random() * allColors.length)];
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

export default class NiceBoxes extends BaseSketch {
  public setup(p5: P5, world: World) {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

    World.add(world, makeGround(CANVAS_WIDTH, CANVAS_HEIGHT));

    setInterval(() => {
      const boxWidth = randomNormal({ mean: 50, dev: 30 });
      const box = Bodies.rectangle(
        Math.random() * CANVAS_WIDTH,
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
      height: CANVAS_HEIGHT,
      title: "Nice boxes",
      width: CANVAS_WIDTH
    };
  }

  public draw(p5: P5, world: World) {
    p5.background(COLORS[0]);
    drawAllBodies(p5, world);
  }
}

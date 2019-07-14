import { Bodies, Body, World } from "matter-js";
import P5 from "p5";
import { drawBody, makeGround } from "./helpers";

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

const box = Bodies.rectangle(Math.random() * CANVAS_WIDTH, 0, 50, 50, {
  angle: Math.random() * Math.PI * 2
});
const ground = makeGround(CANVAS_WIDTH, CANVAS_HEIGHT);

Body.setAngularVelocity(box, (1 - Math.random() * 2) / 20);

export const setup = (p5: P5, world: World) => {
  p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  World.add(world, [box, ground]);

  return {
    height: CANVAS_HEIGHT,
    width: CANVAS_WIDTH
  };
};

export const draw = (p5: P5, world: World) => {
  p5.background("orange");
  drawBody(p5, box);
};

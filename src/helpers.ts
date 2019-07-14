import { Bodies, Body } from "matter-js";
import P5 from "p5";

export const drawBody = (p5: P5, body: Body) => {
  p5.beginShape("quads");
  p5.fill("white");
  for (const v of body.vertices) {
    p5.vertex(v.x, v.y);
  }
  p5.endShape("close");
};

export const makeGround = (
  canvasWidth: number,
  canvasHeight: number,
  groundThickness: number = 50
) => {
  return Bodies.rectangle(
    canvasWidth / 2,
    canvasHeight + groundThickness / 2,
    canvasWidth,
    groundThickness,
    { isStatic: true }
  );
};

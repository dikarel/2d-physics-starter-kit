import {
  Bodies,
  Body,
  IChamferableBodyDefinition,
  Vector,
  World
} from "matter-js";
import P5 from "p5";

export const drawAllBodies = (p5: P5, world: World) => {
  for (const body of world.bodies) {
    drawBody(p5, body);
  }
};

export const makeLine = (
  start: Vector,
  end: Vector,
  thickness: number = 10,
  options?: IChamferableBodyDefinition
) => {
  const dx = start.x - end.x;
  const dy = start.y - end.y;
  const length = Math.sqrt(dx * dx + dy * dy);

  return Bodies.rectangle(start.x, start.y, length, thickness, {
    angle: Math.atan2(dy, dx),
    ...options
  });
};

export const drawBody = (p5: P5, body: Body) => {
  p5.beginShape();
  p5.fill(body.label || "white");
  p5.strokeWeight(body.isSleeping ? 3 : 0);
  p5.stroke("black");
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

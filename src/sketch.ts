import { Bodies, Body, Vector, World } from "matter-js";
import P5 from "p5";
import { drawAllBodies, makeGround } from "./helpers";
import randomNormal from "random-normal";
import allColors from "nice-color-palettes";

const colors = allColors[Math.floor(Math.random() * allColors.length)];

export const setup = (p5: P5, world: World, width: number, height: number) => {
  World.add(world, makeGround(width, height));
  World.add(
    world,
    Bodies.rectangle(0, height / 2, 10, height, {
      isStatic: true
    })
  );
  World.add(
    world,
    Bodies.rectangle(width, height / 2, 10, height, {
      isStatic: true
    })
  );

  setInterval((): void => {
    const boxWidth = randomNormal({ mean: 50, dev: 30 });
    const box = Bodies.rectangle(Math.random() * width, 0, boxWidth, boxWidth, {
      angle: Math.random() * Math.PI * 2
    });
    box.label = colors[Math.floor(Math.random() * (colors.length - 1)) + 1];

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
};

export const draw = (p5: P5, world: World) => {
  p5.background(colors[0]);
  drawAllBodies(p5, world);
};

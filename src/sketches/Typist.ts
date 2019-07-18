import { Bodies, Body, Vector, World } from "matter-js";
import P5 from "p5";
import randomNormal from "random-normal";
import { makeGround } from "../helpers";
import Sketch from "./Sketch";

export default class Typist implements Sketch {
  public setup(p5: P5, world: World, width: number, height: number): void {
    World.add(world, makeGround(width, height));
    World.add(
      world,
      Bodies.rectangle(0, height / 2, 10, height, { isStatic: true })
    );
    World.add(
      world,
      Bodies.rectangle(width, height / 2, 10, height, { isStatic: true })
    );

    setInterval((): void => {
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
  }

  public draw(p5: P5): void {
    p5.background("white");

    /**
    p5.beginShape();
    p5.fill(body.label || "white");
    p5.strokeWeight(body.isSleeping ? 3 : 0);
    p5.stroke("black");
    for (const v of body.vertices) {
      p5.vertex(v.x, v.y);
    }
    p5.endShape("close");
    */
  }
}

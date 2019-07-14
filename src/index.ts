import { Bodies, Engine, Render, World } from "matter-js";

const engine = Engine.create();
const world = engine.world;

const render = Render.create({
  element: document.body,
  engine,
  options: { width: 320, height: 480 }
});

Engine.run(engine);
Render.run(render);

World.add(
  world,
  Bodies.rectangle(320 / 2, 0, 320, 48, {
    angle: (Math.random() * Math.PI * 2) / 100
  })
);

/**
setInterval(function() {
  var body = Bodies.rectangle(
    Math.random() * 800,
    Math.random() * 100,
    60,
    10,
    { angle: Math.random() * Math.PI * 2 }
  );
  World.add(world, body);
}, 250);
*/

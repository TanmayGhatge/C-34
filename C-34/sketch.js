const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;
 
  b1 = new Building(500, 500, 100, 1100);

  ground = new Ground(600, 600, 1200, 10);
}

function draw() {
    background("white");
    Engine.update(engine);

    b1.display();
    ground.display();
}
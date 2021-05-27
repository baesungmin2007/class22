const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var ground

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  
  ground =  Bodies.rectangle(200,400,400,50, ground_options);
  World.add(world, ground);

  console.log(ground);

  var ball_options = {
    restitution: 1.5
  }

  
  ball = Bodies.circle(200,200,50, ball_options)
  World.add(world, ball);
  
  var ball2_option = {
    restitution: 1.5
  }

  ball2 = Bodies.circle(150,200,40, ball2_option)
  World.add(world, ball2);

  var box_option = {
    restitution: 2.5
  }

  box = Bodies.rectangle(300,200,30,30, box_option)
  World.add(world,box);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill("red")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)

  fill("green")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)
  
  fill("blue")
  ellipseMode(RADIUS)
  ellipse(ball2.position.x,ball2.position.y,40,40)

  fill("white")
  rectMode(CENTER)
  rect(box.position.x,box.position.y,30,30)

}
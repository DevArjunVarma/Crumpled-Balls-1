
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var bin1, bin2, bin3;
var ground;

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,480,1600,5);
	ball = new Ball(500,476);
	bin1 = new Bin(1200,480,10,);
    bin2 = new Bin2(1155,440,80);
	bin3 = new Bin2(1245,440,80);
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  keyPressed();
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Body.applyForce( ball,{x: ball.position.x, y: ball.position.y}, {x: 85, y: -85});
	}
}



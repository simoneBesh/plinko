const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1;
var plinko1;

var particles = [];
var plinko = [];
var division = [];
var divisionHeight = 300; 

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;

ground1=new ground (240, 800, 480, 800);
division1=new division ();
plinko1=new plinko(200, 200, 10);

for (var i = 0; i<=width; i=i+80){
  division.push(new divison (i, height-divisionHeight/2, 10, divisionHeight));
}
//adding rows of plinkos
for (var j = 40; j<= width; j=j+50) {
  plinko.push(new plinko(j, 75, 10));
}
for (var j = 15; j<= width; j=j+50) {
  plinko.push(new plinko(j, 175, 10));
}
for (var j = 40; j<= width; j=j+50) {
  plinko.push(new plinko(j, 275, 10));
}
for (var j = 15; j<= width; j=j+50) {
  plinko.push(new plinko(j, 375, 10));
}

Engine.run(engine);

}

function draw() {
  background(255, 255,255);  
  drawSprites();

ground1.display();


}
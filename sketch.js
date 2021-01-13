var paperObj,dustbinObj,groundObj;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

function setup() {
	createCanvas(1000, 500);

	engine = Matter.Engine.create();
	world = engine.world;


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObj=new paper(200,450,40);
	groundObj=new Ground(width/2,670,width,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  dustbinObj.display();
  paperObj.display();
  groundObj.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
  
	}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpledball,dustbin,ground

function preload()
{
	
}

function setup() {
	dust1=new Dustbin(750,650,10,50)
	dust2=new Dustbin(650,650,50,10);
	dust3-new Dustbin(700,650,10,50)
	ball-new Ball(100,100,10)
	ground1=new Ground(0,690,999,5)
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Engine.run(engine);
}


function draw() {
	dust1.display();
	dust2.display();
	dust3.display();
	ball.display();
	ground1.display();
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



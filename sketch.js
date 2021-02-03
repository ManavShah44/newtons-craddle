
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,rope1,rope2,rope3,rope4,roof
//var roof = createSprite(200,200,250,30)
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof= new Roof(125,90,250,30)
	ball1= new Ball(100,500,25)
	rope1= new SlingShot(ball1.body,{x:200,y:100})
	ball2= new Ball(50,500,25)
	rope2= new SlingShot(ball2.body,{x:150,y:100})
	ball3= new Ball(100,500,25)
	rope3= new SlingShot(ball3.body,{x:100,y:100})
	ball4= new Ball(100,500,25)
	rope4= new SlingShot(ball4.body,{x:50,y:100})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(600);
  ball1.display()
  rope1.display()
  ball2.display()
  rope2.display()
  ball3.display()
  rope3.display()
  ball4.display()
  rope4.display()
  roof.display()
  
  
  drawSprites();
 
}




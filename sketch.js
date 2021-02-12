const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyAnimation;
var Stone1;
var mango1,mango2,mango3,mango4;
var constraint;

function preload()
{
	boyAnimation = loadImage("Plucking mangoes/boy.png");
	treeimg = loadImage("Plucking mangoes/tree.png")

}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	rectMode(CENTER);
	image(boyAnimation ,300,450)
	

	Stone1 = new STONE(150,370);
	mango1 = new MANGO(800,100,30);
	mango2 = new MANGO(830,190,30);
	mango3 = new MANGO(900,150,30);
	mango4 = new MANGO(930,182,30);
	ground = new Ground(600,480,1200,20)
	
	boxx = 900;
	boxy= 470;
	boxw = 200;
	boxt = 20;
	boxh = 200;

	boxb = new Dustbin(boxx,boxy,boxw,boxt);
	boxl= new Dustbin(boxx-boxw/2 , boxy-boxh/2+10,boxt,boxh);
	boxr = new Dustbin(boxx+boxw/2 , boxy-boxh/2+10,boxt,boxh)


	constraint = new CONSTRAINT(Stone1.body,{x :170, y : 370})
	


	Engine.run(engine);
  
}

function draw() { 
  background("lightblue");
  boxb.display();
  boxl.display();
  boxr.display();
  image(boyAnimation,130,320,200,200);
  image(treeimg,780,30,250,450)
  constraint.display();
  Stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  detectollision(Stone1,mango1)
  detectollision(Stone1,mango2)
  detectollision(Stone1,mango3)
  detectollision(Stone1,mango4)
  ground.display();
  

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(Stone1.body,{x : mouseX, y : mouseY});
}

function mouseReleased() {
	constraint.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(Stone1.body, {x:150, y:370}) 
	constraint.attach(Stone1.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

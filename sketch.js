
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground;

function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  /*ground1 = new Ground(1000,50,200,100);
	ground2 = new Ground(800,50,200,100);
	ground3 = new Ground(600,50,200,100);
	ground4 = new Ground(400,50,200,100);*/

  bobDiameter=40;
  ground1=new Ground(width/2,height/4,width/2,20);

  

  startBobPositionX=width/2;
	startBobPositionY=height/4+500;

  blob4 = new Ball(700,300);
	blob3 = new Ball(600,300);
	blob2 = new Ball(420,300);
	blob1 = new Ball(400,300);

	/*sling1= new Sling(ground1.body,blob1.body,-bobDiameter*1, 0);
	sling2= new Sling(ground1.body,blob2.body,0,0);
	sling3= new Sling(ground1.body,blob3.body,bobDiameter*1, 0);
	sling4= new Sling(ground1.body,blob4.body,bobDiameter*2, 0);*/


  sling4=new Sling(blob1.body,ground1.body,-bobDiameter*2, 10)
	sling3=new Sling(blob2.body,ground1.body,0, 10)
	sling2=new Sling(blob3.body,ground1.body,bobDiameter*2, 10)
	sling1=new Sling(blob4.body,ground1.body,bobDiameter*4, 10)
	
	Engine.run(engine);

}

function draw() {

  background(230);
  ground1.display();
  /*ground2.display();
  ground3.display();
  ground4.display();*/
  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(blob1.body,blob1.body.position,{x:-50,y:-50});
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Cons = Matter.Constraint;

var engie,world;
var bob1,bob2,bob3,bob4,bob5, roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	roof= new Roof(200,200,300,30);

	bob1= new Ball(120,400);
	bob2= new Ball(160,400);
	bob3= new Ball(200,400);
	bob4= new Ball(240,400);
	bob5= new Ball(280,400);

	bobDiameter=40;

	rope1=new Chain(bob1.body,roof.body,-bobDiameter*2, 0);
	rope2=new Chain(bob2.body,roof.body,-bobDiameter*1, 0);
	rope3=new Chain(bob3.body,roof.body,0, 0);
	rope4=new Chain(bob4.body,roof.body,bobDiameter*1, 0);
	rope5=new Chain(bob5.body,roof.body,bobDiameter*2, 0);

	Engine.run(engine);
 
}


function draw() {
  
  background(230);

  roof.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}
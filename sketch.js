
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gamestate="play";

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
  world = engine.world;
  
  ball1 = new Box(200,385,50,50);
  ball2 = new Box(230,385,50,50);
  ball3 = new Box(250,385,50,50);
  ball4 = new Box(270,385,50,50);

  log6 = new Log(290,20,100,10);
  log7 = new Log(350,20,100,10);
  log8 = new Log(410,20,100,10);
  log9 = new Log(470,20,100,10);
  
 
  sling1 = new Chain(ball1.body,log6.body,-50*2,0);
  sling2 = new Chain(ball2.body,log7.body,-25*2,0);
  sling3 = new Chain(ball3.body,log8.body,-0*2,0);
  sling4 = new Chain(ball4.body,log9.body,25*2,0);

	Engine.run(engine);
	
}


function draw() {

  background("yellow");
  
  Engine.update(engine);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  
 
  drawSprites();
  keyPressed();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  

  log6.display();
  log7.display();
  log8.display();
  log9.display();

}
function keyPressed() { 
	if (keyCode === UP_ARROW && gamestate==="play") {
     Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-300,y:0});
 gamestate="end";
} 

if(keyCode === DOWN_ARROW && gamestate==="end"){
  gamestate="play";
}
} 




	



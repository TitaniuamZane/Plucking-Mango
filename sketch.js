const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var mango1, mango2, mango3, mango4, mango5;
var stone;
var ground;
var tree;
var constraint;

function setup() {
	createCanvas(1000, 610);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(230, 530, 1570, 10);
	
	boy = new Boy(-100, -55, 100, 200);

	tree = new Tree(590, -165, 300, 450);
 
	mango1 = new Mango(-40, -100, 40, 50);
	mango2 = new Mango(100, -70, 40, 50);
	mango3 = new Mango(50, -140, 40, 50);
	mango4 = new Mango(-100, -60, 40, 50);
	mango5 = new Mango(0, -70, 40, 50);
	
	stone = new Stone(-600, -55, 35, 35);

	constraint = new ElasticConstraint(stone.body, {x:-620, y:120});

	Engine.run(engine);
  
}


function draw() {
  background(190);

  ground.display();
  
  boy.display();
  
  tree.display();

  mango1.display();
  mango2.display(); 
  mango3.display();
  mango4.display();
  mango5.display(); 

  stone.display();
  
  constraint.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);


  drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:-mouseX/10, y:-mouseY/8});
}

function mouseReleased(){
    constraint.Fly()
}

function detectollision(lstone, lmango){

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if(distance<lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body, false)
}

}

function keyPressed(){
    if(keyCode === 32){
        constraint.attach(stone.body);
    }
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	path_img = loadImage("assets/path.jpg");
	boy_ani = loadAnimation("assets/boy1.PNG", "assets/boy2.PNG", "assets/boy3.PNG", "assets/boy4.PNG");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//boy = createSprite(width/2, height/2, 10, 10);
	//boy.addAnimation("running", boy_ani);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(path_img, 0, 0, width*3, height);
  
  drawSprites();
 
}




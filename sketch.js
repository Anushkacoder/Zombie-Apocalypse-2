var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var backgroundIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backgroundIMG = loadImage("background.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	background1 = createSprite(400,350,10,10);
	background1.addImage(backgroundIMG);
	background1.scale = 2.0;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,20);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.7;

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=('lime');

	side1Sprite=createSprite(width/2, height-25, 200,10);
	side1Sprite.shapeColor = ('red');

	side2Sprite=createSprite(300, 630, 10,100);
	side2Sprite.shapeColor = ('red');

	side3Sprite=createSprite(500, 630, 10,100);
	side3Sprite.shapeColor = ('red');

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 675, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
      //Create the red zone
   side1 = Bodies.rectangle(width/2, height-31, 200, 20, {isStatic:true} );
   World.add(world,side1);
   side2 = Bodies.rectangle(300, 630, 20, 100, {isStatic:true} );
   World.add(world,side2);
   side3 = Bodies.rectangle(500, 630, 20, 100, {isStatic:true} );
   World.add(world,side3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  drawSprites();
  textFont('Algerian');
  textSize(65);
  fill('yellow');
  text('!! ZOMBIE INVASION !!', 70, 350)
}
function keyPressed() {
 if (keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody,false);
  }
}




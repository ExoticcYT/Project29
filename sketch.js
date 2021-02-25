const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var floor, platform, platform1, slingshot, penta;

var box, box1, box2, box3, box4, box5;
var box6, box7, box8, box9, box10;
var box11, box12, box13, box14;
var box15, box16, box17;
var box18, box19;
var box20;

var boxA, boxB, boxC, boxD, boxE, boxF;
var boxG, boxH, boxI, boxJ;
var boxK, boxL;
var boxM;

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;
	
	floor = new Ground(450,380,900,20);
	platform = new Roof(400, 300, 300, 10);
	platform1 = new Roof(700, 200, 200, 10);

	//level 2 for the BIG ROOF
	box=new Boxes(platform.x-75,platform.y-30, 30,40);
	box1=new Boxes(platform.x-60, platform.y-30, 30, 40);
	box2=new Boxes(platform.x-45, platform.y-30, 30,40);
	box3=new Boxes(platform.x-30, platform.y-30, 30, 40);
	box4=new Boxes(platform.x-15, platform.y-30, 30, 40);
	box5=new Boxes(platform.x+45, platform.y-30, 30, 40);
	box6=new Boxes(platform.x+60, platform.y-30, 30,40);
	box7=new Boxes(platform.x+75, platform.y-30, 30, 40);

	//level 1 for the BIG ROOF, its kinda making it too long, so i am going to remove this one... 
	box8=new Boxes(platform.x-30-15,platform.y-60, 30, 40);
	box9=new Boxes(platform.x-60-15,platform.y-60, 30, 40);
	box10 =new Boxes(platform.x-15,platform.y-60, 30, 40);
	box11=new Boxes(platform.x+30-15,platform.y-60, 30, 40);
	box12=new Boxes(platform.x+60-15,platform.y-60, 30, 40);
	box13=new Boxes(platform.x+90-15-15,platform.y-60, 30, 40);

	//level 3 for the BIG ROOF
	box14=new Boxes(platform.x-60-15+30,platform.y-90, 30, 40);
	box15=new Boxes(platform.x-15,platform.y-90, 30, 40);
	box16=new Boxes(platform.x+30-15,platform.y-90, 30, 40);
	box17=new Boxes(platform.x+60-15-15,platform.y-90, 30, 40);

	
	//level 5 for the BIG ROOF
	box18=new Boxes(platform.x-15-5,platform.y-120, 30, 40);
	box19=new Boxes(platform.x+30-15-5,platform.y-120, 30, 40);

	//FINAL LEVEL for the BIG ROOF
	box20=new Boxes(platform.x, platform.y-150, 30, 40);

	//SMALL ROOF time!!!!!!!
	//SMALL ROOF level 1
	boxA=new Boxes(platform1.x-30-15-10+2,platform1.y-30, 30, 40);
	boxB=new Boxes(platform1.x-30-10+5+2, platform1.y-30, 30, 40);
	boxC=new Boxes(platform1.x-15+15-10+2, platform1.y-30, 30, 40);
	boxD=new Boxes(platform1.x+30-10+2, platform1.y-30, 30, 40);
	boxE=new Boxes(boxD.body.position.x+15, platform1.y-30, 30, 40);
	boxF=new Boxes(boxE.body.position.x+15, platform1.y-30, 30, 40);
	
	//SMALL ROOF level 2 boys
	boxG=new Boxes(platform1.x-30-10+5-3, platform1.y-60, 30, 40);
	boxH=new Boxes(platform1.x-15+15-10-3, platform1.y-60, 30, 40);
	boxI=new Boxes(platform1.x+30-10-3, platform1.y-60, 30, 40);
	boxJ=new Boxes(boxI.body.position.x+15, platform1.y-60, 30, 40);

	//SMALL ROOF level 3 boys
	boxK=new Boxes(platform1.x-15+15-10-3, platform1.y-120, 30, 40);
	boxL=new Boxes(platform1.x+30-10-3, platform1.y-120, 30, 40);

	//FINAL LEVEL for SMALL ROOF boys
	boxM=new Boxes(platform1.x-15+15-10-3+15, platform1.y-150, 30, 40);

	//The penta that we throw!!!
	penta=new hexa(200, 200, 20);

	//sLIngShot
	slingshot = new Slingshot(penta.body,{x:200, y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  floor.display();
  platform.display();
  platform1.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  boxA.display();
  boxB.display();
  boxC.display();
  boxD.display();
  boxE.display();
  boxF.display();
  boxG.display();
  boxH.display();
  boxI.display();
  boxJ.display();
  boxK.display();
  boxL.display();
  boxM.display();
  penta.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(penta.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
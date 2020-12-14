var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3,wall4,line1,line2,line3;
var damage,damage2,damage3,damage4,speed,speed2,speed3,speed4,weight1,weight2,weight3,weight4;
var thickness1,thickness2,thickness3,thickness4;

function setup() {
  createCanvas(1367,400);

  bullet1 = createSprite(50, 50, 30, 10);
  bullet1.shapeColor = "WhItE";

  bullet2 = createSprite(50, 150, 30, 10);
  bullet2.shapeColor = "yellow";

  bullet3 = createSprite(50, 250, 30, 10);
  bullet3.shapeColor = "red";

  bullet4 = createSprite(50, 350, 30, 10);
  bullet4.shapeColor = "green";

  line1 = createSprite(700,100,1500,5);
  line1.shapeColor = "white";

  line2 = createSprite(700,200,1500,5);
  line2.shapeColor = "white";

  line3 = createSprite(700,300,1500,5);
  line3.shapeColor = "white";

  wall1 = createSprite(1300,50,50,50);

  wall2 = createSprite(1300,150,50,50);

  wall3 = createSprite(1300,250,50,50);
 
  wall4 = createSprite(1300,350,50,50);

  speed = random(223,321);
  weight = random(30,52);

  speed2 = random(223,321);
  weight2 = random(30,52);

  speed3 = random(223,321);
  weight3 = random(30,52);

  speed4 = random(223,321);
  weight4 = random(30,52);
  
  thickness1 = random(22,83);
  thickness2 = random(22,83);
  thickness3 = random(22,83);
  thickness4 = random(22,83);
}

function draw() {
  background(0);  

  drawSprites();

if(keyDown("right")){
  bullet1.x = bullet1.x + speed;
}

if(bullet1.x > 1325){
  damage = Math.round(0.5*weight*speed*speed/(thickness1*thickness1*thickness1));
  
  if(damage<11){
    wall1.shapeColor = "green";
  }
  
  if(damage>10){
    wall1.shapeColor = "red";
  }
  
  textSize(70);
  fill("orange");
  text("press space",400,50);
  
  if(keyDown("space")){
    bullet2.x = bullet2.x + speed2;
  }
}

if(bullet2.x > 1325){
  damage2 = Math.round(0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2));
  
  textSize(70);
  fill("orange");
  text("press enter",400,150);
  
   if(damage2<11){
    wall2.shapeColor = "green";
  }
  
  if(damage2>10){
    wall2.shapeColor = "red";
  }
 
  if(keyDown("enter")){
    bullet3.x = bullet3.x + speed3;
  }
}

if(bullet3.x > 1325){
  damage3 = Math.round(0.5*weight3*speed3*speed3/(thickness3*thickness3*thickness3));
  
  textSize(70);
  fill("orange");
  text("press shift",400,270);
  
   if(damage3<11){
    wall3.shapeColor = "green";
  }
  
  if(damage3>10){
    wall3.shapeColor = "red";
  }
  
  if(keyDown("shift")){
    bullet4.x = bullet4.x + speed4;
  }
}

if(bullet4.x > 1325){
  damage4 = Math.round(0.5*weight4*speed4*speed4/(thickness4*thickness4*thickness4));
  
   if(damage4<11){
    wall4.shapeColor = "green";
  }
  
  if(damage4>10){
    wall4.shapeColor = "red";
  }
  
  }
}
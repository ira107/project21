var bullet,wall,thickness;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
 bullet= createSprite(50, 200, 10, 10);
 bullet.shapeColor="white"
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80)
car.velocityX = speed
thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)
bullet.collide(wall)

}

function draw() {
  background(255,255,255);  

  deformation = (0.5*weight*speed*speed)/22500;
  if(deformation<100){
    car.shapeColor = color(0,255,0);
    }
  if(deformation>100 && deformation<180){
    car.shapeColor=color(230,230,0);
  }
  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }
if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0

  hasCollided();
}

function hasCollided(){
if(bullet.collide(wall)){
damage=0.5*bulletWeight*bulletSpeed*bulletSpeed
if(damage==12.43){
  bullet.shapeColor="red"
}else if(damage==3.68){
  bullet.shapeColor="green"
}
 if(damage<10){
   bullet.shapeColor="white"
 }
}
}


 drawSprites();
}
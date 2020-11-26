var car;
var wall;
var speed; 
var weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  car  = createSprite(50, 200, 50, 50);
 car.shapeColor = "white"; 
  car.velocityX = speed;
  wall  = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "grey";
  weight = random(400,1500);
}

function draw() {
  background(0);  
  if(wall.x - car.x <car.width/2 + wall.width/2 ){
car.velocityX = 0
deformation =  (0.5 * weight * speed * speed)/22500;
if(deformation<100)
{
car.shapeColor = "green"; 
wall.shapeColor = "green";}
if(deformation>100 && deformation<180){  
car.shapeColor = "yellow"; 
wall.shapeColor = "yellow";}
if(deformation>180){
      car.velocityX = 0
      car.shapeColor = "red"; 
      wall.shapeColor = "red";}
    } 
  drawSprites();
}
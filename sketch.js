
var  car, car1, wall;
var speed, weight;

var deformation;
var delay;


function setup() {
  createCanvas(1600,1600);
  speed=random(55,90);
  weight=random(400,1500);
 car= createSprite(50, 200, 50, 50);
 car1= createSprite(50, 350, 50, 50);

 wall= createSprite(1000,200, 60, height);
 wall.shapeColor=(80,80,80);
 car.velocityX= speed;
 car1.velocityX= speed;
 delay=0;
}
 
function draw() {
  background(0,0,0); 
  
  if ((car.x -wall.x < car.width/2 + wall.width/2) 
  && ( wall.x-car.x < car.width/2 + wall.width/2)) {
    deformation = 0.5 * weight * speed * speed / 22500;
    if (deformation <100){
      car.shapeColor="green";
    }
    else if( deformation >=100 && deformation<=180){
      car.shapeColor="yellow";
     }
    else {
             car.shapeColor="red"
     }

     if ((car1.x -wall.x < car1.width/2 + wall.width/2) 
     && ( wall.x-car1.x < car1.width/2 + wall.width/2)) {
       deformation = 0.5 * weight * speed * speed / 22500;
       if (deformation <100){
         car1.shapeColor="green";
       }
       else if( deformation >=100 && deformation<=180){
         car1.shapeColor="yellow";
        }
       else {
                car1.shapeColor="red"
       }
      }

if (car.x=1200 ){
  car.velocityX=0;
 }

 if (car1.x=1200 ){
  car1.velocityX=0;
 }
}

  
  drawSprites();
}
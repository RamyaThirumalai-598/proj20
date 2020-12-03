var car,wall;
var speed, weight
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,120);
  car.velocityX = 60;
  weight = random(400,1500)
  
}

function draw() {
  background(255,255,255);  
 
  //car.x= mouseX;
 //car.y = mouseY;
text(wall.x-car.x,100,100); 
text("speed of the car"+car.velocityX,100,200);
 if(wall.x-car.x < (wall.width+car.width)/2){
    car.velocityX = 0;
   car.x=wall.x  - 50;
    
    def = (0.5 * weight * speed * speed)/22500
    if(def < 100){
      car.shapeColor = 'green'
    }
    else if(def> 100 && def <180){
      car.shapeColor = 'yellow'
    }
    else if(def > 180){
      car.shapeColor = "Red"
    }
  }
  

  drawSprites();
}
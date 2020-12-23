
var bullet , wall
var speed , weight
var  thickness

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = 255;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80)

  speed = random(223,231);
  weight = random(30,52);
   
  bullet.velocityX = speed;
  thickness= random(22,83)
}

function draw() {
  background(0); 
  
   if(hasCollided(bullet ,wall)){
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/thickness*3;
   if(damage>10)
   {
     wall.shapeColor = color(0,255,0)
   }
   if(damage<10)
   {
     wall.shapeColor = color(255,0,0)
   }
   }
  drawSprites();
}

function hasCollided(dbullet , dwall){
  bulletRightEdge = dbullet.x+dbullet.width;
  wallLeftEdge = dwall.x
  if(bulletRightEdge>=wallLeftEdge){
     return true;
  }
   return false;
}



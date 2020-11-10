var fixedRect,movingRect;
function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(100, 200, 20, 80);
  movingRect = createSprite(300, 200, 80, 20);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect.debug = true;
 
}

function draw() {
  background('black'); 
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
  }
  else{
fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";

  }
  
  drawSprites();
}
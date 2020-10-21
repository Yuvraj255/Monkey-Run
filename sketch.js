var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(400,400);
  
  //creating monkey
  monkey = createSprite(80,315,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  //creating new groups
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  //survival time and score
  survivalTime = 0;
}

function draw() {
  background("pink");
  
  //declaring survival time
  stroke("black");
  textSize(20);
  fill("white");
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time:" + survivalTime,100,50);
  
  //recentering the ground
  ground.x = ground.width/2;
  
  //making monkey jump
  if(keyDown("space") && monkey.y>=300){
    monkey.velocityY = -15;
  }
  //giving gravity to monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //colliding monkey with ground
  monkey.collide(ground);
  
  //declaring food function
  food();
  obstacles();
  
  drawSprites();

}

//creating function for food
function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,100,10,10);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.y = Math.round(random(120,200));
    banana.lifetime = 135;
    
    foodGroup.add(banana);
  } 
}

//creating function for obstacles
function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,310,10,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    
    obstacleGroup.add(obstacle);
  } 
}






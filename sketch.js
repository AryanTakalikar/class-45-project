var player1,player2,player3,player4;
var ply1Img,ply2Img,ply4Img,ply4Img;


function preload() {
 ply1Img = loadAnimation("images/player1.gif");
 ply2Img = loadImage("images/player2.gif");
 ply3Img = loadImage("images/player3.gif");
 ply4Img = loadImage("images/player4.gif");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  player1 = createSprite(100,100);
  player1.addAnimation("player1",ply1Img);
  player1.scale = 0.25;
  player2 = createSprite(100,250);
  player2.addImage(ply2Img);
  player2.scale = 0.25;
  player3 = createSprite(100,400);
  player3.addImage(ply3Img);
  player3.scale = 0.25;
  player4 = createSprite(100,550);
  player4.addImage(ply4Img);
  player4.scale = 0.25;
}

function draw() {
  drawSprites();
  
}

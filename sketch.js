var catImg1, catImg2, catImg3, cat;
var mImg1, mImg2, mImg3, mouse;
var bgImg;
function preload() {
    //load the images here
    
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mImg1 = loadAnimation("images/mouse1.png");
    mImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mImg3 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(700,650,20,20);
    cat.addAnimation("Sleeping", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,650,20,20);
    mouse.addAnimation("Running", mImg1);
    mouse.scale = 0.15;


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
         cat.velocityX = 0;
         cat.x = 300;
         cat.addAnimation("Cat last image", catImg3);
         cat.changeAnimation("Cat last image");

         mouse.addAnimation("Mouse last image", mImg3);
         mouse.changeAnimation("Mouse last image");
         
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("Teasing", mImg2);
      mouse.changeAnimation("Teasing");

      cat.addAnimation("TEASED", catImg2);
      cat.changeAnimation("TEASED");
      cat.velocityX = -5;
  }


}

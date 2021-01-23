var Ninjasprite;
var ninjaImag1, ninjaImg2, ninjaImag3, ninjaImag4, ninjaImag5, ninjaImag6, ninjaImag7, ninjaImag8, ninjaImag9, ninjaImag10;
backImg;
function preload(){
  ninja_running=loadAnimation("Climb_000.png", "Climb_001.png", "Climb_003.png", "Climb_004.png", "Climb_005.png", "Climb_006.png", "Climb_007.png", "Climb_008.png", "Climb_009.png ")
  backImg=loadImage("city.jpg")
  
}

function setup() {
  createCanvas(800,800);
  Ninjasprite=createSprite(400, 660, 50, 50);
  Ninjasprite.addAnimation("rinning",ninja_running)
  Ninjasprite.scale=0.25

  
  

}

function draw() {
  background(backImg);  
  drawSprites();
}
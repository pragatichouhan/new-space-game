function preload(){
  slide1=loadImage("asset/1STSLIDE.PNG")
  intro1=loadImage("asset/INTRO1.PNG")
  intro2=loadImage("asset/intro2.PNG")


}

function setup(){
  
  createCanvas(windowWidth,windowHeight)
  bg=createSprite(width/2,height/2,width,height)
  bg.addImage("slide1",slide1)
  bg.addImage("intro1",intro1)
  bg.addImage("intro2",intro2)

  button=createImg("asset/START.PNG")
  button.position(700,400)
  button.mouseClicked(slide)
}

function draw(){
background("black")

  drawSprites()
}
function slide(){
  button.hide()
  bg.changeImage("intro1",intro1)
  arckey=createImg("asset/rightarrowkey.PNG")
  arckey.position(700,400)
  arckey.mouseClicked(slide1)
}

function slide1(){
  bg.changeImage("intro2",intro2)
}
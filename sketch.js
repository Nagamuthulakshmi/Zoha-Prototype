var pocketpinch,ipocketpinch,shoppingbutton;
var gamestate=0,tomato,beans
function preload(){
  ipocketpinch=loadImage("images/pocket pinch.jpg")
  tomato=loadImage("images/tomato.png")
onion=loadImage("images/onion.png")
beans=loadImage("images/beans.png")
leafy=loadImage("images/leafy vegetable.png")
carrot=loadImage("images/carrot.png")
apple=loadImage("images/apple.png")
banana=loadImage("images/banana.png")
mango=loadImage("images/mango.png")
lichi=loadImage("images/lichi.png")
pomogranate=loadImage("images/pomogrante.png")
}

function setup(){
  createCanvas(800,800)
  if (gamestate===0){

  text("QUARANTEAM WEB(Helping Web For StreetHawkers)",200,400)
pocketpinch=createSprite(400,400,50,50)
pocketpinch.addImage(ipocketpinch)
shoppingbutton=createButton("StartShopping")
shoppingbutton.position(700,380)
shoppingbutton.mousePressed(()=>{
  gamestate=1
  pocketpinch.destroy()
  shoppingbutton.hide()
  form =new Form()
  form.show()

})
  }

}

function draw() {
  
  

drawSprites()
}

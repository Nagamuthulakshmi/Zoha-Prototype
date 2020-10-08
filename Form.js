class Form{
constructor (){

}
show (){
    background('cyan')
image(beans,0,0,100,100)

this.tomatoinput =createInput()
this.onioninput =createInput()
this.beansinput =createInput()
this.leafyinput =createInput()
this.carrotinput =createInput()
this.appleinput =createInput()
this.bananainput =createInput()
this.mangoinput =createInput()
this.lichiinput =createInput()
this.pomogranteinput =createInput()

this.tomatoinput.position(400,50)
this.onioninput.position(400,100)
this.beansinput.position(400,150)
this.leafyinput.position(400,200)
this.carrotinput.position(400,250)
this.appleinput.position(400,300)
this.bananainput.position(400,350)
this.mangoinput.position(400,400)
this.lichiinput.position(400,450)
this.pomogranteinput.position(400,500)

this.submitbutton=createButton('Submit')
this.submitbutton.position(400,550)
text('tomato',200,50)
text('onion',200,100)
text('beans',200,150)
text('leafy vegetables',200,200)
text('carrot',200,250)
text('apple',200,300)
text('banana',200,350)
text('mango',200,400)
text('lichi',200,450)
text('pomogrante',200,500)
}
}
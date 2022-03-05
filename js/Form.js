class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
  setElementPos(){
    this.input.position(width/2-110,height/2-80)
    this.playButton.position(width/2-90,height/2-20)
    this.titleImg.position(120,50)
    this.greeting.position(width/2-300,height/2-100)
  }
  setElementStyle(){
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.titleImg.class("gameTitle")
    this.greeting.class("greeting")
  }
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titleImg.hide();
  }
 display()
 {
   this.setElementPos()
   this.setElementStyle()
   this.handleClick()
 }
 handleClick(){
   this.playButton.mousePressed(()=>{
   this.input.hide()
   this.playButton.hide()
   var message = `Hello ${this.input.value()} </br> Waiting For Other Players...`
   this.greeting.html(message)
   mypc += 1
   player.name = this.input.value()
   player.index = mypc
   player.addplayer()
   player.updatepc(mypc)
   player.getDistance()
   })
 }
}

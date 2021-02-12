

var hab;  
var database = firebase.database;
var position;
var balloonPosition = database.ref('balloon/position')
balloonPosition.on("value",readPosition)


function preload(){
  bg = loadImage("bg.png")
  bimg = loadImage("balloon.png")

}




function setup() {
  createCanvas(800,400);
  hab = createSprite(400, 200, 50, 50);
  hab.addImage("bimg",bimg)
  hab.scale = 0.25
}

function draw() {
  background(bg); 

  

  if(keyDown("left")){
    hab.x -=5
  }
  if(keyDown("right")){
    hab.x +=5
  }
  if(keyDown("up")){
    hab.y -=5
  }
  if(keyDown("down")){
    hab.y +=5
  }

  push()
  fill(0)
  textSize(15)
  text("Press The Arrow Keys To Move The Balloon",20,20)
  pop()


  drawSprites();
}

function updatePosition(){
  database.ref('ballooon/position').set({
    'x': position.x+x,
    'y': position.y+y
  })
}


function readPosition(data){
  data.val()
   balloon.x = position.x
   balloon.y = position.y
  
}
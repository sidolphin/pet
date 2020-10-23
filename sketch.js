//Create variables here
var happyDog,dog
var food, foodStock
function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);
   background(46, 139, 87)
   database=firebase.database();
   foodStock=database.ref("food")
   foodStock.on("value",readStock,showError)
}


function draw() { 
  if(keyDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
} 

  drawSprites();
  //add styles here  

}
function readStock(data){
  foodS=data.val()
  
}
function showError(){
  console.log("error")
}
function writePosition(x){
  database.ref("ball/position").update({food:x})

}





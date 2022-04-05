var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}


avg()
function avg() {
  var sum = 0
  for(var i=0 ; i < weight.length; i++){
 sum = weight[i] +sum



  }
  var avgr = sum / weight.length
  console.log(avgr);

}


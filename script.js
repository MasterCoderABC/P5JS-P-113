function preload(){}
function setup(){
  video = createCapture(VIDEO);
  video.hide();
}

function draw(){
  canvas = createCanvas(1200, 420)
  let c = color(33, 146, 255);
  fill(c)
  noStroke();
  circle(30, 30, 50);
  circle(30, 390, 50);
  circle(1170, 390, 50);
  circle(1170, 30, 50);
  c = color(56, 229, 77)
  fill(c)
  noStroke();
  rect(17, 50, 25, 320)
  rect(50, 17, 1100, 25)
  rect(1159, 50, 25, 320)
  rect(50, 380, 1100, 25)
  image(video, 350,42, 470, 338)
}


setInterval(()=>{
  r = Math.floor(Math.random() * 256).toString()
  g = Math.floor(Math.random() * 256).toString()
  b = Math.floor(Math.random() * 256).toString()
  document.getElementById("h1").style.color = "rgb("+r+","+g+","+b+")";
}, 1500)

function take_snapshot(){
  save("myImage.png")
}
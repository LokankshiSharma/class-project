function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
var song = "";

function preload(){
    song = loadSound("music.mp3");
}
function player(){
    song.play();
}
function draw(){
    image (video, 0, 0, 600, 500)
} 
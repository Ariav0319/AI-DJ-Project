song = "";

function preload(){
    song = loadSound("How You Like That.mp3");
    song = loadSound("Ice Cream.mp3"); 
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();

    video = CreateCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}
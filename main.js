var left = "";
var right = "";
var width = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 450);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FF0000');

    fill('#fcba03');
    textSize(width);
    text('Siddhant', 200, 200);
}

function ModelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    console.log(results);

    left = results[0].pose.leftWrist.x;
    right = results[0].pose.rightWrist.x;

    width = Math.floor(left - right);

    document.getElementById('size').innerHTML = width
}
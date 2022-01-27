noseX="";
noseY="";
function preload(){
clown_nose= loadImage("bindi.jpeg");
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw()
{
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,10,10);
}
function take_snapshot()
{
    save("Realtime Filter Image");
}
function modelLoaded()
{
console.log("PoseNet is Initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
console.log(results);
noseX= results[0].pose.leftEye.x-20;  
noseY= results[0].pose.leftEye.y-25;
console.log("Nose x="+noseX);
console.log("Nose y="+noseY);
    }
}
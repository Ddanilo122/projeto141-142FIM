
var som1,som2,som3,som4,som5;
var sons=[]
var i=0
function preload(){
    som1=loadSound('som1.mpeg')
    som2=loadSound('som2.mpeg')
    som3=loadSound('som3.mpeg')
    som4=loadSound('som4.mpeg')
    som5=loadSound('som5.mpeg')
}
function setup(){
    canvas=createCanvas(450,450)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(450,450)
    video.hide()
    
    sons=[som1,som2,som3,som4,som5]

    dj=ml5.poseNet(video,modelReady)
    dj.on('pose',gotPose)
}
function draw(){
    image(video,0,0,450,450)
    
    if(dpontos>0.2){
        circle(xd,yd,20);

        if(dpontos>epontos && !sons[i].isPlaying()){
            pr()
           
        }
    }
   

}
function modelReady(){
    console.log('dj esta pronto para tocar')
}
epontos=0;
dpontos=0
var ye=0
var xe=0
var yd=0
var xd=0
function gotPose(r){
    if(r.length>0){
        console.log(r)
epontos= r[0].pose.keypoints[9].score;
dpontos= r[0].pose.keypoints[10].score;

        ye=r[0].pose.leftWrist.y
        xe=r[0].pose.leftWrist.x
        yd=r[0].pose.rightWrist.y
        xd=r[0].pose.rightWrist.x
    }
}




function start(){
    if(sons[i].isPlaying()){
        document.getElementById('start').innerHTML='tocar'
        sons[i].pause()
    }else{
        document.getElementById('start').innerHTML='parar'
        sons[i].setVolume(0.2)
        sons[i].play()
    }
}
function pr(){
    sons[i].stop()
    i++;
    if(i==sons.length){
        i=0
    }
sons[i].setVolume(0.2);
sons[i].play();
}
function an(){

    if(epontos>0.2){
        circle(xe,ye,20);

        if(i<0 && !sons[i].isPlaying()){
            an()
        }
    }

    sons[i].stop()
        i--;
        if(i<0){
            i=sons.lenght-1
        }
        sons[i].setVolume(0.2);
        sons[i].play()

}







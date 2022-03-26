function preload(){

}

function setup(){
    canvas = createCanvas(600,400);
    canvas.position(120,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,100,100,400,200);

    fill("#42C2FF");
    stroke("#42C2FF");
    circle(60,60,100);

    fill("#42C2FF");
    stroke("#42C2FF");
    circle(540,60,100);

    fill("#42C2FF");
    stroke("#42C2FF");
    circle(60,340,100);

    fill("#42C2FF");
    stroke("#42C2FF");
    circle(540,340,100);

    fill("#42C2FF");
    stroke("#42C2FF");
    rect(50, 60, 20, 280);

    fill("#42C2FF");
    stroke("#42C2FF");
    rect(530, 60, 20, 280);

    fill("#42C2FF");
    stroke("#42C2FF");
    rect(50,50,480,20);

    fill("#42C2FF");
    stroke("#42C2FF");
    rect(50,330,480,20);

}

function take_snapshot(){
    save("colour_filter.png");
}
var mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto,sun;
var mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg, plutoImg,sunImg;
var bg;
var angle = 0;
var anglespeed = 0.2;
var sunRadius;


function preload() {

    mercuryImg    = loadImage("sprites/2_mercury.png");
    venusImg      = loadImage("sprites/3_venus.png");
    earthImg      = loadImage("sprites/4_earth.png");
    marsImg       = loadImage("sprites/5_mars.png");
    jupiterImg    = loadImage("sprites/6_jupiter.png");
    saturnImg     = loadImage("sprites/7_saturn.png");
    uranusImg     = loadImage("sprites/8_uranus.png");
    neptuneImg    = loadImage("sprites/9_neptune.png");
    plutoImg      = loadImage("sprites/10_pluto.png");
    sunImg        = loadImage("sprites/1_sun.png");
    bg            = loadImage("sprites/bg1.png") 
              
}

function setup(){
    var canvas = createCanvas(1200,700);    
    
    sun = createSprite(0, 0);
    sun.addImage("sun",sunImg);
    sun.scale = 0.2;
    sun.setCollider("circle",-85,-60,140);
    sun.debug = true;

    mercury = createSprite(70, 50);
    mercury.addImage("mercury",mercuryImg);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 300);
    mercury.debug = true;

    venus = createSprite(-100, 80);
    venus.addImage("venus",venusImg);
    venus.scale = 0.15;

    earth = createSprite(150, -180);
    earth.addImage("earth",earthImg);
    earth.scale = 0.22;

    mars = createSprite(30, -220);
    mars.addImage("mars",marsImg);
    mars.scale = 0.2;

    jupiter = createSprite(-480, 210);
    jupiter.addImage("jupiter",jupiterImg);
    jupiter.scale = 0.3;

    saturn = createSprite(340, -30);
    saturn.addImage("saturn",saturnImg);
    saturn.scale = 0.3;

    uranus = createSprite(220, 350);
    uranus.addImage("uranus",uranusImg);
    uranus.scale = 0.2;

    neptune = createSprite(-340, -320);
    neptune.addImage("neptune",neptuneImg);
    neptune.scale = 0.1;

}

function draw(){

    background(bg);
    
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

    if (sun.collide(mercury)){
        mercury.destroy();
    }

    angle = angle + anglespeed;
    if (frameCount % 1 === 0 ){

        sun.scale = sun.scale + 0.01
    }
    
    drawSprites();

}



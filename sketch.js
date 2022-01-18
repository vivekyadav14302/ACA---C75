const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, shovel, ball1,ball2,ball3;
var chair1, chair2, umbrella1, umbrella2,basket, backgroundImg;

function preload(){
    backgroundImg = loadImage("./sprites/beach.jpg");
}

function setup(){
    canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width/2,height-10,width,20);
    ball1 = new Ball(500, 320);
    ball2 = new Ball(1500, 320);
    chair1 = new Chair(920, 500);
    umbrella1 = new Umbrella(150, 260, 300, 0)
    ball3 = new Ball(1020,0);

    chair2 = new Chair(1280, 500);
    umbrella2 =  new Umbrella(1100,180,300, 0);
    basket= new Basket(300,500)

    shovel = new Shovel(100,100);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    ball1.display();
    ball2.display();
    chair1.display();
    umbrella1.display();
    basket.display();
    ball3.display();
   
    chair2.display();
    umbrella2.display();

    shovel.display();
}


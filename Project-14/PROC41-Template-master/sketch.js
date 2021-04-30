const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var drops;
var world;

function preload(){

}

function setup(){
   
    createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

    

    dropsDiameter=40;

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });

      Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(230);
  
    drawSprites();
  
    drops.display();
}   


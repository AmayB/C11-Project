var track, trackImage;
var Jaxon, JaxonRunning;
var invisibleWall1, invisibleWall2;


function preload() {
  //pre-load images
  trackImage = loadImage("path.png");
  JaxonRunning = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  track = createSprite(200, 200);
  track.addImage(trackImage);
  track.velocityY = 10;
  track.scale = 1.2;

  Jaxon = createSprite(200, 200);
  Jaxon.addAnimation("Running", JaxonRunning);
  Jaxon.scale = 0.1;

  invisibleWall1 = createSprite(-225, 200, 500, 600);
  invisibleWall2 = createSprite(630, 200, 500, 600);

  invisibleWall1.visible = false;
  invisibleWall2.visible = false;
}

function draw() {
  background(rgb(150, 350, 150));

  if (track.y > 350) {
    track.y = height / 2;
  }

  console.log(track);

  Jaxon.x = World.mouseX;

  Jaxon.collide(invisibleWall1);
  Jaxon.collide(invisibleWall2);

  drawSprites();
}

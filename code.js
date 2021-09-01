var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4fa7458a-2b59-4b7c-9831-f0d856f058d3","03a3876b-002c-4c4d-b53d-1446ce2bd34c"],"propsByKey":{"4fa7458a-2b59-4b7c-9831-f0d856f058d3":{"name":"Sam","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"03a3876b-002c-4c4d-b53d-1446ce2bd34c":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var deaths = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("Sam");
  sam.scale = 0.07;
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("car");
  car1.scale = 0.07;
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("car");
  car2.scale = 0.07;
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("car");
  car3.scale = 0.07;
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("car");
  car4.scale = 0.07;
  
 
//add the velocity to make the car move.
car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;
function draw() {
  World.frameRate = 30;
   background("white");
  text("Deaths: " + deaths,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
//Add the condition to make the sam move left and right
if(keyDown("left")){
  sam.velocityX = -2;
}
else{
  sam.velocityX = 0;
}
if(keyDown("right")){
  sam.velocityX = 2;
}

//Add the condition to reduce the life of sam if it touches the car.
if(sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4)){
  deaths=deaths+1;
  sam.y = 190;
  sam.x = 20;
}
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

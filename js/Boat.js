class Boat {
  constructor(x, y, width, height, boatPos, boatAnimation) {
  
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.speed = 0.05;
    this.height = height;
    this.boatPosition = boatPos;
    this.animation = boatAnimation;
    this.broken = false;
    this.image = loadImage("./assets/boat.png");
    World.add(world, this.body);
  }
  
  animate(){
    this.speed += 0.05;
  }

  remove(index){
    this.animation = bBoatAnimation;
    this.width = 300;
    this.height = 300;
    this.broken = true;
    setTimeout(()=>{
      World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000)
  }

  display() {
    var index = floor(this.speed%this.animation.length);
    
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0, this.boatPosition, this.width, this.height);
    pop();
  }
}

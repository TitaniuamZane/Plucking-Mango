class Mango {
    constructor(x, y, r) {
      var properties = {
        isStatic:true,
        restitution:0,
        friction:0
      }
      this.body = Bodies.circle(x, y, r, properties);
      this.r = r;
      this.image = loadImage("mango.png")
  
      World.add(world, this.body);
    }
    display(){
      
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  }
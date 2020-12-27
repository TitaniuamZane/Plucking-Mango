
class Boy {
    constructor(x, y, width, height) {
      var optn = {
          isStatic : true,
          restitution : 0
      }
      this.body = Bodies.rectangle(x, y, width, height, optn);
      this.width = width;
      this.height = height;
      this.image = loadImage("boy.png")

      World.add(world, this.body);
    }
    display(){
      
      fill("grey");
      var pos = this.body.position;
      translate(pos.x, pos.y);
      imageMode(CENTER);   
      image(this.image, 0, 0, this.width, this.height);
    }
  }
  
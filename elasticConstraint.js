class ElasticConstraint{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.06,
          length: 10
      }
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
  }

    attach(body){
      this.chain.bodyA = body;
    }


    Fly(){
      this.chain.bodyA = null;
    }

 display(){
    if(this.chain.bodyA){
      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
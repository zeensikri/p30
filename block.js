class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.Visibilty = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        //rect(this.body.posiiton.x, this.body.position.y, 50,50);
        pop();
        World.remove(world,this.body);
      }
    }
}

class Ball{
    constructor(x,y){
    var options ={
        isStatic:false,
        restitution:1,
        friction:0,
        density:0.8
     }
     this.x=x;
	 this.y=y;
     this.body = Bodies.circle(this.x,this.y,20,options);
     this.radius = 40;
     World.add(world,this.body);
 }
    display(){
        var pos = this.body.position;
        //var angle =  this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        fill("pink")
        ellipseMode(RADIUS);
        //angleMode(RADIANS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
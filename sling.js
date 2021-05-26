class Sling{
    constructor(bodyA,bodyB, offsetX, offsetY){
        this.offsetX=offsetX
		this.offsetY=offsetY
        var options={
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:1.5,
          length:200,
          pointB:{x:this.offsetX, y:this.offsetY}  
        }
    this.bodyA = bodyA;
    this.bodyB = bodyB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling)
    }
      
    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB=this.sling.bodyB.position;
            var Anchor1X=pointA.x
            var Anchor1Y=pointA.y

            var Anchor2X=pointB.x+this.offsetX
            var Anchor2Y=pointB.y+this.offsetY
           
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
         }
    }
}
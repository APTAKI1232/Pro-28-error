class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }

    fly(){
        this.slingObj.bodyA = null;
    }

    display(){
        
        if(this.stoneObj.bodyA){
            var pointA = this.stoneObj.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#850303");
            line(pointA.x -20, pointA.y, pointB.x +30, pointB.y);
            image(this.stone,pointA.x +25,pointA.y, 15,13)
        }

           

 
}
}

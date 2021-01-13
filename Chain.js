class Chain{

    constructor(body1,body2,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={

            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}

        }

        this.chain= Cons.create(options);
        World.add(world,this.chain);
    }

    display(){

        var Apos= this.chain.bodyA.position;
        var Bpos= this.chain.bodyB.position;
        
        strokeWeight(3);


	var Anchor1X=Apos.x;
	var Anchor1Y=Apos.y;

	var Anchor2X=Bpos.x+this.offsetX
	var Anchor2Y=Bpos.y+this.offsetY

	line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

	}
}
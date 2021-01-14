class Ball{

    constructor(x,y){
    
         var options={
    
                isStatic:false,
                restitution:1.2,
                friction:1,
                density:0.4
    
         }
    
    
      this.body= Bodies.circle(x,y,20,options);
 
      World.add(world,this.body);
    
    
    }
    display(){
    var pos=this.body.position;
    var angle= this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    fill('green');
    ellipseMode(RADIUS);
    ellipse(0,0,20);
    pop ();
    
    
    }
    
    
    
    
    }

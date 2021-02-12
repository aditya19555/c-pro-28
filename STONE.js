class STONE{
    constructor(x,y) {
        var options = {
           
            restitution : 0.05,
            friction : 1,
            density : 1
        }
        this.body = Bodies.circle(x,y,20,options);
        this.r=20;
       
        this.image = loadImage("Plucking mangoes/stone.png");
        
        World.add(world,this.body)
    }
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,2.5*this.r,2.5*this.r);
        pop();

       
        
    }
}
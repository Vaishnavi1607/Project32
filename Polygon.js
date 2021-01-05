class Polygon{
    constructor(x,y,r)
    {
        var options ={
            isStatic:false,
            restitution:0.1,
           friction:0.5,
            density:1.2
        }
       
        this.x= x;
        this.y=y;
        this.r =r;
        
        
       this.image = loadImage("polygon.png")
        
        
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }
    display(){

        var pos =this.body.position;
        push()
        //translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("yellow");
        ellipse(pos.x,pos.y,this.r,this.r);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y-5,this.r+20,this.r+20);
        pop()

      }



}
class Umbrella{
    constructor(x,y){
        this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("download.png")

        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

    }

    display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r,this.r)
            
			ellipse(0,0,this.r, this.r);
			pop()
			
	}
}
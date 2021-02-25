class hexa
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:0.05

			
			}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.image=loadImage("hexa.png");
		this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			//rectMode(CENTER);
			image(this.image,0, 0, this.radius);
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
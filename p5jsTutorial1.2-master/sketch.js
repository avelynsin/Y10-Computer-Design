function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(255,0,0)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
  // Classmate : Elaine
	fill(0,51,153);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,0,0);

	// modifies the thickness of the border of an object
	strokeWeight(3);


	rect(10,10,100,50);
	rect(10,100,100,50);


	fill(7,149,140);
	stroke(255,255,255);
	strokeWeight(10);

	rect(150,10,100,50);
	rect(150,100,100,50);

}

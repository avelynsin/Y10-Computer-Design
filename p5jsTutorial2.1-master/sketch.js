var button2X;
var button2Y;
var button2Z;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;
  button2Z = 290;
  button2A = 400;
}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Practice 1",35,40);




	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,100,50);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("Options",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Options",button2X+30,button2Y+30);
	}

// added
    fill(250,250,250);
    stroke(0,0,0);
    rect(1,448,100,50);

    if (mouseX > 10 && mouseX < 10 + 100 && mouseZ > 10 && mouseZ < 10+100)
	{
	    // Change button color when we move our mouse over it
		fill(100,50,5);
		stroke(51,70,190);
		textSize(16)
		rect(1,448,100,50);
  }
  	else
  	{
  		// Otherwise show the original color
      fill(250,250,250);
      stroke(0,0,0);
      textSize(12)
      rect(1,448,100,50);
  	}

    fill(140,100,205);
    stroke(0,0,0);
    textSize(12);
    text("Avelyn Sin",25,480);

    // added
        fill(250,250,250);
        stroke(0,0,0);
        rect(598,448,100,50);

        if (mouseX > 10 && mouseX < 10 + 100 && mouseA > 10 && mouseA < 10+100)
    	{
    	    // Change button color when we move our mouse over it
    		fill(100,50,5);
    		stroke(51,70,190);
    		textSize(16)
    		rect(598,448,100,50);
      }
      	else
      	{
      		// Otherwise show the original color
          fill(250,250,250);
          stroke(0,0,0);
          textSize(12)
          rect(598,448,100,50);
      	}

        fill(140,100,205);
        stroke(0,0,0);
        textSize(12);
        text("Sin",630,480);



}

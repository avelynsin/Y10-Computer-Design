var b1;
var b2;
var b3;
var b4;

function setup()
{
	createCanvas(500,500);
	//             (x, y, length, height)
	b1 = new Button(10,10,100,25);
	b1.setText("Instructions");
	b1.setTextOver("GO");
	b1.setButtonOverFill(50,255,50);

	b2 = new Button(10,60,100,25);
	b2.setText("Play Easy");
	b2.setTextOver("GO");
	b2.setButtonOverFill(50,255,50);

	b3 = new Button(10,110,100,25);
	b3.setText("Play Hard");
	b3.setTextOver("GO");
	b3.setButtonOverFill(50,255,50);

	b4 = new Button(10,160,100,25);
	b4.setText("High score");
	b4.setTextOver("GO");
	b4.setButtonOverFill(50,255,50);
}

function draw()
{
	background(242,102,102);

// we need a show button
	b1.showButton();
	b2.showButton();
	b3.showButton();
	b4.showButton();

 // have we pressed on b1
	if (b1.getButtonState() == 1)
	{
		// opens a window, targets itself
		window.open("instructions/instructions.html","_self");
	}

	if (b2.getButtonState() == 1)
	{
		// opens a window, targets itself
		window.open("easy/easy.html","_self");
	}

	if (b3.getButtonState() == 1)
	{
		// opens a window, targets itself
		window.open("hard/hard.html","_self");
	}

	if (b4.getButtonState() == 1)
	{
		// opens a window, targets itself
		window.open("highscore/highscore.html","_self");
	}
}

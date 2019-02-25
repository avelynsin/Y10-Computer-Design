var b1;
var b2;

function setup()
{
	createCanvas(500,500);
	//             (x, y, length, height)
	b1 = new Button(10,10,100,25);
	b1.setText("Avelyn Sin");
	b1.setTextOver("GO");
	b1.setTextPressed("GO")
	b1.setButtonOverFill(50,255,50);
}

function draw()
{
	background(255,255,255);

// we need a show button
	b1.showButton();

 // have we pressed on b1
	if (b1.getButtonState() == 1)
	{
		// opens a window, targets itself
		window.open("mainmenu/mainmenu.html","_self");
	}
}

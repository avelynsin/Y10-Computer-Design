var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,150,100,25);
	b1.setText("level1");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);


}

function draw()
{
	background(193,138,236);

	b1.showButton();


	if (b1.getButtonState() == 1)
	{
		window.open("level1/level1.html","_self");
	}

}

var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("Go back");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);


}

function draw()
{
	background(138,148,236);

	b1.showButton();


	if (b1.getButtonState() == 1)
	{
		window.open("../../index.html","_self");
	}
}

var b1;


function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,150,100,25);
	b1.setText("Go Back");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

}

function draw()
{
	background(247,146,146);

	b1.showButton();


	if (b1.getButtonState() == 1)
	{
		window.open("../index.html","_self");
	}

{text("How To Play",10,40)
}




}

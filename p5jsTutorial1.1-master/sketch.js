function setup()
{
  //create a drawing service 57px wide, 80px tall, Classmate: Elaine
  createCanvas(57,80);

}

function draw()
{
  //create a background using RGB values Classmate: Elaine
  background(245,255,92)

  // change the paint brush to a specific color according to RGB values
  fill(255,0,0);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,5,2)
  fill(255,145,0)
  rect(57/2-5/2,80/2-2/2,5,2)
  fill(247,255,0)
  rect(0,77,5,2)
  fill(68,255,0)
  rect(51,0,5,2)
  fill(0,119,255)
  rect(51,77,5,2)
}

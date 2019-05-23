var delayTimer;
var deck;
var flipAnimation;



function setup()
{

createCanvas(1000,600);


var flippedCard = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/1.png');
var card1 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/2.png');
var card2 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/3.png');
var card3 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/4.png');
var card4 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/5.png');
var card5 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/6.png');
var card6 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/7.png');
var card7 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/8.png');
var card8 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/9.png');
var card9 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/10.png');
var card10 = loadImage('https://avelynsin.github.io/Y10-Computer-Design/photos/11.png');

deck = new CardDeck(100,140,4,5,flippedCard,true); // length,height,maxrow,maxcol,flippedCard,random

deck.addCard(card1,0);
deck.addCard(card1,0);
deck.addCard(card2,1);
deck.addCard(card2,1);
deck.addCard(card3,2);
deck.addCard(card3,2);
deck.addCard(card4,3);
deck.addCard(card4,3);
deck.addCard(card5,4);
deck.addCard(card5,5);
deck.addCard(card6,6);
deck.addCard(card6,6);
deck.addCard(card7,7);
deck.addCard(card7,7);
deck.addCard(card8,8);
deck.addCard(card8,8);
deck.addCard(card9,9);
deck.addCard(card9,9);
deck.addCard(card10,10);
deck.addCard(card10,10);


// delay timer
delayTimer = new Timer(0,0,0,0);
// ------- CUSTOM THE 1 LINE OF CODE BELOW ------
delayTimer.setMaxTime(5);  // set timer to countdown from 3 seconds
delayTimer.resetTimer(); // reset the timer

}

function draw()
{
background(0,0,0);

// if the game is finished
if (deck.showDeck() == 1)
{
// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
window.open("mainmenu/mainmenu.html","_self");
}

// everytime a card match has been found DO SOMETHING
if (deck.checkMatch() >= 1)
{
console.log('match found');



// initiate a delay timer when a question is answered
delayTimer.startTimer();
if (delayTimer.isTimerFinished() == true)
{
if (deck.checkMatch() == 1)
{
deck.checkMatch("reset");
// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
}
else if (deck.checkMatch() == 2)
{
deck.checkMatch("remove");
// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
}
delayTimer.resetTimer();
}
}

}

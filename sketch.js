var canvas, backgroundImage;
var playerCount,allPlayers,database;

var distance = 0;
var gameState = 0;

var form, player, game;
//Declare variable to create 4 Cars sprite 
var cars, car1, car2, car3, car4;

function setup()
{
  //we used displayWidth & displayHeight so that our game capture the device size automatically
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  if(playerCount === 4)
  {
    game.update(1);
  }
  if(gameState === 1)
  {
    clear();
    game.play();
  }
}

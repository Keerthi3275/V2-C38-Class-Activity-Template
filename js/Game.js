class Game 
{
  constructor(){}
  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val();})
  }

  update(state)
  {
    database.ref('/').update({gameState: state});
  }

  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      //write code to create Cars Sprite than we will add these cars into the cars array
      
    }
  }

  play()
  {
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined)
    {
      //index of the array
      
      //x and y position of the cars
      

      for(var plr in allPlayers)
      {
        //write code to add 1 to the index for every loop
        
         //write code to position the cars a little away from each other in x direction
        
        //write code to use data from the database to display the cars in y direction
        

        if (index === player.index)
          {
            cars[index-1].shapeColor="red";
            //write code to add Game Camera
            
          }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
}

const team = {
    _players:[
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 38
      },
      {
        firstName: 'Pete', 
        lastName: 'Wheeler', 
        age: 54
      },
      {
        firstName: 'Max', 
        lastName: 'Valero', 
        age: 42
      },
    ],
    _games:[
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Putos',
        teamPoints: 22,
        opponentPoints: 57
      },
      {
        opponent: 'Mexicanos',
        teamPoints: 25,
        opponentPoints: 120
      },
    ],
    get players (){
      return this._players;
    },
    get games (){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
       this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
      };
       this._games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  
  team.addGame('Chicago', 45, 82);
  team.addGame('Bostan', 101, 92);
  team.addGame('Sorongos', 25, 112);
  console.log(team._games);
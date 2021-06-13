const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    switch (userInput){
      case 'rock':
      return userInput;
      break;
      case 'paper':
      return userInput;
      break;
      case 'scissors':
      return userInput;
      break;
      default:
      console.log('wrong option');
    }
  };
  
  //console.log(getUserChoice('rock'));
  
  const getComputerChoice = () => {
    num = Math.floor(Math.random() * 3);
    switch (num){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  };
  
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It is a tie';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer wins';
          } else {
            return 'User wins'; 
            }
          }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'Computer wins'; 
          } else {
            return 'User wins'; 
            }
          }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'Computer wins'; 
          } else { 
            return 'User wins';
            }
          }
      };
  const playGame = (x) => {
    //userChoice = userInput;
    const userChoice = getUserChoice(x);
    const computerChoice = getComputerChoice();
    console.log('User: ' + userChoice);
    console.log('Computer: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame('rock');
  
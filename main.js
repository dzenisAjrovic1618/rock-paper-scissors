//ROCK PAPER SCISSORS?
//  1.  input rock, paper or scissors
//  2.  when rock is chosen: lose when paper, win when scissors, draw when rock
//  3.  when paper is chosen: lose when scissors, win when rock, draw when paper
//  4.  when scissors is chosen: lose when rock, win when paper, draw when scissors
//      anything else maybe?




// function getHumanChoice(myChoice)
// {
//     let x = prompt("What's your choice? ",myChoice)
//     return x;
// }
function getComputerChoice()
{
let n = Math.random();
if(n < 1/3)
{
    n = "rock";
}
else if(n <= 2/3)
{
    n = "paper";
}
else
{
    n = "scissors";
}
return n;
}
//  FUNKTIONIERT
// output: random -> rock paper scissors

function getHumanChoice()
{
    let Choices = 
    {
        ROCK: "rock",
        PAPER: "paper",
        SCISSORS: "scissors"
    };
    let x = prompt("Enter input: ").toLowerCase();
    if(x == Choices.ROCK || x == Choices.PAPER || x == Choices.SCISSORS)
    {
        return x;
    }
    else
    {
        console.error("Invalid input");
        return getHumanChoice();
    }
}
//  funktioniert
//  output: entweder rock, paper oder scissors




function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    function playRound()
    {
        while(humanScore < 5 && computerScore < 5) //   einer von ihnen muss 5 erreichen
        {
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();
            //  if user input is the same as computer generated choice
            console.log(`You chose ${humanChoice}`);
            console.log(`Computer chose ${computerChoice}`);
            if(humanChoice == computerChoice)
                {
                    console.log("It's a tie!")
                }
            else
            {
                //  if user chooses ROCK
                if(humanChoice == "rock")
                {
                    if(computerChoice == "paper")
                    {
                        console.log("You Lose!");
                        computerScore++;
                        console.log("Computer: ", computerScore);
                        console.log("User: ", humanScore);

                    }
                    if(computerChoice == "scissors")
                    {
                        console.log("You win!");
                        humanScore++;
                        console.log("Computer: ", computerScore);
                        console.log("User: ", humanScore);

                    }
                }
                //  if user chooses PAPER
                if(humanChoice == "paper")
                {
                    if(computerChoice == "rock")
         
                       {
                        console.log("You win!");
                        humanScore++;
                        console.log("Computer: ", computerScore);
                        console.log("User: ", humanScore);

                    }
                    if(computerChoice == "scissors")
                    {
                        console.log("You lose!");
                        computerScore++
                        console.log("Computer: ", computerScore);
                        console.log("User: ", humanScore);
                    }
                }
                //  if user chooses SCISSORS
                if(humanChoice == "scissors")
                {
                    if(computerChoice == "rock")
                    {
                        console.log("You lose!");
                        computerScore++;
                        console.log("Computer: ", computerScore);
                        console.log("User: ", humanScore);
                    }
                    if(computerChoice == "paper")
                    {
                        console.log("You win!")
                        humanScore++;
                        console.log("Computer: ", computerScore);
                        console.log("User: ", humanScore);
                    }
                }
            }
        }
        //  who wins?
        if(humanScore == 5)
        {
            console.log("YOU WIN");
        }
        else
        {
            console.log("YOU LOSE");
        }
    }
    playRound();
}
playGame();
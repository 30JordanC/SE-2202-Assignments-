let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initalize the game by setting the value inside next-lbl to nextPlayer
const nextLbl = document.getElementById('next-lbl'); //gets the html get element with the id 'next-lbl'
//nextPlayer = nextLbl.innerText; 
//hint: you could use innerText for this 

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    // for 9 buttons
    for (let i=1; i<=9; i++)
    {
        buttoncontainer = document.getElementById('c' + i);
       const para =  document.createElement('button');
       para.innerText = '[ ]'; // button with square brackets enclosing an empty space
       buttoncontainer.appendChild(para);
    }//end for //this added 9 buttons to the gameboard for c1 to c9, 

    // Programatically add 'takeCell' as an event listener to all the buttons on the board

    let btns = document.querySelectorAll('button'); //an array of all the buttons on the page

    for (let i=0; i<btns.length; i++)
    {
        /*
            Assign an event listener to each of the buttons in btns.
            The event to listen for should be 'click'. You will need to pass 
            the event to takeCell. Review the slides for the trick on how to ]
            pass a parameter.
        */
       btns[i].addEventListener('click', function(event)
    {
        takeCell(event); // will call takeCell and pass the event to it
    })
    }//end for 
}//end createGameBoard

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   buttoncontainer = event.target; // the button that was clicked
    if (nextPlayer === 'X') // if i is even, it's O's turn
    {
    buttoncontainer.innerText = '[' + nextPlayer + ']'; // replace the space inside the square brackets with the value of nextPlayer
    nextPlayer = 'O'; // switch to O
    buttoncontainer.disabled = true; // disable the button after it has been clicked
    }//end if 
    else if (nextPlayer === 'O') // if i is odd, it's X's turn
    {
        buttoncontainer.innerText = '[' + nextPlayer + ']'; // replace the space inside the square brackets with the value of nextPlayer
        nextPlayer = 'X'; // switch to X
        buttoncontainer.disabled = true; // disable the button after it has been clicked
    }//end else
    //console.log(buttoncontainer.innerText);
   // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    

    // Check if the game is over
    if (isGameOver())
    {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let btns = document.querySelectorAll('button'); //an array of all the buttons on the page
    for (let i=0; i<btns.length; i++)
    {
        if (!btns[i].disabled) // if any button is not disabled, the game is not over
        {
            return false; // game is not over
        }
    }
    return true; // all buttons are disabled
}//end isGameOver

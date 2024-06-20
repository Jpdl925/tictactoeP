import { useState } from "react"
import Square from "./Square"

const Board = () => {


// USESTATES
// Status of whether next move is an X or O
  const [xIsNext, setXIsNext] = useState(true);
  // Array of squares current status, all set to null at start but get replaced when user clicks buttons
    const [squares, setSquares] = useState(Array(9))

// Helper function called when any button is clicked, takes in number (i) from corresponding button
    const handleClick = (i:number) => {

      // Checking if button already has a value
      if (squares[i])
        // Button already has a value and will not change
        return;

      // Creating a copy of our original array as to not mess with current array
        const nextSquares = squares.slice();
        // Checking state of whether button will be X or O depending on current turn
        if(xIsNext)
          nextSquares[i] = 'X';
        else
        nextSquares[i] = 'O';

        // Setting our original array to same state as new array after setting state of button to X or O
        setSquares(nextSquares);
        // Changing next time a button is pressed to opposite of current button state (X or O)
        setXIsNext(!xIsNext);
        
    }


  return (
    <>
    {/* BUTTON ROWS */}
    {/* Each button is called from the component Square with props of value (array index current value, starts with null), and onSquareClick (function called, each button has it's own number as an input for the function)*/}
    
    {/* ROW OF BUTTONS 1-3/0-2 */}
    <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
    <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
    <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>

    {/* ROW OF BUTTONS 4-6/3-5 */}
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>

    {/* ROW OF BUTTONS 7-9/6-8 */}
    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    </>
  )
}

export default Board

import { useState } from "react";
import Square from "./Square";

const Board = () => {
  // Function for calculating winner
  const calculateWinner = (squares: []) => {
    // All possible combinations for winner placements
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // For loop going through the array
    for (let i = 0; i < lines.length; i++) {
      // A is set to first value, B is set to second value, C is set to third value from array for each line
      const [a, b, c] = lines[i];
      // Logging out all combinations for visual representation
      console.log("a" + a + " b" + b + " c" + c);
      // Checking if A has a value, if it matches B, and if it matches C
      // If true then returning the value of A which is the winner
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    // No winner, and returns null / continue game
    return null;
  };

  // USESTATES
  // Status of whether next move is an X or O
  const [xIsNext, setXIsNext] = useState(true);
  // Array of squares current status, all set to null at start but get replaced when user clicks buttons
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Winner variable which calls the function for calculating the winner, passing in our original array (squares)
  const winner = calculateWinner(squares);
  // Declaring new variable that is mutable
  let status;
  // Checking if winner is true (if a value was returned)
  if (winner)
    // Declaring the winner
    status = `Winner ${winner}`;
  // No winner still/ continue playing
  else status = `Next player: ${xIsNext ? "X" : "O"}`;

  // Helper function called when any button is clicked, takes in number (i) from corresponding button
  const handleClick = (i: number) => {
    // Checking for winner with current state of buttons
    if (squares[i] || calculateWinner(squares)) return;

    // Checking if button already has a value
    if (squares[i])
      // Button already has a value and will not change
      return;

    // Creating a copy of our original array as to not mess with current array
    const nextSquares = squares.slice();
    // Checking state of whether button will be X or O depending on current turn
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";

    // Setting our original array to same state as new array after setting state of button to X or O
    setSquares(nextSquares);
    // Changing next time a button is pressed to opposite of current button state (X or O)
    setXIsNext(!xIsNext);
  };

  return (
    <>
      {/* ---------------------------------------GAME BOARD------------------------------------------------- */}
      <div className="game">
        <div className="game-board">
          {/* BUTTON ROWS */}
          {/* Each button is called from the component Square with props of value (array index current value, starts with null), and onSquareClick (function called, each button has it's own number as an input for the function)*/}

          {/* Status line checking for winner & stating next turn */}
          <div className="status">{status}</div>
          {/* ROW OF BUTTONS 1-3/0-2 */}
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>

          {/* ROW OF BUTTONS 4-6/3-5 */}
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>

          {/* ROW OF BUTTONS 7-9/6-8 */}
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;

import { useState } from "react";
import Board from "./Board";
import { Button, Center } from "@chakra-ui/react";

const Game = () => {
  // USE STATES
  // Checking for current and next move state (X or O)

  //History array for move history and jumpto function
  const [history, setHistory] = useState([Array(9).fill(null)]);
  //Checking for current move number
  const [currentMove, setCurrentMove] = useState(0);
  // Changing to move X if move is even
  const xIsNext = currentMove % 2 === 0;
  //Setting current array to history-1 for most current status of board
  const currentSquares = history[currentMove];

  //   Function taking in current array state copy
  const handlePlay = (nextSquares:any) => {
    // Creating a new history array to old and current array / all current arrays
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // Setting current history to current state of array
    setHistory(nextHistory);
    // Current move set to length of history array - 1
    setCurrentMove(nextHistory.length - 1);
    // Checking status of arrays inside the history array and current move
    console.log(`history is ${history}`);
    console.log(`nextHistory is ${nextHistory}`);
    console.log(`currentMove is ${currentMove}`);
  };

  //   Function to jump to move that user has selected
  const jumpTo = (nextMove:any) => {
    // Setting current move to move user has selected
    setCurrentMove(nextMove);
  };
  // Reset button sets move to 0, and erases Array
  const resetGame = () => {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)])
  }
  // Mapping out all the moves made (squares is reading the whole array, move is reading the number of arrays)
  const moves = history.map((squares, move) => {
    // Visual representation of squares and move
    console.log(`Squares is ${squares}`);
    console.log(`moves is ${move}`);

    // Description variable created for each button
    let description;
    // Description for each following move
    if (move > 0) description = `Go to move #${move}`;
    // Starting description
    else description = `Go to game start`;

    // Creating an element for each move made
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div  className="game">
        <div className="game-board">
          <Board 
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
      <Button onClick={resetGame} justifySelf={"center"} marginTop={20}>Reset Game</Button>
    </>
  );
};

export default Game;

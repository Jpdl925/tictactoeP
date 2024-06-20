// Props that are passed into the function from the parent Component (Board.tsx)
interface SquareProps {
    // Current value (display value) that is rendered
    value:string;
    // Function that is called from parent Component (Board.tsx)
    onSquareClick: () => void;
}

const Square = ({value,onSquareClick}:SquareProps) => {




  return (
    <>
    {/* Button rendered with function prop, and it's own value */}
        <button onClick={onSquareClick} className="square">{value}</button>
    </>
  )
}

export default Square
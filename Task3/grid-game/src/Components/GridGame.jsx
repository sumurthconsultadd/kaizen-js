import { useCallback, useEffect, useState } from "react";
import { Button } from "antd";
import "../CSS/grid.css";
import { handleInaction, keyPressUtil, selectUtil } from "../Utils/gridutils";

const GridGame = () => {
  const [numRows, setNumRows] = useState(5);
  const [numCols, setNumCols] = useState(5);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  const handleArrowKey = useCallback(
    (direction) => {
      if (direction === "up") {
        currentRow === 0 ? handleInaction() : setCurrentRow(currentRow - 1);
      } else if (direction === "down") {
        currentRow === numRows - 1
          ? handleInaction()
          : setCurrentRow(currentRow + 1);
      } else if (direction === "left") {
        currentCol === 0 ? handleInaction() : setCurrentCol(currentCol - 1);
      } else if (direction === "right") {
        currentCol === numCols - 1
          ? handleInaction()
          : setCurrentCol(currentCol + 1);
      }
    },
    [numRows, numCols, currentRow, currentCol]
  );

  const handleResizeGrid = (newRows, newCols) => {
    setCurrentRow(0);
    setCurrentCol(0);
    setNumRows(newRows);
    setNumCols(newCols);
  };

  const handleKeyPress = useCallback(
    (event) => keyPressUtil(event, handleArrowKey),
    [handleArrowKey]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="grid-outer">
      <div className="grid-container">
        {[...Array(numRows)].map((_, row) => (
          <div className="row" key={row}>
            {[...Array(numCols)].map((_, col) => (
              <div
                key={col}
                className={`cell ${
                  row === currentRow && col === currentCol ? "current-cell" : ""
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="button-container">
        {["Up", "Down", "Left", "Right"].map((item) => (
          <Button key={item} onClick={() => handleArrowKey(item.toLowerCase())}>
            {item}
          </Button>
        ))}
      </div>
      <div className="input-container">
        {["Rows", "Cols"].map((item) =>
          selectUtil(item, numRows, numCols, handleResizeGrid)
        )}
      </div>
    </div>
  );
};

export default GridGame;

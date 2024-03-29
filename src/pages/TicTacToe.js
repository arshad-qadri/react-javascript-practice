import React from 'react'
import TicTacToeComp from '../components/TicTacToeComp'
import Main from '../components/Main'

const TicTacToe = () => {
  const code = `
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TicTacToeComp = () => {
  const [isX, setIsX] = useState(true);
  const [gameStatus, setGameStatus] = useState(null);
  const [boxs, setBoxs] = useState([
    { box: 1, value: "" },
    { box: 2, value: "" },
    { box: 3, value: "" },
    { box: 4, value: "" },
    { box: 5, value: "" },
    { box: 6, value: "" },
    { box: 7, value: "" },
    { box: 8, value: "" },
    { box: 9, value: "" },
  ]);
  const winningPatter = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const handleClick = (index) => {
    let value = isX ? "X" : "O";
    let boxNewVal = [...boxs];
    if (boxNewVal.every((item) => item.value !== "") || gameStatus) {
      return;
    }

    if (boxNewVal[index].value) {
      return;
    }
    boxNewVal[index].value = value;
    setBoxs(boxNewVal);
    setIsX(!isX);
  };
  useEffect(() => {
    if (gameStatus) {
      alert(\`\${
          gameStatus?.toLowerCase()?.includes("winner") ? "Bhoom," : ""
        } \${gameStatus} !\`
      );
    }
    // console.log("gameStatus===", gameStatus);
  }, [gameStatus]);
  useEffect(() => {
    for (let i = 0; i < winningPatter.length; i++) {
      const [x, y, z] = winningPatter[i];
      if (boxs[x].value) {
        if (
          boxs[x].value === boxs[y].value &&
          boxs[x].value === boxs[z].value
        ) {
          setGameStatus(\`Winner is \${boxs[x].value}\`);
          return;
        }
      }
    }
    if (boxs.every((item) => item.value !== "")) {
      setGameStatus(\`Match is draw\`);
    }
  }, [boxs]);

  return (
    <div className="tic-tac-toe-container">
      <h1 style={{ marginBottom: "30px", fontSize: "40px" }}>Tic Tac Toe</h1>
      <div className="tic-tac-toe">
        {boxs.map((item, index) => {
          return (
            <div
              className="box"
              key={item.box}
              onClick={() => handleClick(index)}
            >
              {item.value}
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        {gameStatus ? (
          <div>
            <h1>{gameStatus} !</h1>
            <button className="btn" onClick={() => window.location.reload()}>
              Play Again
            </button>
          </div>
        ) : (
          <h1>Now {isX ? "X" : "O"}'s turn</h1>
        )}
      </div>
    </div>
  );
};

export default TicTacToeComp;
`
const css = `
// Css
.tic-tac-toe-container {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tic-tac-toe {
  width: 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid #070707;
}
.box {
  height: 60px;
  border: 1px solid #070707;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  cursor: pointer;
}
.btn {
  padding: 5px 20px;
  background-color: orange;
  margin-top: 10px;
}
h1 {
  font-size: 20px;
  font-weight: bold;
}`
  return (
    <Main Component={TicTacToeComp} code={code} css={css}/>
  )
}

export default TicTacToe
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [ gameTurns, setGameTurns] =  useState([]);

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player playerName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  );
}

export default App;

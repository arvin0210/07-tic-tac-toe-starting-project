import { useState } from "react";

export default function Player({ playerName, symbol, isActive }) {
  const [buttonLabel, setButtonLabel] = useState("Edit");
  const [playName, setPlayName] = useState(playerName);
  const [playerLogic, setPlayerLogic] = useState(<span className="player-name">{playName}</span>);

  function handleClickLabel() {
    if (buttonLabel === "Edit") {
      setButtonLabel("Save");
      setPlayerLogic(<input type='text' required defaultValue={playName} onChange={ev => setPlayName(ev.target.value)} />);      
    } else {
      setButtonLabel("Edit");
      setPlayerLogic(<span className="player-name">{playName}</span>);
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerLogic}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickLabel}>{buttonLabel}</button>
    </li>
  );
}

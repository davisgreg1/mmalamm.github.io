import React from "react";
import ReactDOM from "react-dom";

import Game from "./game/game";

const name = "Ayesha";
const game = new Game(name);
game.addAiPlayer("Laila");
game.addAiPlayer("Hana");
game.addAiPlayer("Zara");
game.play();

import App from "./gui/app.js";

const rootElement = document.getElementById("app");

ReactDOM.render(<App game={game} />, rootElement);

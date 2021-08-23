
import React from "react";
import * as Minesweeper from "../../minesweeper";
import Board from './BoardComponent'

class Game extends React.Component {
    constructor() {
        super();
        // debugger
        let numBombs = Math.ceil(Math.random() * 5);
        this.state = {
            board: new Minesweeper.Board(10, numBombs)
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {

        return (
            <div className="game">
                <Board updateGame={this.updateGame} board={this.state.board}> </Board>
            </div>
        )
    }
}

export default Game;
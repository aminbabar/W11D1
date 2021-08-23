
import React from "react";
import * as Minesweeper from "../../minesweeper";


class Game extends React.Component {
    constructor() {
        this.state = {
            board: new Minesweeper.board()
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {

        return (
            <Board updateGame={this.updateGame} board={this.state.board}> </Board>
        )
    }
}
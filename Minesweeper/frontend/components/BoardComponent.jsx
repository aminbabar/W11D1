import React from "react";
import Tile from './TileComponent'

class Board extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        let row = this.props.board.grid.map((row, idx1) => {
            return (<div key={idx1}> 
                {row.map((tile, idx2) => {
                    return (
                    <div key={idx2}>
                        <Tile tile={tile} updateGame={this.props.updateGame} />
                    </div>
                    )
                })}
            </div>)
        });
        return (
            <div>
                {row}
            </div>
            // <Tile updateGame= {this.props.updateGame} />
        )
    }
}

export default Board;
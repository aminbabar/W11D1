import React from "react";
import Tile from './TileComponent'

class Board extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        let row = this.props.board.grid.map((row, idx1) => {
            return (<div> 
                {row.map((tile, idx2) => {
                    return <Tile tile={tile} updateGame={this.props.updateGame} /> 
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
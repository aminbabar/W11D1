import React from "react";
import Tile from './TileComponent'

class Board extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Tile updateGame= {this.props.updateGame} />
        )
    }
}

export default Board;
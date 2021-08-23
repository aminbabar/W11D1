import React from "react";

class Tile extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        let numBombs = 0

        if (this.props.tile.explored) {
            numBombs = this.props.tile.adjacentBombCount();
            return <span>{numBombs}</span>
        } else if(this.props.tile.bombed) {
            return <span>&#128163;</span>
        } else if(this.props.tile.flagged) {
            return <span>&#128681;</span>
        }
        return (
            <h1>{numBombs}</h1>
        )
    }
}

export default Tile;
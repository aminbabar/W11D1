import React from "react";

class Tile extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        // debugger
        if (!e.target.classList.contains("revealed")) {
            e.target.classList.add("revealed");
        }
        this.props.updateGame();
    }

    render() {
        let text = "";

        if (this.props.tile.explored) {
            let numBombs = this.props.tile.adjacentBombCount();
            text = <span>{numBombs}</span>
        } else if(this.props.tile.bombed) {
            text = <span>&#128163;</span>
        } else if(this.props.tile.flagged) {
            text = <span>&#128681;</span>
        }
        return (
            <div className="tile" onClick={this.handleClick}>
                {text}
            </div>
        )
    }
}

export default Tile;
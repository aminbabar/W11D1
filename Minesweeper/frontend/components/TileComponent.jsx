import React from "react";

class Tile extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        // debugger
        if (e.target.classList.contains("bombed")) {
            // let span = <span>&#128163;</span>;
            e.target.classList = "tile red";
        }
        if(e.altKey) {
            // debugger
            this.props.updateGame(this.props.tile, true);
        } else {
            this.props.updateGame(this.props.tile, false)
        }

        // if (!e.target.classList.contains("revealed")) {
        //     e.target.classList.add("revealed");
        // }
        
    }

    render() {
        let text = "";
        let classes = "tile";

        if (this.props.tile.bombed) {
            text = <span id="bomb">&#128163;</span>
            classes += " bombed";
        }
        else if (this.props.tile.explored ) {
            debugger;
            let numBombs = this.props.tile.adjacentBombCount();
            text = <span>{numBombs}</span>
            classes += " revealed";
        }  else if(this.props.tile.flagged) {
            text = <span>&#128681;</span>
        }
        return (
            <div className={classes} onClick={this.handleClick}>
                {text}
            </div>
        )
    }
}

export default Tile;
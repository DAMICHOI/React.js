import React from "react";
import Counter from './Counter';
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

export const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
                {props.name}
            </span>
            <Counter id={props.id} score={props.score}/>
        </div>
    );
}

const mapActionToProps = (dispatch) => ({
    removePlayer: (id) => dispatch(removePlayer(id))
});

export default connect(null, mapActionToProps)(Player)
import React from "react";
import {changeScore} from "../redux/actions";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";

export class Counter extends React.Component {

    /*
    constructor() {
        super();

        this.state = {
            score: 0
        }
    }
    */

    handleChange = (delta) => {
        console.log(this);
        this.setState(prevState => ({score: prevState.score + delta}));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.id, -1)}> - </button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
            </div>
        );
    }
}

const mapActionToProps = (dispatch) => ({
    changeScore: (id, delta) => dispatch(changeScore(id, delta))
});

export default connect(null, mapActionToProps)(Counter)
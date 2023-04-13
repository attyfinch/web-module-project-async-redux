import React from "react";
import { connect } from 'react-redux'
import { getJoke, wasFunny } from "../actions";


const Jokes = (props) => {


    return (
        <>
            <h3>Setup</h3>
            <div>{props.setup}</div>
            <h3>Punchline</h3>
            <div>{props.punchline}</div>
            <br></br>
            <button onClick={() => props.getJoke()}>Get a New Joke</button>
            <div><br></br></div>
            <div>
                <button onClick={() => props.wasFunny()}>That was funny</button>
                <h2>{props.funny} jokes out of {props.jokeCount} have been funny</h2>
            </div>
            
        </>
    )
       
};

const mapStateToProps = state => {
    return {
        setup: state.setup,
        punchline: state.punchline,
        funny: state.funny,
        jokeCount: state.jokeCount
    };
};


export default connect(mapStateToProps, { getJoke, wasFunny })(Jokes);


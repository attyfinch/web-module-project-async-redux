import React from "react";
import { connect } from 'react-redux'


const Jokes = (props) => {


    return (
        <>
            <h2>Setup</h2>
            <div>{props.setup}</div>
            <h2>Punchline</h2>
            <div>{props.punchline}</div>
            <br></br>
            <button>Get a New Joke</button>
        </>
    )
       
};

const mapStateToProps = state => {
    return {
        setup: state.setup,
        punchline: state.punchline
    };
};


export default connect(mapStateToProps, {})(Jokes);


import axios from "axios";
export const JOKE_COUNT = "GET_JOKE";
export const GET_SETUP = "GET_SETUP";
export const GET_PUNCHLINE = "GET_PUNCHLINE";
export const WAS_FUNNY = "WAS_FUNNY";


export const getJoke = () => dispatch => {
    axios.get('https://official-joke-api.appspot.com/jokes/random')
        .then(res => {
            const setup = res.data.setup;
            const punchline = res.data.punchline;
            dispatch(getSetup(setup))
            dispatch(getPunchline(punchline))
            dispatch(jokeCount());
        })
}

export const jokeCount = () => {
    return {type: JOKE_COUNT}
}

export const getSetup = (setup) => {
    return {type: GET_SETUP, payload: setup}
}

export const getPunchline = (punchline) => {
    return {type: GET_PUNCHLINE, payload: punchline}
}

export const wasFunny = () => {
    return {type: WAS_FUNNY}
}
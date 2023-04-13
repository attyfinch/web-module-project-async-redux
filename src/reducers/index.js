import { GET_PUNCHLINE, GET_SETUP, WAS_FUNNY, JOKE_COUNT } from "../actions";

const initialState = {
    setup: 'why did the chicken cross the road?',
    punchline: 'to get to the other side!',
    funny: 0,
    jokeCount: 0
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SETUP:
            return {...state, setup: action.payload}
        case GET_PUNCHLINE:
            return {...state, punchline: action.payload}
        case WAS_FUNNY:
            return {...state, funny: state.funny + 1}
        case JOKE_COUNT:
            return {...state, jokeCount: state.jokeCount + 1}
        default:
            return state;
    }
};
import { LOAD_PLAYERS, FILTER_PLAYERS } from '../constants/actionTypes';

const initialState = {
    players: undefined,
    filters: undefined
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PLAYERS:
            return {
                ...state,
                players: action.players
            }
        case FILTER_PLAYERS:
            return {
                ...state,
                filters: action.filters
            }
        default:
            return state;
    }
};

export { reducer };

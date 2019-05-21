const initialState = {
    players: undefined,
    filters: undefined
}

const reducer = (state, action) => {
    if(action.type === "LOAD_PLAYERS") {
        return {
            ...state,
            players: action.players
        }
    } else if (action.type === "FILTER_PLAYERS") {
        return {
            ...state,
            filters: action.filters
        }
    }
    return state;
};

export { reducer, initialState };

const initialState = {
    players: undefined
}

const reducer = (state, action) => {
    if(action.type === "GET_ALL_PLAYERS") {
        return {
            ...state,
            players: action.players
        }
    }
    return state;
};

export { reducer, initialState };

const getAllPlayers = () => {
    return dispatch => {
        fetch("https://football-players-b31f2.firebaseio.com/players.json")
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: "GET_ALL_PLAYERS",
                players: data
            })
        });
    }
}

export { getAllPlayers }

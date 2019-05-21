const addPlayersAge = players => {
    const auxPlayers = players.map(player => {
        const birthDay = new Date(player.dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - birthDay.getFullYear();
        return { ...player, 'age': age };
    });
    return auxPlayers;
}

const getAllPlayers = () => {
    return dispatch => {
        fetch("https://football-players-b31f2.firebaseio.com/players.json")
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "GET_ALL_PLAYERS",
                    players: addPlayersAge(data)
                })
            });
    }
}

export { getAllPlayers }

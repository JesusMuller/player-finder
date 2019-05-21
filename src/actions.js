//this is function helper to add an age key to players
function addPlayersAge(players) {
    const auxPlayers = players.map(player => {
        const birthDay = new Date(player.dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - birthDay.getFullYear();
        return { ...player, 'age': age };
    });
    return auxPlayers;
};

const loadPlayers = () => {
    return dispatch => {
        fetch("https://football-players-b31f2.firebaseio.com/players.json")
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "LOAD_PLAYERS",
                    players: addPlayersAge(data)
                })
            });
    }
}

const filterPlayers = (filters) => {
    return {
        type: "FILTER_PLAYERS",
        filters: filters
    }
}

export { loadPlayers, filterPlayers }

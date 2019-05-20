const getAllPlayers = () => {
    const players = [{'name': 'jesus'}, {'name':'lucia'}];
    return {
        type: "GET_ALL_PLAYERS",
        players: players
    }
}

export { getAllPlayers }

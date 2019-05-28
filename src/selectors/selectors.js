const nameCondition = (playerName, nameFromFilter) => {
    const NormalizedFilterName = nameFromFilter.toUpperCase();
    const NormalizedPlayerName = playerName.toUpperCase();
    return (NormalizedFilterName === "" || NormalizedPlayerName.indexOf(NormalizedFilterName) > -1) ?
        true : false
};

const positonCondition = (playerPosition, positionFromFilter) => {
    return positionFromFilter === "" || playerPosition === positionFromFilter;
};

const ageCondition = (playerAge, ageFromFilter) => {
    return ageFromFilter === "" || playerAge === Number(ageFromFilter);
};

const filterPlayers = (players, filters) => {
    return players.filter(player => ageCondition(player.age, filters.age) &&
        positonCondition(player.position, filters.position) &&
        nameCondition(player.name, filters.name));
};

const getPlayers = (players, filters) => {
    return (filters) ? filterPlayers(players, filters) : players;
};

export { getPlayers };

/**
 * If anme is empty will return all
 * If name is valid will return matched players
 */
const filterByName = (players, name) => {
    const auxPlayers = [...players];
    return auxPlayers.filter(player => {
        const filterName = name.toUpperCase();
        const playerName = player.name.toUpperCase();
        if (name === "") {
            return true;
        } else if (playerName.indexOf(filterName) > -1) {
            return true;
        } else {
            return false;
        }
    });
};

/**
 * If position is empty will return all
 * If a position was selected will return matched players
 */
const filterByPosition = (players, position) => {
    const auxPlayers = [...players];
    return auxPlayers.filter(player => position === "" || player.position === position);
};

/**
 * If age field is empty will return all
 * If age is valid will return matched players
 */
const filterByAge = (players, age) => {
    const auxPlayers = [...players];
    return auxPlayers.filter(player => age === "" || player.age === Number(age));
};

const filterPlayers = (players, filters) => {
    const playersFiltedByName = filterByName(players, filters.name);
    const playersFilteredByPosition = filterByPosition(playersFiltedByName, filters.position);
    const playersFiltered = filterByAge(playersFilteredByPosition, filters.age);
    return playersFiltered;
};

const getPlayers = (players, filters) => {
    return (filters) ? filterPlayers(players, filters) : players;
};

export { getPlayers };

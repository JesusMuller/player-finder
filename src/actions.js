import { HOST, PLAYERS_ENDPOINT } from './constants';
import { LOAD_PLAYERS, FILTER_PLAYERS } from './actionTypes';

const loadPlayers = () => {
    return dispatch => {
        return fetch(`${HOST}/${PLAYERS_ENDPOINT}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: LOAD_PLAYERS,
                    players: addPlayersAge(data)
                })
            }).catch(execption =>
                console.log('Service has failed' + execption)
            );
    }
}

const filterPlayers = (filters) => {
    return {
        type: FILTER_PLAYERS,
        filters: filters
    }
}

export { loadPlayers, filterPlayers }

// This is function helper to add an age key to players
function addPlayersAge(players) {
    let auxPlayers = [];
    auxPlayers = players.map(player => {
        const birthDay = new Date(player.dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - birthDay.getFullYear();
        return { ...player, 'age': age };
    });
    return auxPlayers;
};

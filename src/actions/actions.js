import { HOST, PLAYERS_ENDPOINT } from '../constants/constants';
import { LOAD_PLAYERS, FILTER_PLAYERS } from '../constants/actionTypes';
import { addPlayersAge } from '../helpers/addPlayersAge';

const loadPlayers = () => {
    return async dispatch => {
        const response = await fetch(`${HOST}/${PLAYERS_ENDPOINT}`);
        const data = await response.json();
        dispatch({
            type: LOAD_PLAYERS,
            players: addPlayersAge(data)
        });
    }
}

const filterPlayers = (filters) => {
    return {
        type: FILTER_PLAYERS,
        filters: filters
    }
}

export { loadPlayers, filterPlayers };

import { HOST, SERVICE_FAILED, PLAYERS_ENDPOINT } from '../constants';
import { LOAD_PLAYERS, FILTER_PLAYERS } from '../actionTypes';
import { addPlayersAge } from '../helpers/addPlayersAge';

const loadPlayers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${HOST}/${PLAYERS_ENDPOINT}`);
            const data = await response.json();
            dispatch({
                type: LOAD_PLAYERS,
                players: addPlayersAge(data)
            });
        }
        catch (execption) {
            return alert(`${SERVICE_FAILED} ${execption}`);
        }
    }
}

const filterPlayers = (filters) => {
    return {
        type: FILTER_PLAYERS,
        filters: filters
    }
}

export { loadPlayers, filterPlayers };

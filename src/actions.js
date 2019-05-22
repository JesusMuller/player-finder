import { HOST, SERVICE_FAILED, PLAYERS_ENDPOINT } from './constants';
import { LOAD_PLAYERS, FILTER_PLAYERS } from './actionTypes';
import { addPlayersAge } from './helpers/addPlayersAge';

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
                alert(`${SERVICE_FAILED} ${execption}`)
            );
    }
}

const filterPlayers = (filters) => {
    return {
        type: FILTER_PLAYERS,
        filters: filters
    }
}

export { loadPlayers, filterPlayers };

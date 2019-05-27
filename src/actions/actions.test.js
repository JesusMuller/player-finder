import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loadPlayers, filterPlayers } from './actions';
import { LOAD_PLAYERS, FILTER_PLAYERS } from '../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('should create an action to filter players', () => {
        const filters = { name: 'rojo', position: 'defensive', age: '26' };
        const expectedAction = {
            type: FILTER_PLAYERS,
            filters
        }
        expect(filterPlayers(filters)).toEqual(expectedAction);
    });

    it('creates LOAD_PLAYERS when fetching players has been done', () => {
        fetchMock.getOnce('https://football-players-b31f2.firebaseio.com/players.json', {
            body: [{
                "contractUntil": "2022-06-30",
                "dateOfBirth": "1993-05-13",
                "jerseyNumber": 9,
                "name": "Romelu Lukaku",
                "nationality": "Belgium",
                "position": "Centre-Forward"
            }],
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            {
                type: LOAD_PLAYERS,
                players: [{
                    "age": 26,
                    "contractUntil": "2022-06-30",
                    "dateOfBirth": "1993-05-13",
                    "jerseyNumber": 9,
                    "name": "Romelu Lukaku",
                    "nationality": "Belgium",
                    "position": "Centre-Forward"
                }]
            }
        ]
        const store = mockStore({ players: [] });

        return store.dispatch(loadPlayers()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});

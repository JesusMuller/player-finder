import { reducer } from './reducer';

const initialState = {
    players: undefined,
    filters: undefined
};

describe('Only reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('Should return initial state when action type is not registered', () => {
        expect(reducer(initialState, { type: "NO_REGISTED_ACTION" })).toEqual(initialState);
    });

    it('Should return state with players when action type is LOAD_PLAYERS', () => {
        const players = [{ name: 'rojo', position: 'defensive', age: 26 }];
        const expectedState = {
            players: [{ name: 'rojo', position: 'defensive', age: 26 }],
            filters: undefined
        };

        expect(reducer(initialState, { type: "LOAD_PLAYERS", players })).toEqual(expectedState);
    });

    it('Should return state with filters when action type is FILTER_PLAYERS', () => {
        const filters = { name: '', position: 'keeper', age: 26 };
        const expectedState = {
            players: undefined,
            filters: { name: '', position: 'keeper', age: 26 }
        };

        expect(reducer(initialState, { type: "FILTER_PLAYERS", filters })).toEqual(expectedState);
    });
});

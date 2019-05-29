import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Index from './index';

const mockStore = configureMockStore();

describe('PlayerInformationTable connector', () => {
    let wrapper, store;

    const initialState = {
        players: [],
        loadPlayers: jest.fn()
    };

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(
            <Index store={store} />
        );
    });

    it('should plass "players" from store', () => {
        expect(wrapper.find('PlayerInformationTable').props().players).toEqual(initialState.players);
    });

    // TODO

});
import React from 'react';
import { shallow } from 'enzyme';
import PlayerInformationTable from './player-information-table';

describe('<PlayerInformationTable />', () => {
    it('Should render an LOADING <span> while service is fetching', () => {
        const loadPlayers = jest.fn();
        const wrapper = shallow(<PlayerInformationTable loadPlayers={loadPlayers} />);
        
        expect(wrapper.find('span').props().children).toEqual('Loading...');
    });

    it('Should render an NO RESULTS <span> if service returns 0 players', () => {
        const loadPlayers = jest.fn();
        const players = [];
        const wrapper = shallow(<PlayerInformationTable loadPlayers={loadPlayers}
            players={players} />);

        expect(wrapper.find('span').props().children)
            .toEqual("No results were found for given filters. Please try other values");
    });

    it('Should render an <table> if service returns players', () => {
        const loadPlayers = jest.fn();
        const players = [{
            name: 'Marcos Rojo',
            position: 'Centre-Back',
            nationality: 'Argentina',
            age: '29'
        }];
        const wrapper = shallow(<PlayerInformationTable loadPlayers={loadPlayers}
            players={players} />);

        expect(wrapper.find('table')).toHaveLength(1);
    });
});

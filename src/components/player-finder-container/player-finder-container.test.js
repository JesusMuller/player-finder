import React from 'react';
import { shallow } from 'enzyme';
import PlayerFinderContainer from './player-finder-container';

describe('<PlayerFinderContainer />', () => {
    it('Should match snapshot', () => {
        const wrapper = shallow(<PlayerFinderContainer />);
        expect(wrapper).toMatchSnapshot();
    });
});

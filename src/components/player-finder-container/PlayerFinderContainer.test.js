import React from 'react';
import { shallow } from 'enzyme';
import PlayerFinderContainer from './PlayerFinderContainer';

describe('<PlayerFinderContainer />', () => {
    it('Should match snapshot', () => {
        const wrapper = shallow(<PlayerFinderContainer />);
        expect(wrapper).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import SectionTile from './SectionTitle';

describe('<SectionTitle />', () => {
    it('Should match snapshot', () => {
        const wrapper = shallow(<SectionTile textToShow="dummy title" />);
        expect(wrapper).toMatchSnapshot();
    });
});

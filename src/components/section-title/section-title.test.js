import React from 'react';
import { shallow } from 'enzyme';
import SectionTile from './section-title';

describe('<SectionTitle />', () => {
    it('Should match snapshot', () => {
        const wrapper = shallow(<SectionTile textToShow="dummy title" />);
        expect(wrapper).toMatchSnapshot();
    });
});

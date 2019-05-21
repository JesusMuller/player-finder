import React from 'react';
import { shallow } from 'enzyme';
import SectionTile from './section-title';

describe('<SectionTitle />', () => {
    it('Should render an <h1> with a text inside', () => {
        const wrapper = shallow(<SectionTile textToShow="dummy title" />);
        expect(wrapper).toMatchSnapshot();
    });
});

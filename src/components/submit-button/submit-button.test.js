import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from './submit-button';

describe('<SubmitButton />', () => {
    it('Should match snapshot', () => {
        const wrapper = shallow(<SubmitButton buttonText="Search" />);
        expect(wrapper).toMatchSnapshot();
    });
});

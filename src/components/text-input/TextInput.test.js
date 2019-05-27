import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('<TextInput />', () => {
    it('Should render an <input>', () => {
        const wrapper = shallow(<TextInput />);
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('Should render an <input> with as "textInput" class', () => {
        const wrapper = shallow(<TextInput />);
        expect(wrapper.find('input').props().className).toEqual('textInput');
    });

    it('Should render an <input> with a placeHolder when', () => {
        const wrapper = shallow(<TextInput placeHolder="Player Name" />);
        expect(wrapper.find('input').props().placeholder).toEqual('Player Name');
    });

    it('Should render an <span> with a error message if "errorMessage" prop is passed', () => {
        const wrapper = shallow(<TextInput errorMessage="No results found" />);
        expect(wrapper.find('span').props().children).toEqual('No results found');
    });
});

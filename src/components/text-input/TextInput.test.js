import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

const setProps = {
    inputValue: 'playerName',
    onChangeHandler: jest.fn()
};

describe('<TextInput />', () => {
    it('Should render an <input>', () => {
        const wrapper = shallow(<TextInput {...setProps} />);
        expect(wrapper.find('input')).toHaveLength(1);
    });

    it('Should render an <input> with a "textInput" class', () => {
        const wrapper = shallow(<TextInput {...setProps} />);
        expect(wrapper.find('input').props().className).toEqual('textInput');
    });

    it('Should render an <input> with a value equal to "inputValue" prop', () => {
        const wrapper = shallow(<TextInput {...setProps} />);
        expect(wrapper.find('input').props().value).toEqual('playerName');
    });

    it('Should call onChangeHandler when onChange event is dipatched', () => {
        const wrapper = shallow(<TextInput {...setProps} />);
        wrapper.find('input').simulate('change');
        expect(setProps.onChangeHandler).toHaveBeenCalledTimes(1);
    });

    it('Should render an <input> with a placeHolder when "placeHolder" prop is passed', () => {
        const placeHolder = "Player Name"
        const wrapper = shallow(<TextInput {...{ ...setProps, placeHolder }} />);
        expect(wrapper.find('input').props().placeholder).toEqual('Player Name');
    });

    it('Should render an <span> with a error message if "errorMessage" prop is passed', () => {
        const errorMessage = "No results found"
        const wrapper = shallow(<TextInput {...{ ...setProps, errorMessage }} />);
        expect(wrapper.find('span').props().children).toEqual('No results found');
    });
});

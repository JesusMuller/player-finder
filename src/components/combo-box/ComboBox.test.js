import React from 'react';
import { shallow } from 'enzyme';
import ComboBox from './ComboBox';

let setProps = {
    optionsInitializer: 'position',
    options: ['Attacking Midfield', 'Central Midfield', 'Centre-Back'],
    onChangeHandler: jest.fn()
}

describe('<ComboBox />', () => {
    it('Should render an <select> as wrapper', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        expect(wrapper.is('select')).toBe(true);
    });

    it('Should render a wrapper with class "searchFormComboBox"', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        expect(wrapper.props().className).toEqual('searchFormComboBox');
    });

    it('Should render "optionInitializer" prop as default option', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        expect(wrapper.find('option').get(0).props.children).toEqual('position');
    });

    it('Should render as first option the first value of "options" prop', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        expect(wrapper.find('option').get(1).props.children).toEqual('Attacking Midfield');
    });

    it('Should call onChangeHandler prop when an option is selected', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        wrapper.simulate('change');
        expect(setProps.onChangeHandler).toHaveBeenCalledTimes(1);
    });
    
});

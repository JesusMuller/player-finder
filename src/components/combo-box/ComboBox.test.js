import React from 'react';
import { shallow } from 'enzyme';
import ComboBox from './ComboBox';

let setProps = {
    optionsInitializer: 'position',
    options: ['Attacking Midfield', 'Central Midfield', 'Centre-Back']
}

describe('<ComboBox />', () => {
    it('Should render an <select> as wrapper', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        expect(wrapper.is('select')).toBe(true);
    });

    it('Should have as default option the "optionInitializer" prop', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        expect(wrapper.find('option').get(0).props.children).toEqual('position');
    });

    it('Should have as first option the first value of "options" prop', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        expect(wrapper.find('option').get(1).props.children).toEqual('Attacking Midfield');
    });

    it('Should have a wrapper with class "searchFormComboBox"', () => {
        const wrapper = shallow(<ComboBox {...setProps} />);
        expect(wrapper.props().className).toEqual('searchFormComboBox');
    });

    it('Should call onSubmitHandler prop when an option is selected', () => {
        const onSubmitHandlerMock = jest.fn();
        const wrapper = shallow(<ComboBox {...{...setProps, onSubmitHandler: onSubmitHandlerMock}} />);
        wrapper.simulate('change');
        expect(onSubmitHandlerMock).toHaveBeenCalledTimes(1);
    });
});

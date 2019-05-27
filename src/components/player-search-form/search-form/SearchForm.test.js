import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

const setProps = {
    onSubmitHandler: jest.fn()
}

describe('<SearchForm />', () => {
    it('Should render a <form> as wrapper', () => {
        const wrapper = shallow(<SearchForm {...setProps} />);
        expect(wrapper.is('form')).toBe(true);
    });

    it('Should render a <TextInput /> for player name', () => {
        const wrapper = shallow(<SearchForm {...setProps} />);
        expect(wrapper.find('div#player-name').children().is('TextInput')).toBe(true);
    });

    it('Should render a <ComboBox /> for player positions', () => {
        const wrapper = shallow(<SearchForm {...setProps} />);
        expect(wrapper.find('div#player-position').children().is('ComboBox')).toBe(true);
    });

    it('Should render a <TextInput /> for player age', () => {
        const wrapper = shallow(<SearchForm {...setProps} />);
        expect(wrapper.find('div#player-age').children().is('TextInput')).toBe(true);
    });

    it('Should render a <SubmitButton />', () => {
        const wrapper = shallow(<SearchForm {...setProps} />);
        expect(wrapper.find('SubmitButton')).toHaveLength(1);
    });

    describe('When "playerNameError" is passed by props', () => {
        it('Should pass as "errorMessage" to "player-name" component', () => {
            const playerNameError = "Should use only letters";
            const wrapper = shallow(<SearchForm {...{ ...setProps, playerNameError }} />);
            expect(wrapper.find('div#player-name').children().props().errorMessage)
            .toEqual("Should use only letters");
        });
    });

    describe('When "playerAgeError" is passed by props', () => {
        it('Should pass as "errorMessage" to "player-age" component', () => {
            const playerAgeError = "Should use numbers between 18 to 40";
            const wrapper = shallow(<SearchForm {...{ ...setProps, playerAgeError }} />);
            expect(wrapper.find('div#player-age').children().props().errorMessage)
            .toEqual("Should use numbers between 18 to 40");
        });
    });
});

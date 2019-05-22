import React from 'react';
import { mount } from 'enzyme';
import SearchFormContainer from './search-form-container';

const setProps = {
    filterPlayers: jest.fn()
};

beforeAll(() => {
    const div = document.createElement('div');
    div.innerHTML =
        '<div id="player-name">' +
        '<input>Rojo</input>' +
        '</div>' +
        '<div id="player-age">' +
        '<input>Rojo</input>' +
        '</div>';
    window.domNode = div;
    document.body.appendChild(div);
});

describe('<SearchFormContainer />', () => {
    it('Should render <SearchFormContainer /> as wrapper', () => {
        const wrapper = mount(<SearchFormContainer {...setProps} />);
        expect(wrapper.is('SearchFormContainer')).toBe(true);
    });

    it('Should send errorMessage as empty when "player name" and "player age" are valid', () => {
        const wrapper = mount(<SearchFormContainer {...setProps} />,
            { attachTo: window.domNode });
        const onSubmitEvent = wrapper.find('SearchForm').props().onSubmitHandler;

        onSubmitEvent({ preventDefault: jest.fn() });
        expect(wrapper.find('div#player-age TextInput').props().errorMessage).toBe("");
        expect(wrapper.find('div#player-name TextInput').props().errorMessage).toBe("");
    });

    //TODO invalid cases
});

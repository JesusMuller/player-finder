import React from 'react';
import { shallow } from 'enzyme';
import SearchFormContainer from './SearchFormContainer';
import { PLAYER_NAME_VALIDATION_ERROR, PLAYER_AGE_VALIDATION_ERROR } from '../../constants/constants'

const setProps = {
    filterPlayers: jest.fn()
};

describe('<SearchFormContainer />', () => {
    it('Should render <SearchForm /> as wrapper', () => {
        const wrapper = shallow(<SearchFormContainer {...setProps} />);
        expect(wrapper.is('SearchForm')).toBe(true);
    });

    it('Should call "filterPlayers" when onSubmitHandler is dispatched and inputs are valid', () => {
        const wrapper = shallow(<SearchFormContainer {...setProps} />);
        const onSubmitEvent = wrapper.props().onSubmitHandler;
        onSubmitEvent({ preventDefault: jest.fn() });
        expect(setProps.filterPlayers).toHaveBeenCalledTimes(1);
    });

    it('Should render <SearchForm /> with "playerNameInput" if name is valid', () => {
        const wrapper = shallow(<SearchFormContainer {...setProps} />);
        const onNameInputChangeHandler = wrapper.props().onNameInputChangeHandler;
        const onSubmitEvent = wrapper.props().onSubmitHandler;
        onNameInputChangeHandler({ target: { value: 'player name' } });
        onSubmitEvent({ preventDefault: jest.fn() });
        expect(wrapper.props().playerNameInput).toEqual('player name');
    });

    it('Should call "filterPlayers" when onPositionInputChangeHandler is dispathed', () => {
        const wrapper = shallow(<SearchFormContainer {...setProps} />);
        const onPositionInputChangeHandler = wrapper.props().onPositionInputChangeHandler;
        onPositionInputChangeHandler({ target: { value: 'keeper' } });
        expect(setProps.filterPlayers).toHaveBeenCalled();
    });

    it('Should render <SearchForm /> with "playerAgeInput" if age is valid', () => {
        const wrapper = shallow(<SearchFormContainer {...setProps} />);
        const onAgeInputChangeHandler = wrapper.props().onAgeInputChangeHandler;
        const onSubmitEvent = wrapper.props().onSubmitHandler;
        onAgeInputChangeHandler({ target: { value: '28' } });
        onSubmitEvent({ preventDefault: jest.fn() });
        expect(wrapper.props().playerAgeInput).toEqual('28');
    });

    it('Should render <SearchForm /> with "playerNameError" if name is not valid', () => {
        const wrapper = shallow(<SearchFormContainer {...setProps} />);
        const onNameInputChangeHandler = wrapper.props().onNameInputChangeHandler;
        const onSubmitEvent = wrapper.props().onSubmitHandler;
        onNameInputChangeHandler({ target: { value: 'player111' } });
        onSubmitEvent({ preventDefault: jest.fn() });
        expect(wrapper.props().playerNameError).toEqual(PLAYER_NAME_VALIDATION_ERROR);
    });

    it('Should render <SearchForm /> with "playerAgeError" if age is not valid', () => {
        const wrapper = shallow(<SearchFormContainer {...setProps} />);
        const onAgeInputChangeHandler = wrapper.props().onAgeInputChangeHandler;
        const onSubmitEvent = wrapper.props().onSubmitHandler;
        onAgeInputChangeHandler({ target: { value: '14' } });
        onSubmitEvent({ preventDefault: jest.fn() });
        expect(wrapper.props().playerAgeError).toEqual(PLAYER_AGE_VALIDATION_ERROR);
    });

});

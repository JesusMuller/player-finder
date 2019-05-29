import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

const setProps = {
    onSubmitHandler: jest.fn(),
    playerNameInput: '',
    onNameInputChangeHandler: jest.fn(),
    onPositionInputChangeHandler: jest.fn(),
    playerAgeInput: '',
    onAgeInputChangeHandler: jest.fn()
};

describe('<SearchForm />', () => {
    it('Should match <SearchForm /> Snapshot', () => {
        const wrapper = shallow(<SearchForm {...setProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});

import React from 'react';
import { func, string } from 'prop-types';
import { positions } from '../../../constants/constants'
import TextInput from '../../text-input';
import ComboBox from '../../combo-box';
import SubmitButton from '../../submit-button';
import './SearchForm.scss';

const SearchForm = ({ onSubmitHandler,
    playerNameInput,
    onNameInputChangeHandler,
    onPositionInputChangeHandler,
    playerAgeInput,
    onAgeInputChangeHandler,
    playerNameError,
    playerAgeError }) => (
        <form onSubmit={onSubmitHandler}>
            <div className="input-container">
                <TextInput placeHolder="Player Name"
                    inputValue={playerNameInput}
                    onChangeHandler={onNameInputChangeHandler}
                    errorMessage={playerNameError} />
            </div>
            <div className="input-container">
                <ComboBox optionsInitializer="Position" options={positions}
                    onChangeHandler={onPositionInputChangeHandler} />
            </div>
            <div className="input-container">
                <TextInput placeHolder="Age"
                    inputValue={playerAgeInput}
                    onChangeHandler={onAgeInputChangeHandler}
                    errorMessage={playerAgeError} />
            </div>
            <div className="input-container">
                <SubmitButton buttonText="Search" />
            </div>
        </form>
    );

SearchForm.propTypes = {
    onSubmitHandler: func.isRequired,
    playerNameInput: string.isRequired,
    onNameInputChangeHandler: func.isRequired,
    onPositionInputChangeHandler: func.isRequired,
    playerAgeInput: string.isRequired,
    onAgeInputChangeHandler: func.isRequired,
    playerNameError: string,
    playerAgeError: string
};

export default SearchForm;

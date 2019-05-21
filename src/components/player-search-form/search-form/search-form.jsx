import React from 'react';
import { func, string } from 'prop-types';
import { positions } from '../../../constants'
import TextInput from '../../text-input';
import ComboBox from '../../combo-box';
import SubmitButton from '../../submit-button';
import './search-form.scss';

const SearchForm = ({ onSubmitHandler, playerNameError, playerAgeError }) => (
    <form onSubmit={onSubmitHandler}>
        <div className="input-container" id="player-name">
            <TextInput placeHolder="Player Name" errorMessage={playerNameError} />
        </div>
        <div className="input-container" id="player-position">
            <ComboBox optionsInitializer="Position" options={positions}
                onSubmitHandler={onSubmitHandler} />
        </div>
        <div className="input-container" id="player-age">
            <TextInput placeHolder="Age" errorMessage={playerAgeError} />
        </div>
        <div className="input-container">
            <SubmitButton buttonText="Search" />
        </div>
    </form>
);

SearchForm.propTypes = {
    onSubmitHandler: func.isRequired,
    playerNameError: string,
    playerAgeError: string
};

export default SearchForm;

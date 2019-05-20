import React, { Component } from 'react';
import {
    PLAYER_NAME_VALIDATION_ERROR,
    PLAYER_AGE_VALIDATION_ERROR
} from '../../constants';
import SearchForm from './search-form/search-form';

class SearchFormContainer extends Component {
    constructor() {
        super();
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.validatePlayerNameInput = this.validatePlayerNameInput.bind(this);
        this.validatePlayerAgeInput = this.validatePlayerAgeInput.bind(this);
        this.state = {
            playerNameError: '',
            playerAgeError: ''
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.validatePlayerNameInput();
        this.validatePlayerAgeInput();
    };

    // Validates player name just have letters
    validatePlayerNameInput() {
        const value = document.getElementById('player-name').firstChild.value;
        const isValid = value ==='' || /^[A-Za-z]*$/.test(value) ? true : false;
        if(isValid) { this.setState({ playerNameError: '' }) }
        else { this.setState({ playerNameError: PLAYER_NAME_VALIDATION_ERROR }) }
    }

    // Validates player age is empty or between 18 and 40
    validatePlayerAgeInput() {
        const value = document.getElementById('player-age').firstChild.value;
        const isValid = value ==='' || (value >= 18 && value <= 40) ? true : false;
        if(isValid) { this.setState({ playerAgeError: '' }) }
        else { this.setState({ playerAgeError: PLAYER_AGE_VALIDATION_ERROR }) }
    }

    render() {
        return (
            <SearchForm onSubmitHandler={this.onSubmitHandler}
                playerNameError={this.state.playerNameError}
                playerAgeError={this.state.playerAgeError}
            />
        );
    }
};

export default SearchFormContainer;

import React, { Component } from 'react';
import {
    PLAYER_NAME_VALIDATION_ERROR,
    PLAYER_AGE_VALIDATION_ERROR
} from '../../constants';

import SearchForm from './search-form';

class SearchFormContainer extends Component {
    constructor() {
        super();
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.getPlayerName = this.getPlayerName.bind(this);
        this.getPlayerAge = this.getPlayerAge.bind(this);
        this.state = {
            playerNameError: '',
            playerAgeError: ''
        }
    }

    onSubmitHandler(e) {
        e.preventDefault();
        const playerName = this.getPlayerName();
        const playerPosition = this.getPlayerPosition();
        const playerAge = this.getPlayerAge();
        // if form inputs are valid will filter results
        if (playerName !== false && playerAge !== false) {
            this.props.filterPlayers({
                name: playerName,
                position: playerPosition,
                age: playerAge
            });
        }
    };

    // Validates player name just have letters
    // if it is valid so returns the value
    getPlayerName() {
        const value = document.getElementById('player-name').firstChild.value;
        const isValid = value === '' || /^[a-zA-Z\s]*$/.test(value) ? true : false;
        if (isValid) {
            this.setState({ playerNameError: '' })
            return value;
        }
        else {
            this.setState({ playerNameError: PLAYER_NAME_VALIDATION_ERROR })
            return false;
        }
    }

    getPlayerPosition() {
        return document.getElementById('player-position').firstChild.value;
    }

    // Validates player age is empty or between 18 and 40
    // if it is valid so returns the value
    getPlayerAge() {
        const value = document.getElementById('player-age').firstChild.value;
        const isValid = value === '' || (value >= 18 && value <= 40) ? true : false;
        if (isValid) {
            this.setState({ playerAgeError: '' })
            return value;
        }
        else {
            this.setState({ playerAgeError: PLAYER_AGE_VALIDATION_ERROR })
            return false;
        }
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

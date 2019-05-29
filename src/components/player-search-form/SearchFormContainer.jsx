import React, { Component } from 'react';
import { func } from 'prop-types';
import {
    PLAYER_NAME_VALIDATION_ERROR,
    PLAYER_AGE_VALIDATION_ERROR
} from '../../constants/constants';

import SearchForm from './search-form';

class SearchFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: '',
                position: '',
                age: ''
            },
            playerNameError: '',
            playerAgeError: ''
        }
    }

    componentDidUpdate(_prevProps, prevState) {
        if (this.state.inputs.position !== prevState.inputs.position) {
            this.filterResults();
        }
    }

    onNameInputChangeHandler = e => {
        this.setState({ inputs: { ...this.state.inputs, name: e.target.value } });
    }

    onPositionInputChangeHandler = e => {
        this.setState({ inputs: { ...this.state.inputs, position: e.target.value } });
    }

    onAgeInputChangeHandler = e => {
        this.setState({ inputs: { ...this.state.inputs, age: e.target.value } });
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.filterResults();
    }

    filterResults() {
        if (this.isPlayerNameValid() && this.isPlayerAgeValid()) {
            this.props.filterPlayers(this.state.inputs);
        }
    }

    isPlayerNameValid = () => {
        const { name } = this.state.inputs;
        const isValid = name === '' || /^[a-zA-Záéíóúäëïöü\s]*$/.test(name) ? true : false;
        if (isValid) {
            this.setState({ playerNameError: '' });
        } else {
            this.setState({ playerNameError: PLAYER_NAME_VALIDATION_ERROR });
        }
        return isValid;
    }

    isPlayerAgeValid() {
        const { age } = this.state.inputs;
        const isValid = age === '' || (17 < age && age < 41) ? true : false;
        if (isValid) {
            this.setState({ playerAgeError: '' })
        } else {
            this.setState({ playerAgeError: PLAYER_AGE_VALIDATION_ERROR })
        }
        return isValid;
    }

    render() {
        const { name, age } = this.state.inputs;
        const { playerNameError, playerAgeError } = this.state;
        return (
            <SearchForm onSubmitHandler={this.onSubmitHandler}
                playerNameInput={name}
                onNameInputChangeHandler={this.onNameInputChangeHandler}
                playerNameError={playerNameError}
                onPositionInputChangeHandler={this.onPositionInputChangeHandler}
                playerAgeInput={age}
                onAgeInputChangeHandler={this.onAgeInputChangeHandler}
                playerAgeError={playerAgeError}
            />
        );
    }
};

SearchFormContainer.propTypes = {
    filterPlayers: func.isRequired
};

export default SearchFormContainer;

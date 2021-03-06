import React, { Component, Fragment } from 'react';
import { func } from 'prop-types';
import { NO_RESULTS_MESSAGE, LOADING_RESULTS_MESSAGE } from '../../constants/constants';
import './PlayerInformationTable.scss';

class PlayerInformationTable extends Component {
    componentWillMount() {
        this.props.loadPlayers();
    }

    render() {
        const { players } = this.props;
        let elementToDisplay;

        if (players && players.length > 0) {
            elementToDisplay =
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Nationality</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, i) => (
                            <tr key={'player' + i}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>{player.nationality}</td>
                                <td>{player.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        } else if (players && players.length === 0) {
            elementToDisplay = <span>{NO_RESULTS_MESSAGE}</span>
        } else {
            elementToDisplay = <span>{LOADING_RESULTS_MESSAGE}</span>
        }

        return (
            <Fragment>
                {elementToDisplay}
            </Fragment>
        );
    }
}

PlayerInformationTable.propTypes = {
    loadPlayers: func.isRequired
};

export default PlayerInformationTable;

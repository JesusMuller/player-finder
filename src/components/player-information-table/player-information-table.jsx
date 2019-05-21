import React, { Component, Fragment } from 'react';
import { NO_RESULTS_MESSAGE } from '../../constants';
import './player-information-table.scss';

class PlayerInformationTable extends Component {
    componentWillMount() {
        this.props.loadPlayers();
    }

    render() {
        const { players } = this.props;
        return (
            <Fragment>
                {(players.length > 0) ?
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
                                    <td>{player.dateOfBirth}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> :
                    <span>{NO_RESULTS_MESSAGE}</span>
                }
            </Fragment>
        );
    }
}

export default PlayerInformationTable;
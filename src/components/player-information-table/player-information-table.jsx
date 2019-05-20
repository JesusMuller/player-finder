import React, { Component } from 'react';

class PlayerInformationTable extends Component {
    componentWillMount() {
        this.props.loadPlayers();
    }

    render() {
        return (<div>This a table to show players information</div>);
    }
}

export default PlayerInformationTable;
import { connect } from 'react-redux';
import { getAllPlayers } from '../../actions';
import PlayerInformationTable from './player-information-table';

const mapStateToProps = state => (
    { players: state.players }
);

const mapDispatchToProps = dispatch => (
    { loadPlayers: () => dispatch(getAllPlayers())}
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInformationTable);

import { connect } from 'react-redux';
import { loadPlayers } from '../../actions';
import { getPlayers } from '../../selectors';
import PlayerInformationTable from './player-information-table';

const mapStateToProps = state => (
    { players: getPlayers(state.players, state.filters) }
);

const mapDispatchToProps = dispatch => (
    { loadPlayers: () => dispatch(loadPlayers())}
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInformationTable);

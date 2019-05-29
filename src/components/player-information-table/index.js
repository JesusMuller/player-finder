import { connect } from 'react-redux';
import { loadPlayers } from '../../actions/actions';
import { getPlayers } from '../../selectors/selectors';
import PlayerInformationTable from './PlayerInformationTable';

const mapStateToProps = state => (
    { players: getPlayers(state.players, state.filters) }
);

const mapDispatchToProps = { loadPlayers };

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInformationTable);

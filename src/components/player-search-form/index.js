import { connect } from 'react-redux';
import { filterPlayers } from '../../actions/actions';
import SearchFormContaier from './SearchFormContainer';

const mapDispatchToProps = dispatch => (
    { filterPlayers: (filters) => dispatch(filterPlayers(filters)) }
)

export default connect(null, mapDispatchToProps)(SearchFormContaier);

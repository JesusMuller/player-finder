import { connect } from 'react-redux';
import { filterPlayers } from '../../actions';
import SearchFormContaier from './search-form-container.jsx';

const mapDispatchToProps = dispatch => (
    { filterPlayers: (filters) => dispatch(filterPlayers(filters)) }
)

export default connect(null, mapDispatchToProps)(SearchFormContaier);

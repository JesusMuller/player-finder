import { connect } from 'react-redux';
import { filterPlayers } from '../../actions/actions';
import SearchFormContaier from './SearchFormContainer';

const mapDispatchToProps = { filterPlayers };

export default connect(null, mapDispatchToProps)(SearchFormContaier);

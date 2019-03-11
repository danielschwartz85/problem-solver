import {connect} from 'react-redux';
import TopMenu from '../components/menus/topMenu';

const mapStateToProps = state => ({
  draft: state.problems.draftProblem,
});

export default connect(mapStateToProps)(TopMenu);

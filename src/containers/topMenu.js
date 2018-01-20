import TopMenu from '../components/menus/topMenu';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    draft: state.problems.draftProblem
  };
};

export default connect(mapStateToProps)(TopMenu);

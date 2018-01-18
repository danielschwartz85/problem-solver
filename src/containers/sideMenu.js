import SideMenu from '../components/menus/sideMenu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPage } from '../actions/routingActions';
import {
  clearDraft
} from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    problems: state.problems.savedProblems,
    selectedProblem: state.routing.selectedProblem
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectPage,
    clearDraft
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SideMenu);

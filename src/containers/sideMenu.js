import SideMenu from '../components/menus/sideMenu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  clearDraft,
  fetchProblems
} from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    problems: state.problems.savedProblems,
    fetchingProblems: state.problems.fetchingProblems,
    fetchProblemsError: state.problems.fetchProblemsError
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearDraft,
    fetchProblems
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SideMenu);

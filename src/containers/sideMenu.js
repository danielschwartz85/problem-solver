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
    fetchProblemsError: state.problems.fetchProblemsError,
    creatingProblem: state.problems.creatingProblem,
    updatingProblem: state.problems.updatingProblem,
    deletingProblem: state.problems.deletingProblem
  };
};

const matchDispatchToProps = (dispatch) => {
  const matcher = bindActionCreators({
    clearDraft
  }, dispatch);
  
  return {
    ...matcher,
    fetchProblems: () => {
      // override just to catch rejects we don't really care
      // here since there are no folowwing actions to take..
      return dispatch(fetchProblems()).catch(e => {});
    }
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(SideMenu);

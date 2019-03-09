import App from '../components/app';
import { connect } from 'react-redux';
import { fetchProblems } from '../actions/problemActions';
import { fetchSelectedEyeTypes } from '../actions/eyeTypeActions';

const mapStateToProps = (state) => {
  return {
    problems: state.problems.savedProblems,
    fetchingProblems: state.problems.fetchingProblems,
    creatingProblem: state.problems.creatingProblem,
    updatingProblem: state.problems.updatingProblem,
    deletingProblem: state.problems.deletingProblem,
    selectedEyeTypes: state.eyeTypes.selectedEyeTypes,
    fetchingEyeTypes: state.eyeTypes.fetchingEyeTypes,
    togglingEyeType: state.eyeTypes.togglingEyeType,
  };
};

const matchDispatchToProps = (dispatch) => {
  // override just to catch rejects we don't really care
  // here since there are no following actions to take..
  return {
    fetchProblems: () => {
      return dispatch(fetchProblems()).catch(e => {});
    },
    fetchSelectedEyeTypes: () => {
      try {
        dispatch(fetchSelectedEyeTypes())
      } catch (e) {}
    }
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(App);

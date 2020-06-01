import {connect} from 'react-redux';
import App from '../components/app';
import {fetchProblems} from '../actions/problemActions';
import {fetchSelectedEyeTypes} from '../actions/eyeTypeActions';

const mapStateToProps = state => ({
  problems: state.problems.savedProblems,
  fetchingProblems: state.problems.fetchingProblems,
  creatingProblem: state.problems.creatingProblem,
  updatingProblem: state.problems.updatingProblem,
  deletingProblem: state.problems.deletingProblem,
  selectedEyeTypes: state.eyeTypes.selectedEyeTypes,
  fetchingEyeTypes: state.eyeTypes.fetchingEyeTypes,
  togglingEyeType: state.eyeTypes.togglingEyeType,
});

// override just to catch rejects we don't really care
// here since there are no following actions to take..
const matchDispatchToProps = dispatch => ({
  fetchProblems: () => dispatch(fetchProblems()).catch(() => {}),
  fetchSelectedEyeTypes: () => {
    try {
      dispatch(fetchSelectedEyeTypes());
    } catch (e) {}
  },
});
export default connect(mapStateToProps, matchDispatchToProps)(App);

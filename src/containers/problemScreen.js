import ProblemScreen from '../components/problemScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  deleteProblem,
  fetchProblems,
  selectDraft
} from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    problems: state.problems.savedProblems,
    deletingProblem: state.problems.deletingProblem,
    deleteProblemError: state.problems.deleteProblemError
  };
};

const matchDispatchToProps = (dispatch) => {
  const matcher = bindActionCreators({
    selectDraft
  }, dispatch);

  return {
    ...matcher,
    deleteAndFetch: (id) => {
      var success = false;
      const p = dispatch(deleteProblem(id)).then(() => {
        success = true;
        return dispatch(fetchProblems());
      }).catch(e => (
        e
      )).then(e => (
        success ? Promise.resolve() : Promise.reject(e)
      ));
      return p;
    }
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(ProblemScreen);

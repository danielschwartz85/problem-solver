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
    problems: state.problems.savedProblems
  };
};

const matchDispatchToProps = (dispatch) => {
  const matcher = bindActionCreators({
    selectDraft
  }, dispatch);

  return {
    ...matcher,
    deleteAndFetch: (id) => {
      dispatch(deleteProblem(id));
      dispatch(fetchProblems());
    }
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(ProblemScreen);

import ProblemScreen from '../components/problemScreen';
import { connect } from 'react-redux';
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
  return {
    deleteAndShowWelcome: (id) => {
      dispatch(deleteProblem(id));
      dispatch(fetchProblems());
      // welcome was here
    },
    selectAndShowEditor: (id) => {
      dispatch(selectDraft(id));
      // editor was here
    }
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(ProblemScreen);

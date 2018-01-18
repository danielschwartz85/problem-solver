import ProblemScreen from '../components/problemScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPage, PAGES } from '../actions/routingActions';
import {
  deleteProblem,
  selectDraft
} from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    problem: state.problems.savedProblems[state.routing.selectedProblem],
    selectedProblemId: state.routing.selectedProblem
  };
};

const matchDispatchToProps = (dispatch) => {
  const matcher = bindActionCreators({ selectPage }, dispatch);
  return {
    ...matcher,
    deleteAndShowWelcome: (id) => {
      dispatch(deleteProblem(id));
      dispatch(selectPage(PAGES['welcome'], null));
    },
    selectAndShowEditor: (id) => {
      dispatch(selectDraft(id));
      dispatch(selectPage(PAGES['editor'], id));
    }
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(ProblemScreen);

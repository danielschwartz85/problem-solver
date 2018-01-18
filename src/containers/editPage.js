import EditPage from '../components/editPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPage, PAGES } from '../actions/routingActions';
import {
  createProblem,
  updateProblem,
  updateDraft,
  fetchProblems,
  clearDraft
} from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    draft: state.problems.draftProblem,
    problems: state.problems.savedProblems,
    selectedProblem: state.routing.selectedProblem
  };
};

const matchDispatchToProps = (dispatch) => {
  const matcher = bindActionCreators({
    updateProblem,
    updateDraft
  }, dispatch);

  return {
    ...matcher,
    createProblemAndShow: (problem) => {
      const action = createProblem(problem);
      dispatch(action);
      dispatch(fetchProblems());
      dispatch(clearDraft());
      dispatch(selectPage(PAGES['viewSavedProblem'], action.payload.id));
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(EditPage);

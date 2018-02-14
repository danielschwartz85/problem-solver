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
    updateDraft
  }, dispatch);

  return {
    ...matcher,
    createProblemAndShow: (problem) => {
      const action = createProblem(problem);
      dispatch(action);
      dispatch(fetchProblems());
      dispatch(clearDraft());
      dispatch(selectPage(PAGES['savedProblem'], action.payload.id));
    },
    updateProblemAndFetch: (id, changes) => {
      dispatch(updateProblem(id, changes));
      dispatch(fetchProblems());
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(EditPage);

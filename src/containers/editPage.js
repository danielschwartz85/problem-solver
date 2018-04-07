import EditPage from '../components/editPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createProblem,
  updateProblem,
  updateDraft,
  fetchProblems,
  clearDraft,
  selectDraft
} from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    draft: state.problems.draftProblem,
    problems: state.problems.savedProblems
  };
};

const matchDispatchToProps = (dispatch) => {
  const matcher = bindActionCreators({
    updateDraft,
    selectDraft,
    clearDraft
  }, dispatch);

  return {
    ...matcher,
    createProblemAndFetch: (problem) => {
      const action = createProblem(problem);
      dispatch(action);
      dispatch(fetchProblems());
      dispatch(clearDraft());
      return action.payload.id;
    },
    updateProblemAndFetch: (id, changes) => {
      dispatch(updateProblem(id, changes));
      dispatch(fetchProblems());
    },
    fetchAndSelectDraft: (id) => {
      dispatch(fetchProblems()).then(() => (
        dispatch(selectDraft(id))
      )).catch(e => {
        // TODO - startup page is editor and problem fetching etc..
        console.log(`editor error: ${e}`);
      });
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(EditPage);

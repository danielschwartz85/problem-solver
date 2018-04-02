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
    selectDraft
  }, dispatch);

  return {
    ...matcher,
    createProblemAndShow: (problem) => {
      const action = createProblem(problem);
      dispatch(action);
      dispatch(fetchProblems());
      dispatch(clearDraft());
      // savedProblem was here
    },
    updateProblemAndFetch: (id, changes) => {
      dispatch(updateProblem(id, changes));
      dispatch(fetchProblems());
    },
    fetchAndSelectDraft: (id) => {
      dispatch(fetchProblems());
      dispatch(selectDraft(id));
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(EditPage);

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
    problems: state.problems.savedProblems,
    creatingProblem: state.problems.creatingProblem,
    createProblemError: state.problems.createProblemError
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
      const p = dispatch(createProblem(problem)).then(newId => (
        Promise.all([newId, dispatch(fetchProblems())])
      )).then(([newId]) => (
        Promise.all([newId, dispatch(clearDraft())])
      )).catch(e => {
        return [null];
      }).then(([newId]) => newId);
      return p;
    },
    updateProblemAndFetch: (id, changes) => {
      dispatch(updateProblem(id, changes));
      dispatch(fetchProblems());
    },
    fetchAndSelectDraft: (id) => {
      dispatch(fetchProblems()).then(() => (
        dispatch(selectDraft(id))
      )).catch(e => {
        // TODO - startup page is editor and error
      });
    }
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(EditPage);

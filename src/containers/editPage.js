import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EditPage from '../components/editPage';
import {
  createProblem,
  updateProblem,
  updateDraft,
  fetchProblems,
  clearDraft,
  selectDraft,
} from '../actions/problemActions';

const mapStateToProps = state => ({
  draft: state.problems.draftProblem,
  problems: state.problems.savedProblems,
  creatingProblem: state.problems.creatingProblem,
  createProblemError: state.problems.createProblemError,
  updatingProblem: state.problems.updatingProblem,
  updateProblemError: state.problems.updateProblemError,
  selectedEyeTypes: state.eyeTypes.selectedEyeTypes,
});

const matchDispatchToProps = dispatch => {
  const matcher = bindActionCreators(
    {
      updateDraft,
      selectDraft,
      clearDraft,
    },
    dispatch,
  );

  return {
    ...matcher,
    createProblemAndFetch: problem => {
      let newId;
      const p = dispatch(createProblem(problem))
        .then(id => {
          newId = id;
        })
        .then(() => dispatch(fetchProblems()))
        .then(() => dispatch(clearDraft()))
        .catch(e => e)
        .then(e => (newId ? Promise.resolve(newId) : Promise.reject(e)));
      return p;
    },
    updateProblemAndFetch: (id, changes) => {
      let success = false;
      const p = dispatch(updateProblem(id, changes))
        .then(() => {
          success = true;
          return dispatch(fetchProblems());
        })
        .catch(e => e)
        .then(e => (success ? Promise.resolve() : Promise.reject(e)));
      return p;
    },
    fetchAndSelectDraft: id => {
      dispatch(fetchProblems())
        .then(() => dispatch(selectDraft(id)))
        .catch(_e => {
          // TODO - startup page is editor and error
        });
    },
  };
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(EditPage);

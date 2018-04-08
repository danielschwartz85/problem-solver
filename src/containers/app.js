import App from '../components/app';
import { connect } from 'react-redux';
import { fetchProblems } from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    problems: state.problems.savedProblems,
    fetchingProblems: state.problems.fetchingProblems,
    creatingProblem: state.problems.creatingProblem
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    fetchProblems: () => {
      // override just to catch rejects we don't really care
      // here since there are no folowwing actions to take..
      dispatch(fetchProblems()).catch(e => {});
    }
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(App);

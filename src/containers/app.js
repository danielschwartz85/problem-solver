import App from '../components/app';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProblems } from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    problems: state.problems.savedProblems
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProblems
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);

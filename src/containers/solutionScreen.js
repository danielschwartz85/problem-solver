import SolutionScreen from '../components/solutionScreen';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    problems: state.problems.savedProblems
  };
};

export default connect(mapStateToProps)(SolutionScreen);

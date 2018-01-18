import SolutionScreen from '../components/solutionScreen';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    problem: state.problems.savedProblems[state.routing.selectedProblem]
  };
};

export default connect(mapStateToProps)(SolutionScreen);

import {connect} from 'react-redux';
import SolutionScreen from '../components/solutionScreen';

const mapStateToProps = state => ({
  problems: state.problems.savedProblems,
});

export default connect(mapStateToProps)(SolutionScreen);

import WelcomeScreen from '../components/welcomeScreen';
import { connect } from 'react-redux';
import { clearDraft } from '../actions/problemActions';

const matchDispatchToProps = (dispatch) => {
  return {
    showNewProblem: () => {
      dispatch(clearDraft());
      // change page wa shere
    }
  };
};

export default connect(null, matchDispatchToProps)(WelcomeScreen);

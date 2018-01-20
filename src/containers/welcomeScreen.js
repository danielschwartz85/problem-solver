import WelcomeScreen from '../components/welcomeScreen';
import { connect } from 'react-redux';
import { selectPage, PAGES } from '../actions/routingActions';
import { clearDraft } from '../actions/problemActions';

const matchDispatchToProps = (dispatch) => {
  return {
    showNewProblem: () => {
      dispatch(clearDraft());
      dispatch(selectPage(PAGES['editor']));
    }
  };
};

export default connect(null, matchDispatchToProps)(WelcomeScreen);

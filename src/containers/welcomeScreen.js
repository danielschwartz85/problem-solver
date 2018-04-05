import WelcomeScreen from '../components/welcomeScreen';
import { connect } from 'react-redux';
import { clearDraft } from '../actions/problemActions';
import { bindActionCreators } from 'redux';

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearDraft
  }, dispatch);
};

export default connect(null, matchDispatchToProps)(WelcomeScreen);

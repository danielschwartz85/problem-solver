import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import WelcomeScreen from '../components/welcomeScreen';
import {clearDraft} from '../actions/problemActions';

const matchDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearDraft,
    },
    dispatch,
  );

export default connect(
  null,
  matchDispatchToProps,
)(WelcomeScreen);

import SideMenu from '../components/menus/sideMenu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  clearDraft
} from '../actions/problemActions';

const mapStateToProps = (state) => {
  return {
    problems: state.problems.savedProblems
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearDraft
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(SideMenu);

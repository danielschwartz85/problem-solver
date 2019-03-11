import {connect} from 'react-redux';
import EyeTypesScreen from '../components/eyeTypesScreen';
import {toggleEyeType, fetchSelectedEyeTypes} from '../actions/eyeTypeActions';

const matchDispatchToProps = dispatch => ({
  toggleEyeTypeAndFetch: async id => {
    await dispatch(toggleEyeType(id));
    await dispatch(fetchSelectedEyeTypes());
  },
});

const mapStateToProps = ({eyeTypes}) => ({
  selectedEyeTypes: eyeTypes.selectedEyeTypes,
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(EyeTypesScreen);

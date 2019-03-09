import EyeTypesScreen from '../components/eyeTypesScreen';
import { connect } from 'react-redux';
import {
  toggleEyeType,
  fetchSelectedEyeTypes
} from '../actions/eyeTypeActions';

const matchDispatchToProps = (dispatch) => {
  return {
    toggleEyeTypeAndFetch: async id => {
      await dispatch(toggleEyeType(id));
      await dispatch(fetchSelectedEyeTypes());
    }
  };
};

const mapStateToProps = ({eyeTypes}) => {
  return {
    selectedEyeTypes: eyeTypes.selectedEyeTypes
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(EyeTypesScreen);

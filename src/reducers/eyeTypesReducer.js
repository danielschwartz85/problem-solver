const defaultState = {
  selectedEyeTypes: {},
  fetchingEyeTypes: false,
  fetchEyeTypesError: null,
  togglingEyeType: false,
  toggleEyeTypeError: null,
};

const eyeTypes = (state = defaultState, action) => {
  const {payload} = action;
  const newState = {
    FETCH_SELECTED_EYE_TYPES_PENDING: () => ({
      ...state,
      fetchingEyeTypes: true,
      fetchEyeTypesError: null,
    }),
    FETCH_SELECTED_EYE_TYPES_FULFILLED: () => ({
      ...state,
      fetchingEyeTypes: false,
      selectedEyeTypes: payload,
    }),
    FETCH_SELECTED_EYE_TYPES_REJECTED: () => ({
      ...state,
      fetchingEyeTypes: false,
      fetchEyeTypesError: payload.message,
      selectedEyeTypes: null,
    }),
    TOGGLE_EYE_TYPE_PENDING: () => ({
      ...state,
      togglingEyeType: true,
      toggleEyeTypeError: null,
    }),
    TOGGLE_EYE_TYPE_FULFILLED: () => ({
      ...state,
      togglingEyeType: false,
    }),
    TOGGLE_EYE_TYPE_REJECTED: () => ({
      ...state,
      togglingEyeType: false,
      toggeleEyeTypeError: payload.message,
    }),
  }[action.type];
  return (newState && newState()) || state;
};

export default eyeTypes;

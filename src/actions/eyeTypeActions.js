import Utils from '../utils';
export const FETCH_SELECTED_EYE_TYPES_PENDING = 'FETCH_SELECTED_EYE_TYPES_PENDING';
export const FETCH_SELECTED_EYE_TYPES_FULFILLED = 'FETCH_SELECTED_EYE_TYPES_FULFILLED';
export const FETCH_SELECTED_EYE_TYPES_REJECTED = 'FETCH_SELECTED_EYE_TYPES_REJECTED';
export const TOGGLE_EYE_TYPE_PENDING = 'TOGGLE_EYE_TYPE_PENDING';
export const TOGGLE_EYE_TYPE_FULFILLED = 'TOGGLE_EYE_TYPE_FULFILLED';
export const TOGGLE_EYE_TYPE_REJECTED = 'TOGGLE_EYE_TYPE_REJECTED';

export function fetchSelectedEyeTypesPending() {
  return {
    type: FETCH_SELECTED_EYE_TYPES_PENDING,
  };
}

export function fetchSelectedEyeTypesFullfilled(eyeTypes) {
  return {
    type: FETCH_SELECTED_EYE_TYPES_FULFILLED,
    payload: eyeTypes
  };
}

export function fetchSelectedEyeTypesRejected(error) {
  return {
    type: FETCH_SELECTED_EYE_TYPES_REJECTED,
    payload: error
  };
}

export function fetchSelectedEyeTypes() {
  let eyeTypes = Utils.getItem('selectedEyeTypes');
  eyeTypes = (eyeTypes && JSON.parse(eyeTypes)) || {};

  return async dispatch => {
    try {
      dispatch(fetchSelectedEyeTypesPending());
      // await Utils.delay(50);
       // throw new Error('USER_LOGGED_OUT');
      dispatch(fetchSelectedEyeTypesFullfilled(eyeTypes));
    } catch (e) {
      dispatch(fetchSelectedEyeTypesRejected(e));
    }
  };
};

export function toggleEyeTypePending() {
  return {
    type: TOGGLE_EYE_TYPE_PENDING,
  };
};

export function toggleEyeTypeFullfilled() {
  return {
    type: TOGGLE_EYE_TYPE_FULFILLED,
  };
};

export function toggleEyeTypeRejected(error) {
  return {
    type: TOGGLE_EYE_TYPE_REJECTED,
    payload: error
  };
};

export function toggleEyeType(id) {
  id = '' + id;
  let eyeTypes = Utils.getItem('selectedEyeTypes');
  eyeTypes = (eyeTypes && JSON.parse(eyeTypes)) || {};
  if(eyeTypes[id] !== undefined && eyeTypes[id]) {
    delete eyeTypes[id];
  } else {
    eyeTypes[id] = true;
  }

  return async dispatch => {
    try {
      dispatch(toggleEyeTypePending());
      // await Utils.delay(50);
      Utils.setItem('selectedEyeTypes', JSON.stringify(eyeTypes));
      // throw new Error('USER_LOGGED_OUT');
      dispatch(toggleEyeTypeFullfilled());
    } catch (e) {
      dispatch(toggleEyeTypeRejected(e));
    }
  };
};

import { PAGES } from '../actions/routingActions';

const defaultState = {
  page: PAGES['welcome'],
  selectedProblem: null
};

const routing = (state = defaultState, action) => {
    const newState = {
      SELECT_PAGE: () => ({
        page: action.payload.page,
        selectedProblem: action.payload.args
      })
    }[action.type];
    return (newState && newState()) || state;
};

export default routing;

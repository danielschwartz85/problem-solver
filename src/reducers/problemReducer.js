import Utils from '../utils';

const defaultDraftProblem = (savedProblems) => {
  const lastProblem = Utils.objectToArr(savedProblems).sort((p1, p2) => {
    return p1.updatedAt >= p2.updatedAt ? -1 : 1;
  })[0] || {};

  return {
    description: "",
    verbs: [],
    transformationVerbs: [],
    pastVerbs: [],
    negativeVerbs: [],
    name: lastProblem.name || "",
    newName: "",
    pastDomino: lastProblem.pastDomino || "",
    futureDomino: lastProblem.futureDomino || "",
    updatedAt: null
  };
};

const defaultState = {
  savedProblems: {},
  fetchingProblems: false,
  fetchProblemsError: null,
  draftProblem: null
};

const problems = (state = defaultState, action) => {
    const draftProblem = state.draftProblem;
    const savedProblems = state.savedProblems;
    const payload = action.payload;
    const newState = {
      FETCH_PROBLEMS: () => (state),
      FETCH_PROBLEMS_PENDING: () => ({
        ...state,
        fetchingProblems: true,
        fetchProblemsError: null
      }),
      FETCH_PROBLEMS_FULFILLED: () => ({
        ...state,
        fetchingProblems: false,
        savedProblems: payload
      }),
      FETCH_PROBLEMS_REJECTED: () => ({
        ...state,
        fetchingProblems: false,
        fetchProblemsError: payload,
        savedProblems: null
      }),
      SELECT_DRAFT: () => ({
        ...state,
        draftProblem: Utils.cloneProblem(savedProblems[payload])
      }),
      CLEAR_DRAFT: () => ({
        ...state,
        draftProblem: defaultDraftProblem(savedProblems)
      }),
      UPDATE_DRAFT: () => ({
        ...state,
        draftProblem: Utils.cloneProblem(draftProblem, payload)
      }),
      CREATE_PROBLEM: () => (state),
      UPDATE_PROBLEM: () => (state),
      DELETE_PROBLEM: () => (state),
    }[action.type];
    return (newState && newState()) || state;
};

export default problems;

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
  creatingProblem: false,
  createProblemError: null,
  updatingProblem: false,
  updateProblemError: null,
  deletingProblem: false,
  deleteProblemError: null,
  draftProblem: null
};

const problems = (state = defaultState, action) => {
    const draftProblem = state.draftProblem;
    const savedProblems = state.savedProblems;
    const payload = action.payload;
    const newState = {
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
        fetchProblemsError: payload.message,
        savedProblems: null
      }),
      CREATE_PROBLEM_PENDING: () => ({
        ...state,
        creatingProblem: true,
        createProblemError: null
      }),
      CREATE_PROBLEM_FULFILLED: () => ({
        ...state,
        creatingProblem: false
      }),
      CREATE_PROBLEM_REJECTED : () => ({
        ...state,
        creatingProblem: false,
        createProblemError: payload.message
      }),
      UPDATE_PROBLEM_PENDING: () => ({
        ...state,
        updatingProblem: true,
        updateProblemError: false
      }),
      UPDATE_PROBLEM_FULFILLED: () => ({
        ...state,
        updatingProblem: false
      }),
      UPDATE_PROBLEM_REJECTED: () => ({
        ...state,
        updatingProblem: false,
        updateProblemError: payload.message
      }),
      DELETE_PROBLEM_PENDING: () => ({
        ...state,
        deletingProblem: true,
        deleteProblemError: false
      }),
      DELETE_PROBLEM_FULFILLED: () => ({
        ...state,
        deletingProblem: false
      }),
      DELETE_PROBLEM_REJECTED: () => ({
        ...state,
        deletingProblem: false,
        deleteProblemError: payload.message
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
      })
    }[action.type];
    return (newState && newState()) || state;
};

export default problems;

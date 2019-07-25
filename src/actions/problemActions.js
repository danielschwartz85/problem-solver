import Utils from '../utils';

export const FETCH_PROBLEMS_PENDING = 'FETCH_PROBLEMS_PENDING';
export const FETCH_PROBLEMS_FULFILLED = 'FETCH_PROBLEMS_FULFILLED';
export const FETCH_PROBLEMS_REJECTED = 'FETCH_PROBLEMS_REJECTED';
export const CREATE_PROBLEM_PENDING = 'CREATE_PROBLEM_PENDING';
export const CREATE_PROBLEM_FULFILLED = 'CREATE_PROBLEM_FULFILLED';
export const CREATE_PROBLEM_REJECTED = 'CREATE_PROBLEM_REJECTED';
export const UPDATE_PROBLEM_PENDING = 'UPDATE_PROBLEM_PENDING';
export const UPDATE_PROBLEM_FULFILLED = 'UPDATE_PROBLEM_FULFILLED';
export const UPDATE_PROBLEM_REJECTED = 'UPDATE_PROBLEM_REJECTED';
export const DELETE_PROBLEM_PENDING = 'DELETE_PROBLEM_PENDING';
export const DELETE_PROBLEM_FULFILLED = 'DELETE_PROBLEM_FULFILLED';
export const DELETE_PROBLEM_REJECTED = 'DELETE_PROBLEM_REJECTED';
export const UPDATE_DRAFT = 'UPDATE_DRAFT';
export const SELECT_DRAFT = 'SELECT_DRAFT';
export const CLEAR_DRAFT = 'CLEAR_DRAFT';

/*
 * Utils :
 */

const cleanProblem = problem => {
  problem.verbs = Utils.cleanArray(problem.verbs);
  Object.keys(problem.transformationVerbs).forEach(i => {
    if (i >= problem.verbs.length) {
      delete problem.transformationVerbs[i];
    }
  });
};

/*
 * Problem Actions :
 */

export function fetchProblemsPending() {
  return {
    type: FETCH_PROBLEMS_PENDING,
    payload: null,
  };
}

export function fetchProblemsFullfilled(problems) {
  return {
    type: FETCH_PROBLEMS_FULFILLED,
    payload: problems,
  };
}

export function fetchProblemsRejected(error) {
  return {
    type: FETCH_PROBLEMS_REJECTED,
    payload: error,
  };
}

export function fetchProblems() {
  let problems = Utils.getItem('problems');
  problems = (problems && JSON.parse(problems)) || {};

  return async dispatch => {
    dispatch(fetchProblemsPending());
    try {
      await dispatch(fetchProblemsFullfilled(problems));
    } catch (e) {
      dispatch(fetchProblemsRejected(e));
      throw e;
    }
  };
}

export function createProblemPending() {
  return {
    type: CREATE_PROBLEM_PENDING,
    payload: null,
  };
}

export function createProblemFullfilled(problems) {
  return {
    type: CREATE_PROBLEM_FULFILLED,
    payload: problems,
  };
}

export function createProblemRejected(error) {
  return {
    type: CREATE_PROBLEM_REJECTED,
    payload: error,
  };
}

export function createProblem(problem) {
  let problems = Utils.getItem('problems');
  problems = (problems && JSON.parse(problems)) || {};
  const ids = Object.keys(problems)
    .map(id => Number(id))
    .sort();
  const newId = ((ids.length && ids[ids.length - 1]) || 0) + 1;
  problems[newId] = {...problem, updatedAt: Date.now()};
  cleanProblem(problems[newId]);

  return async dispatch => {
    dispatch(createProblemPending());
    Utils.setItem('problems', JSON.stringify(problems));
    try {
      await dispatch(createProblemFullfilled(newId));
    } catch (e) {
      dispatch(createProblemRejected(e));
      throw e;
    }
    return newId;
  };
}

export function updateProblemPending() {
  return {
    type: UPDATE_PROBLEM_PENDING,
    payload: null,
  };
}

export function updateProblemFullfilled(problem) {
  return {
    type: UPDATE_PROBLEM_FULFILLED,
    payload: problem,
  };
}

export function updateProblemRejected(error) {
  return {
    type: UPDATE_PROBLEM_REJECTED,
    payload: error,
  };
}

export function updateProblem(id, changes) {
  const problems = JSON.parse(Utils.getItem('problems'));
  problems[id] = {
    ...problems[id],
    ...changes,
    updatedAt: Date.now(),
  };
  cleanProblem(problems[id]);

  return async dispatch => {
    dispatch(updateProblemPending());
    Utils.setItem('problems', JSON.stringify(problems));
    try {
      await dispatch(updateProblemFullfilled());
    } catch (e) {
      dispatch(updateProblemRejected(e));
      throw e;
    }
  };
}

export function deleteProblemPending() {
  return {
    type: DELETE_PROBLEM_PENDING,
    payload: null,
  };
}

export function deleteProblemFullfilled(problems) {
  return {
    type: DELETE_PROBLEM_FULFILLED,
    payload: problems,
  };
}

export function deleteProblemRejected(error) {
  return {
    type: DELETE_PROBLEM_REJECTED,
    payload: error,
  };
}

export function deleteProblem(id) {
  const problems = JSON.parse(Utils.getItem('problems'));
  delete problems[id];

  return async dispatch => {
    dispatch(deleteProblemPending());
    Utils.setItem('problems', JSON.stringify(problems));
    try {
      await dispatch(deleteProblemFullfilled());
    } catch (e) {
      dispatch(deleteProblemRejected(e));
      throw e;
    }
  };
}

/*
 * Draft Actions :
 */

export function updateDraft(changes) {
  return {
    type: 'UPDATE_DRAFT',
    payload: changes,
  };
}

export function selectDraft(id) {
  return {
    type: 'SELECT_DRAFT',
    payload: id,
  };
}

export function clearDraft(id) {
  return {
    type: 'CLEAR_DRAFT',
    payload: id,
  };
}

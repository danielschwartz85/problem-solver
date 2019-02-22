import Utils from '../utils'
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

const tmpStore = {};
const useLocalStorage = true;
const setItem = (key, value) => {
  if (useLocalStorage) {
    localStorage.setItem(key, value);
  } else {
    tmpStore[key] = value;
  }
};
const getItem = (key) => {
  if (useLocalStorage) {
    return localStorage.getItem(key);
  } else {
    return tmpStore[key];
  }
};

const cleanProblem = (problem) => {
  problem.verbs = Utils.cleanArray(problem.verbs);
  Object.keys(problem.transformationVerbs).forEach(i => {
    if (i >= problem.verbs.length) {
      delete(problem.transformationVerbs[i]);
    }
  });
}

/*
 * Problem Actions :
 */

export function fetchProblemsPending() {
  return {
    type: FETCH_PROBLEMS_PENDING,
    payload: null
  };
}

export function fetchProblemsFullfilled(problems) {
  return {
    type: FETCH_PROBLEMS_FULFILLED,
    payload: problems
  };
}

export function fetchProblemsRejected(error) {
  return {
    type: FETCH_PROBLEMS_REJECTED,
    payload: error
  };
}

export function fetchProblems() {
  let problems = getItem('problems');
  problems = (problems && JSON.parse(problems)) || {};

  return (dispatch) => {
      dispatch(fetchProblemsPending());
      const p = new Promise((res, rej) => {
        setTimeout(() => res(problems), 500);
        // rej(new Error('USER_LOGGED_OUT'));
      })
      .then(res => {
        dispatch(fetchProblemsFullfilled(res));
      })
      .then(() => (
        Promise.resolve()
      ))
      .catch(e => {
        dispatch(fetchProblemsRejected(e));
        return e;
      }).then(e => (
        !e ? Promise.resolve() : Promise.reject(e)
      ));
      return p;
  };
};

export function createProblemPending() {
  return {
    type: CREATE_PROBLEM_PENDING,
    payload: null
  };
}

export function createProblemFullfilled(problems) {
  return {
    type: CREATE_PROBLEM_FULFILLED,
    payload: problems
  };
}

export function createProblemRejected(error) {
  return {
    type: CREATE_PROBLEM_REJECTED,
    payload: error
  };
}

export function createProblem(problem) {
  let problems = getItem('problems');
  problems = (problems && JSON.parse(problems)) || {};
  const ids = Object.keys(problems).map(id => Number(id)).sort();
  const newId = ((ids.length && ids[ids.length -1]) || 0) + 1;
  problems[newId] = { ...problem, updatedAt: Date.now() };
  cleanProblem(problems[newId])

  return (dispatch) => {
    dispatch(createProblemPending());
    const p = new Promise((res, rej) => {
      setTimeout(() => {
        setItem('problems', JSON.stringify(problems));
        // rej(new Error('USER_LOGGED_OUT'));
        res(newId);
      }, 500);
    })
    .then(res => (
      Promise.all([null, res, dispatch(createProblemFullfilled(res))])
    ))
    .catch(e => {
      dispatch(createProblemRejected(e));
      return [e, null];
    })
    .then(([err, newId]) => (
      !err ? Promise.resolve(newId) : Promise.reject(err)
    ));
    return p;
  };
};

export function updateProblemPending() {
  return {
    type: UPDATE_PROBLEM_PENDING,
    payload: null
  };
}

export function updateProblemFullfilled(problem) {
  return {
    type: UPDATE_PROBLEM_FULFILLED,
    payload: problem
  };
}

export function updateProblemRejected(error) {
  return {
    type: UPDATE_PROBLEM_REJECTED,
    payload: error
  };
}

export function updateProblem(id, changes) {
  const problems = JSON.parse(getItem('problems'));
  problems[id] = {
    ...problems[id],
    ...changes,
    updatedAt: Date.now()
  };
  cleanProblem(problems[id])

  return (dispatch) => {
    dispatch(updateProblemPending());
    const p = new Promise((res, rej) => {
      setTimeout(() => {
        setItem('problems', JSON.stringify(problems));
        // rej(new Error('USER_LOGGED_OUT'));
        res();
      }, 500);
    })
    .then(() => (
      dispatch(updateProblemFullfilled())
    )).then(() => (
      Promise.resolve()
    )).catch(e => {
      dispatch(updateProblemRejected(e));
      return e;
    })
    .then(e => (
      !e ? Promise.resolve() : Promise.reject(e)
    ));
    return p;
  };
};

export function deleteProblemPending() {
  return {
    type: DELETE_PROBLEM_PENDING,
    payload: null
  };
}

export function deleteProblemFullfilled(problems) {
  return {
    type: DELETE_PROBLEM_FULFILLED,
    payload: problems
  };
}

export function deleteProblemRejected(error) {
  return {
    type: DELETE_PROBLEM_REJECTED,
    payload: error
  };
}

export function deleteProblem(id) {
  const problems = JSON.parse(getItem('problems'));
  delete(problems[id]);

  return (dispatch) => {
    dispatch(deleteProblemPending());
    const p = new Promise((res, rej) => {
      setTimeout(() => {
        // rej(new Error('USER_LOGGED_OUT'));return;
        setItem('problems', JSON.stringify(problems));
        res();
      }, 500);
    })
    .then(() => (
      dispatch(deleteProblemFullfilled())
    )).then(() => (
      Promise.resolve()
    )).catch(e => {
      dispatch(deleteProblemRejected(e));
      return e;
    })
    .then(e => (
      !e ? Promise.resolve() : Promise.reject(e)
    ));
    return p;
  };
};

/*
 * Draft Actions :
 */

export function updateDraft(changes) {
  return {
    type: 'UPDATE_DRAFT',
    payload: changes
  };
};

export function selectDraft(id) {
  return {
    type: 'SELECT_DRAFT',
    payload: id
  };
};

export function clearDraft(id) {
  return {
    type: 'CLEAR_DRAFT',
    payload: id
  };
};

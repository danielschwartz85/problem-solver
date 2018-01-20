export const FETCH_PROBLEMS = 'FETCH_PROBLEMS';
export const CREATE_PROBLEM = 'CREATE_PROBLEM';
export const UPDATE_PROBLEM = 'UPDATE_PROBLEM';
export const UPDATE_DRAFT = 'UPDATE_DRAFT';
export const SELECT_DRAFT = 'SELECT_DRAFT';
export const CLEAR_DRAFT = 'CLEAR_DRAFT';
export const DELETE_PROBLEM = 'CLEAR_DRAFT';

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

export function fetchProblems() {
  let problems = getItem('problems');
  problems = (problems && JSON.parse(problems)) || {};
  return {
    type: 'FETCH_PROBLEMS',
    payload: problems
  }
};

export function createProblem(problem) {
  let problems = getItem('problems');
  problems = (problems && JSON.parse(problems)) || {};
  const ids = Object.keys(problems).sort();
  const newId = ((ids.length && Number(ids[ids.length -1])) || 0) + 1;
  problems[newId] = { ...problem, updatedAt: Date.now() };
  setItem('problems', JSON.stringify(problems));

  return {
    type: 'CREATE_PROBLEM',
    payload: {
      status: 'SUCCESS',
      id: newId
    }
  };
};

export function updateProblem(id, changes) {
  const problems = JSON.parse(getItem('problems'));
  problems[id] = {
    ...problems[id],
    ...changes,
    updatedAt: Date.now()
  };
  setItem('problems', JSON.stringify(problems));

  return {
    type: 'UPDATE_PROBLEM',
    payload: {
      status: 'SUCCESS'
    }
  };
};

export function deleteProblem(id) {
  const problems = JSON.parse(getItem('problems'));
  delete(problems[id]);
  setItem('problems', JSON.stringify(problems));

  return {
    type: 'DELETE_PROBLEM',
    payload: {
      status: 'SUCCESS'
    }
  };
};

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

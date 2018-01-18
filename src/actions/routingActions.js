export const SELECT_SCREEN = 'SELECT_SCREEN';

export const PAGES = Object.freeze({
  "welcome":0,
  "savedProblem":1,
  "viewSavedProblem":2,
  "editor":3
});

export function selectPage(page, args = null) {
  return {
    type: 'SELECT_PAGE',
    payload: {
      page,
      args
    }
  };
};

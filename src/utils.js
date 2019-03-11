/* global process */
import Config from './config';

const Utils = {
  joinWithCommas: (arr, max = undefined) => {
    if (max) {
      return `${arr.slice(0, max).reduce((acc, i) => `${acc}, ${i}`)} ..`;
    }
    return (arr.length && arr.reduce((acc, i) => `${acc}, ${i}`)) || '';
  },
  truncate: (str, length) => {
    if (str.length > length) {
      return `${str.substring(0, length)} ..`;
    }
    return str;
  },
  indexToText: (indexes, verbs) =>
    indexes.length ? Utils.joinWithCommas(indexes.map(i => verbs[i])) : '',
  cloneProblem: (problem, update = {}) => ({
    ...problem,
    verbs: problem.verbs.slice(0),
    pastVerbs: problem.pastVerbs.slice(0),
    negativeVerbs: problem.negativeVerbs.slice(0),
    transformationVerbs: {
      ...problem.transformationVerbs,
    },
    ...update,
  }),
  objectToArr: obj => Object.keys(obj).map(k => obj[k]),
  cleanArray: actual => {
    const newArray = [];
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  },
  nonNewVerbs: problem => problem.pastVerbs.map(i => [problem.verbs[i], i]).filter(v => !!v[0]),
  isValid: (problem, key) => {
    const valid = {
      description: () => !!problem.description,
      verbs: () => !!Utils.cleanArray(problem.verbs).length,
      pastVerbs: () => true,
      negativeVerbs: () => true,
      transformationVerbs: () => {
        if (!problem.pastVerbs.length) return true;
        const tVerbs = problem.transformationVerbs;
        const oldVerbs = Utils.nonNewVerbs(problem);
        return oldVerbs.every(([v, i]) => !(v && !tVerbs[i]));
      },
      name: () => !!problem.name,
      newName: () => !!problem.newName,
      pastDomino: () => !!problem.pastDomino,
      futureDomino: () => !!problem.futureDomino,
      problemPlanted: () => true,
    }[key];
    return valid !== undefined ? valid() : true;
  },
  isValidProblem: problem => Object.keys(problem).every(k => Utils.isValid(problem, k)),
  transformationSentence: problem => {
    const tVerbs = problem.transformationVerbs;
    const transformationVerbs = Object.keys(tVerbs).reduce(
      (acc, id) =>
        (acc = `${acc}${acc ? ', ' : ''}${problem.transformationVerbs[id]} (במקום ${
          problem.verbs[id]
        })`),
      '',
    );
    return transformationVerbs;
  },
  problemTypeSentence: problem => {
    if (problem.verbs.length === problem.pastVerbs.length) {
      return Config.solutionScreen.man.costumeConflict;
    }
    if (problem.pastVerbs.length === 0) {
      return Config.solutionScreen.man.newConflict;
    }
    return Config.solutionScreen.man.hidingConflict;
  },
  problemToText: (problem, isWhatsapp = false) => {
    Utils.transformationSentence(problem);
    const past = problem.pastVerbs.reduce(
      (acc, i) => (acc = `${acc}${acc ? ', ' : ''}${problem.verbs[i]}`),
      '',
    );
    const negative = problem.negativeVerbs.reduce(
      (acc, i) => (acc = `${acc}${acc ? ', ' : ''}${problem.verbs[i]}`),
      '',
    );
    const {pages} = Config;
    const b = isWhatsapp ? '*' : '';
    const add = em => (isWhatsapp ? `${em} *` : '');

    let problemText = `${add('❓')}${pages.problem.tab.name}:${b}\n${problem.description}\n\n`;
    problemText += `${add('🛒')}${pages.verbExtract.tab.name}:${b}\n${problem.verbs.join(
      ', ',
    )}\n\n`;
    problemText += `${add('🔋')}${pages.pastVerbs.tab.name}:${b}\n${past}\n\n`;
    problemText += `${add('🐞')}${pages.negativeVerbs.tab.name}:${b}\n${negative}\n\n`;
    problemText += `${add('🚀')}${
      pages.transformation.tab.name
    }:${b}\n${Utils.transformationSentence(problem)}\n\n`;
    problemText += `${add('🧗')}${pages.name.tab.name}:${b}\n${problem.name}\n\n`;
    problemText += `${add('👥')}${pages.newName.tab.name}:${b}\n${problem.newName}\n\n`;
    problemText += `${add('☮')}${pages.pastDomino.tab.name}:${b}\n${problem.pastDomino}\n\n`;
    problemText += `${add('🔼')}${pages.futureDomino.tab.name}:${b}\n${problem.futureDomino}\n\n`;
    problemText += `${add('🔆')}${pages.problemPlanted.tab.name}:${b}\n${
      problem.problemPlanted
    }\n\n`;
    return problemText;
  },
  problemToTitleText: problem => `${Config.problemScreen.problemSubject} ${problem.name}`,
  setItem: (key, value) => localStorage.setItem(key, value),
  splitArr: (arr, conditionFunc) =>
    // eslint-disable-next-line
    arr.reduce((acc, item) => ((acc[conditionFunc(item) ? 0 : 1]).push(item), acc), [[], []]),
  getItem: key => localStorage.getItem(key),
  delay: ms => new Promise(res => setTimeout(res, ms)),
  problemUrl: `${document.location.origin}/${process.env.REACT_APP_SITE_PATH}`,
  sitePrefix: process.env.REACT_APP_SITE_PATH ? `/${process.env.REACT_APP_SITE_PATH}/` : '',
};

export default Utils;

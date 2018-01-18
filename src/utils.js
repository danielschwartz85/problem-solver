const Utils = {
  joinWithCommas: (arr, max = undefined) => {
    if (max) {
      return `${arr.slice(0, max).reduce((acc, i) => `${acc}, ${i}`)} ..`;
    } else {
      return arr.reduce((acc, i) => `${acc}, ${i}`);
    }
  },
  truncate: (str, length) => {
    if (str.length > length) {
      return `${str.substring(0, length)} ..`;
    } else {
      return str;
    }
  },
  indexToText: (indexes, verbs) => {
    return indexes.length ? Utils.joinWithCommas(indexes.map(i => verbs[i])) : "";
  },
  cloneProblem: (problem, update = {}) => {
    return {
      ...problem,
      verbs: problem.verbs.slice(0),
      pastVerbs: problem.pastVerbs.slice(0),
      negativeVerbs: problem.negativeVerbs.slice(0),
      transformationVerbs: {
        ...problem.transformationVerbs
      },
      ...update
    };
  },
  objectToArr: (obj) => {
    return Object.keys(obj).map(k => obj[k]);
  }
}

export default Utils;

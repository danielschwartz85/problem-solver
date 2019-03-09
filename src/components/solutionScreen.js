import React from 'react';
import Grid from '@material-ui/core/Grid';
import SolutionCard from './solutionCard';
import Config from '../config';
import Utils from '../utils';
import {Red, DarkGreen} from './themes'

class SolutionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.manKeys = [
      'problemType',
      'description',
      'negativeVerbs',
      'verbs',
      'name',
      'pastDomino'
    ];
    this.beeingKeys = [
      'problemPlanted',
      'transformationVerbs',
      'newName',
      'futureDomino',
    ];
  }

  get problem() {
    return this.props.problems && this.props.problems[this.props.selectedProblemId];
  }

  render() {
    const problem = this.problem;
    let textProblem = {...problem};
    if (!problem) return null;
    textProblem.verbs = Utils.joinWithCommas(problem.verbs);
    textProblem.negativeVerbs = Utils.indexToText(problem.negativeVerbs, problem.verbs);
    textProblem.transformationVerbs = Utils.transformationSentence(problem);
    textProblem.problemType = Utils.problemTypeSentence(problem);

    const manTexts = this.manKeys.reduce((acc, item) => {
      acc[item] = textProblem[item];
      return acc
    }, {});
    const beeingTexts = this.beeingKeys.reduce((acc, item) => {
      acc[item] = textProblem[item];
      return acc
    }, {});

    // The two image: https://icons8.com/license
    // requires a link to the site formally (for private and commercial use).

    const manCard = (
      <SolutionCard
        content={manTexts}
        header={Config.solutionScreen.man.header}
        subHeader={Config.solutionScreen.man.subHeader}
        description={Config.solutionScreen.man.description}
        imageUrl={`${Utils.sitePrefix}face.png`}
      />
    );

    const beeingCard = (
      <SolutionCard
        content={beeingTexts}
        header={Config.solutionScreen.beeing.header}
        subHeader={Config.solutionScreen.beeing.subHeader}
        description={Config.solutionScreen.beeing.description}
        imageUrl={`${Utils.sitePrefix}plane.png`}
      />
    );

    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <DarkGreen>{beeingCard}</DarkGreen>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Red>{manCard}</Red>
        </Grid>
      </Grid>
    );
  }
}

export default SolutionScreen;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import SolutionCard from './solutionCard';
import Config from '../config';
import Utils from '../utils';

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

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

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

    const manCard = (
      <SolutionCard
        content={manTexts}
        header={Config.solutionScreen.man.header}
        subHeader={Config.solutionScreen.man.subHeader}
        description={Config.solutionScreen.man.description}
        imageUrl={`/${process.env.REACT_APP_SITE_PATH}/manCard.jpg`}
      />
    );

    const beeingCard = (
      <SolutionCard
        content={beeingTexts}
        header={Config.solutionScreen.beeing.header}
        subHeader={Config.solutionScreen.beeing.subHeader}
        description={Config.solutionScreen.beeing.description}
        imageUrl={`/${process.env.REACT_APP_SITE_PATH}/beeingCard.jpg`}
      />
    );

    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          {beeingCard}
        </Grid>
        <Grid item xs={12} sm={6}>
          {manCard}
        </Grid>
      </Grid>
    );
  }
}

export default SolutionScreen;

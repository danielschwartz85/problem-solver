import React from 'react';
import Grid from 'material-ui/Grid';
import SolutionCard from './solutionCard';
import Config from '../config';
import Utils from '../utils';

class SolutionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.manKeys = [
      'description',
      'verbs',
      'negativeVerbs',
      'name',
      'pastDomino'
    ];
    this.beeingKeys = [
      'transformationVerbs',
      'newName',
      'futureDomino'
    ];
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { problem } = this.props;
    let textProblem = {...problem};
    textProblem.verbs = Utils.joinWithCommas(problem.verbs);
    textProblem.negativeVerbs = Utils.indexToText(problem.negativeVerbs, problem.verbs);
    const transformationVerbs = Utils.objectToArr(problem.transformationVerbs);
    textProblem.transformationVerbs = Utils.joinWithCommas(transformationVerbs);

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
        imageUrl="../manCard.jpg"
      />
    );

    const beeingCard = (
      <SolutionCard
        content={beeingTexts}
        header={Config.solutionScreen.beeing.header}
        subHeader={Config.solutionScreen.beeing.subHeader}
        imageUrl="../beeingCard.jpg"
      />
    );

    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          {manCard}
        </Grid>
        <Grid item xs={12} sm={6}>
          {beeingCard}
        </Grid>
      </Grid>
    );
  }
}

export default SolutionScreen;

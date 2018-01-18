import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SecondaryTheme from './themes/secondaryTheme';
import Typography from 'material-ui/Typography';
import Config from '../config';
import {
  ProblemStory,
  NegativeVerbSelect,
  PastVerbSelect,
  VerbExtract,
  Transformation,
  Name,
  NewName,
  PastDomino,
  FutureDomino
} from './pages';

const styles = theme => ({
  card: {
    'min-height': '400px'
  },
  typography: {
    marginBottom: 20
  }
});

class EditPage extends React.Component {
  onChange = (changes) => {
    const didChange = Object.keys(changes).some(k => (
      changes[k] !== this.props.draft[k]
    ));
    didChange && this.props.updateDraft(changes);
  }

  get saveEnabled() {
    const problem = this.props.draft;
    let missingField = !problem.description || !problem.verbs.length;
    missingField = missingField || !problem.name || !problem.newName;
    missingField = missingField || !problem.pastDomino || !problem.futureDomino;
    return !missingField
  }

  get isNewProblem() {
    const selectedProblem = this.props.selectedProblem;
    return selectedProblem === undefined || selectedProblem === null;
  }

  saveCurrentProblem = () => {
    if (this.isNewProblem) {
      this.props.createProblemAndShow(this.props.draft);
    } else {
      this.props.updateProblem(this.props.draft);
    }
  }

  render() {
    const { classes } = this.props;
    const pages = [
      {
        page: <ProblemStory
                description={this.props.draft.description}
                onChange={this.onChange}
              />,
        header: Config.pages.problem.description
      },
      {
        page: <VerbExtract
                verbs={this.props.draft.verbs}
                description={this.props.draft.description}
                onChange={this.onChange}
              />,
        header: Config.pages.verbExtract.description
      },
      {
        page: <PastVerbSelect
                onChange={this.onChange}
                verbs={this.props.draft.verbs}
                pastVerbs={this.props.draft.pastVerbs}
              />,
        header: Config.pages.pastVerbs.description
      },
      {
        page: <NegativeVerbSelect
                onChange={this.onChange}
                verbs={this.props.draft.verbs}
                negativeVerbs={this.props.draft.negativeVerbs}
              />,
        header: Config.pages.negativeVerbs.description
      },
      {
        page: <Transformation
                onChange={this.onChange}
                verbs={this.props.draft.verbs}
                transformationVerbs={this.props.draft.transformationVerbs}
              />,
        header: Config.pages.transformation.description
      },
      {
        page: <Name
                onChange={this.onChange}
                name={this.props.draft.name}
              />,
        header: Config.pages.name.description
      },
      {
        page: <NewName
                onChange={this.onChange}
                newName={this.props.draft.newName}
              />,
        header: Config.pages.newName.description
      },
      {
        page: <PastDomino
                onChange={this.onChange}
                pastDomino={this.props.draft.pastDomino}
              />,
        header: Config.pages.pastDomino.description
      },
      {
        page: <FutureDomino
                onChange={this.onChange}
                futureDomino={this.props.draft.futureDomino}
              />,
        header: Config.pages.futureDomino.description
      }
    ];
    const currentPage = pages[this.props.selectedPage];

    return (
      <SecondaryTheme>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              type="headline"
              component="h2"
              className={classes.typography}
            >
              {currentPage.header}
            </Typography>
            {currentPage.page}
          </CardContent>
          <CardActions>
            <Button>חזור</Button>
            <Button>הבא</Button>
            <Button
              onClick={this.saveCurrentProblem}
              disabled={!this.saveEnabled}
            >
              שמור
            </Button>
          </CardActions>
        </Card>
      </SecondaryTheme>
    );
  }
}

EditPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditPage);

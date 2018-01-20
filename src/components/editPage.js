import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SecondaryTheme from './themes/secondaryTheme';
import Typography from 'material-ui/Typography';
import Config from '../config';
import Utils from '../utils';
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
    const draft = {
      ...this.props.draft,
      verbs: Utils.cleanArray(this.props.draft.verbs)
    };
    if (this.isNewProblem) {
      this.props.createProblemAndShow(draft);
    } else {
      this.props.updateProblemAndFetch(this.props.selectedProblem, draft);
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
        header: Config.pages.problem.description,
        valid: () => Utils.isValid(this.props.draft, 'description')
      },
      {
        page: <VerbExtract
                verbs={this.props.draft.verbs}
                description={this.props.draft.description}
                onChange={this.onChange}
              />,
        header: Config.pages.verbExtract.description,
        valid: () => Utils.isValid(this.props.draft, 'verbs')
      },
      {
        page: <PastVerbSelect
                onChange={this.onChange}
                verbs={this.props.draft.verbs}
                pastVerbs={this.props.draft.pastVerbs}
              />,
        header: Config.pages.pastVerbs.description,
        valid: () => Utils.isValid(this.props.draft, 'pastVerbs')
      },
      {
        page: <NegativeVerbSelect
                onChange={this.onChange}
                verbs={this.props.draft.verbs}
                negativeVerbs={this.props.draft.negativeVerbs}
              />,
        header: Config.pages.negativeVerbs.description,
        valid: () => Utils.isValid(this.props.draft, 'negativeVerbs')
      },
      {
        page: <Transformation
                onChange={this.onChange}
                verbs={this.props.draft.verbs}
                transformationVerbs={this.props.draft.transformationVerbs}
              />,
        header: Config.pages.transformation.description,
        valid: () => Utils.isValid(this.props.draft, 'transformationVerbs')
      },
      {
        page: <Name
                onChange={this.onChange}
                name={this.props.draft.name}
              />,
        header: Config.pages.name.description,
        valid: () => Utils.isValid(this.props.draft, 'name')
      },
      {
        page: <NewName
                onChange={this.onChange}
                newName={this.props.draft.newName}
              />,
        header: Config.pages.newName.description,
        valid: () => Utils.isValid(this.props.draft, 'newName')
      },
      {
        page: <PastDomino
                onChange={this.onChange}
                pastDomino={this.props.draft.pastDomino}
              />,
        header: Config.pages.pastDomino.description,
        valid: () => Utils.isValid(this.props.draft, 'pastDomino')
      },
      {
        page: <FutureDomino
                onChange={this.onChange}
                futureDomino={this.props.draft.futureDomino}
              />,
        header: Config.pages.futureDomino.description,
        valid: () => Utils.isValid(this.props.draft, 'futureDomino')
      }
    ];
    const currentPage = pages[this.props.selectedPage];
    const backEnabled = !!this.props.selectedPage;
    const nextEnabled = currentPage.valid();

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
            <Button disabled={!backEnabled}>חזור</Button>
            <Button disabled={!nextEnabled}>הבא</Button>
            {this.saveEnabled && (
              <Button onClick={this.saveCurrentProblem}>שמור</Button>
            )}
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

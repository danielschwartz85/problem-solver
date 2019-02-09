import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SecondaryTheme from './themes/secondaryTheme';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Config from '../config';
import Utils from '../utils';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import {
  ProblemStory,
  NegativeVerbSelect,
  PastVerbSelect,
  VerbExtract,
  Transformation,
  Name,
  NewName,
  PastDomino,
  FutureDomino,
  ProblemPlanted
} from './pages';

const styles = theme => ({
  card: {
    'min-height': '400px'
  },
  typography: {
    marginBottom: 20
  },
  snackbar: {
    'margin-top': '72px',
    'z-index': 1
  },
  progress: {
    'margin-top': '10px'
  },
});

class EditPage extends React.Component {
  // We are using 'loading' and not redux 'creatingProblem'
  // since we need to know when the fetch after save is done also.
  state = {
    showSavedMessage: false,
    showErrorMessage: false,
    loading: false
  }

  componentWillMount() {
    if (this.draft) return;
    if (this.props.selectedProblemId) {
      // make sure fetch problems is done
      // when edit page is the startup page
      setTimeout(() => {
        this.props.selectDraft(this.props.selectedProblemId);
      }, 0);
    } else {
      this.props.clearDraft();
    }
  }

  onChange = (changes) => {
    const didChange = Object.keys(changes).some(k => (
      changes[k] !== this.props.draft[k]
    ));
    didChange && this.props.updateDraft(changes);
  }

  onPageSelected = (i) => {
    this.props.onPageSelected(this.props.selectedPage + i)
  }

  saveCurrentProblem = () => {
    this.closeSnackbar();
    this.setState({ loading: true });
    const draft = {
      ...this.props.draft,
      verbs: Utils.cleanArray(this.props.draft.verbs)
    };

    if (this.isNewProblem) {
      this.props.createProblemAndFetch(draft).then(newId => {
        this.setState({ loading: false, showErrorMessage: false });
        this.props.onProblemSelected(newId);
      }).catch(e => {
        this.setState({ loading: false, showErrorMessage: true });
      });
    } else {
      this.props.updateProblemAndFetch(this.props.selectedProblemId, draft).then(() => {
        this.setState({
          loading: false,
          showSavedMessage: true,
          showErrorMessage: false
        });
      }).catch(e => {
        this.setState({ loading: false, showErrorMessage: true });
      });
    }
  }

  closeSnackbar = () => {
    this.setState({ showSavedMessage: false, showErrorMessage: false })
  }

  get errorMessage() {
    return this.props.createProblemError || this.props.updateProblemError;
  }

  get saveEnabled() {
    return Utils.isValidProblem(this.props.draft);
  }

  get isNewProblem() {
    return !this.props.selectedProblemId;
  }

  render() {
    const { classes } = this.props;
    if (!this.props.draft) return null;
    const nonNewVerbs = Utils.nonNewVerbs(this.props.draft);
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
                verbs={nonNewVerbs}
                negativeVerbs={this.props.draft.negativeVerbs}
              />,
        header: Config.pages.negativeVerbs.description,
        valid: () => Utils.isValid(this.props.draft, 'negativeVerbs')
      },
      {
        page: <Transformation
                onChange={this.onChange}
                verbs={nonNewVerbs}
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
                transformationVerbs={this.props.draft.transformationVerbs}
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
      },
      {
        page: <ProblemPlanted
                onChange={this.onChange}
                transformationSentence={Utils.transformationSentence(this.props.draft)}
                description={this.props.draft.description}
                problemPlanted={this.props.draft.problemPlanted}
              />,
        header: Config.pages.problemPlanted.description,
        valid: () => Utils.isValid(this.props.draft, 'problemPlanted')
      }
    ];
    const currentPage = pages[this.props.selectedPage];
    const isFirstPage = !!this.props.selectedPage;
    const isLastPage = this.props.selectedPage === (pages.length - 1);
    const nextEnabled = !isLastPage && currentPage.valid();
    const showSave = !this.isNewProblem || isLastPage;

    // Waiting problem creation
    let loadingSection;
    if(this.state.loading) {
      loadingSection = (
        <Grid container direction="column" align="center">
          <Grid item>
            <CircularProgress
              className={classes.progress}
              thickness={5}
              color="primary"
            />
          </Grid>
        </Grid>
      );
    }

    const card = (
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
          <Button
            disabled={!isFirstPage}
            onClick={() => this.onPageSelected(-1)}
          >
            {Config.pages.back}
          </Button>
          <Button
            disabled={!nextEnabled}
            onClick={() => this.onPageSelected(1)}
          >
            {Config.pages.next}
          </Button>
          {showSave && (
            <Button
              onClick={this.saveCurrentProblem}
              disabled={!this.saveEnabled}
            >
              {Config.pages.save}
            </Button>
          )}
        </CardActions>
      </Card>
    );

    let snackbarMessage, retryButton = null;
    if(this.state.showSavedMessage) {
      snackbarMessage = Config.pages.saveMessage;
    } else if (this.state.showErrorMessage) {
      snackbarMessage = `${Config.pages.saveErrorMessage} ${this.errorMessage}`;
      retryButton = (
        <Button color="primary" size="small" onClick={this.saveCurrentProblem}>
          {Config.pages.retrySave}
        </Button>
      )
    }

    return (
      <SecondaryTheme>
        <Snackbar className={classes.snackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={this.state.showSavedMessage || this.state.showErrorMessage}
          onClose={this.closeSnackbar}
          autoHideDuration={this.state.showSavedMessage ? 1500 : 10000}
          transition={Fade}
          message={<span id="message-id">{snackbarMessage}</span>}
          action={retryButton}
        />
        {loadingSection || card}
      </SecondaryTheme>
    );
  }
}

EditPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditPage);

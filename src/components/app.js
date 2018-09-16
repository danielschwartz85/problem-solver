import React from 'react';
import MainTheme from './themes/mainTheme';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import ProblemAppBar from './problemAppBar';
import EditPageContainer from '../containers/editPage';
import SolutionScreenContainer from '../containers/solutionScreen';
import ProblemScreenContainer from '../containers/problemScreen';
import WelcomeScreenContainer from '../containers/welcomeScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  page:{
    marginTop: 15
  },
  progress: {
    marginTop: 150
  }
});

class App extends React.Component {
  state = {
    startup: true
  }

  componentWillMount() {
    this.props.fetchProblems().then(() => {
      this.setState({ startup : false });
    });
  }

  onEditorPageSelected = (history) => (value) => {
    if (this.isLoading) return;
    history.push(`${value + 1}`);
  }

  onNewProblemSelected = (history) => () => {
    if (this.isLoading) return;
    history.push(`/${process.env.REACT_APP_SITE_PATH}/problems/new/1`);
  }

  onProblemSelected = (history) => (id) => {
    if (this.isLoading) return;
    history.push(`/${process.env.REACT_APP_SITE_PATH}/problems/${id}`);
  }

  onEditorSelected = (history, id) => () => {
    if (this.isLoading) return;
    history.push(`/${process.env.REACT_APP_SITE_PATH}/problems/${id}/edit/1`);
  }

  onSolutionSelected = (history, id) => () => {
    history.push(`/${process.env.REACT_APP_SITE_PATH}/problems/${id}/solution`);
  }

  get isLoading () {
    let loading = this.props.creatingProblem || this.props.updatingProblem;
    loading = loading || this.props.deletingProblem || this.props.fetchingProblems;
    return loading;
  }

  render() {
    const { classes } = this.props;
    const problemScreen = ({match, history}) => (
      <ProblemScreenContainer
        onEditorSelected={this.onEditorSelected(history, match.params.id)}
        selectedProblemId={match.params.id}
        onSolutionSelected={this.onSolutionSelected(history, match.params.id)}
        onHomeSelected={() => history.push(`/${process.env.REACT_APP_SITE_PATH}/`) }
      />
    );
    const solutionScreen = ({match}) => (
      <SolutionScreenContainer selectedProblemId={match.params.id} />
    );
    const editor = ({match, history}) => (
      <EditPageContainer
        selectedPage={match.params.pageNum - 1}
        onPageSelected={this.onEditorPageSelected(history)}
        onProblemSelected={this.onProblemSelected(history)}
        selectedProblemId={match.params.id}
      />
    );
    const welcomeScreen = ({ history }) => (
      <WelcomeScreenContainer
        onNewProblemSelected={this.onNewProblemSelected(history)}
      />
    );
    const appBar = ({match, history}) => {
      let editorPage, reg = /(?:edit|new)\/(\d+)$/.exec(match.url);
      if (reg && reg[1]) editorPage = parseInt(reg[1], 10) - 1;
      return (
        <ProblemAppBar
          onProblemSelected={this.onProblemSelected(history)}
          onNewProblemSelected={this.onNewProblemSelected(history)}
          onEditorPageSelected={this.onEditorPageSelected(history)}
          editorPage={editorPage}
        />
      );
    };

    let mainScreen = (
      <Grid item xs={12} className={classes.page}>
        <Route path={`(/${process.env.REACT_APP_SITE_PATH})?/`} exact={true} render={welcomeScreen}/>
        <Route path={`(/${process.env.REACT_APP_SITE_PATH})?/problems/:id`} exact={true} render={problemScreen}/>
        <Route path={`(/${process.env.REACT_APP_SITE_PATH})?/problems/:id/solution`} exact={true} render={solutionScreen}/>
        <Route path={`(/${process.env.REACT_APP_SITE_PATH})?/problems/:id/edit/:pageNum`} exact={true} render={editor}/>
        <Route path={`(/${process.env.REACT_APP_SITE_PATH})?/problems/new/:pageNum`} exact={true} render={editor}/>
      </Grid>
    );
    // This is for first load, show loading screen instead of components
    if(this.state.startup) {
      mainScreen = (
        <Grid container direction="column" align="center">
          <Grid item>
            <CircularProgress
              className={classes.progress}
              thickness={5}
              color="accent"
            />
          </Grid>
        </Grid>
      )
    }

    return (
      <MainTheme>
        <BrowserRouter>
          <div className={classes.root}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Route path="*" render={appBar}/>
              </Grid>
              {mainScreen}
            </Grid>
          </div>
        </BrowserRouter>
      </MainTheme>
    );
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

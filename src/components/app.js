import React from 'react';
import {Main} from './themes';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ProblemAppBar from './problemAppBar';
import EditPageContainer from '../containers/editPage';
import SolutionScreenContainer from '../containers/solutionScreen';
import ProblemScreenContainer from '../containers/problemScreen';
import WelcomeScreenContainer from '../containers/welcomeScreen';
import EyeTypesScreenContainer from '../containers/eyeTypesScreen';
import MandalasScreenContainer from '../components/mandalasScreen';
import {HashRouter, Route} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  page: {
    marginTop: 25,
  },
  progress: {
    marginTop: 150,
  },
});

class App extends React.Component {
  state = {
    startup: true,
  };

  componentDidMount() {
    Promise.all([this.props.fetchProblems(), this.props.fetchSelectedEyeTypes()]).then(() => {
      this.setState({startup: false});
    });
  }

  onEditorPageSelected = history => value => {
    if (this.isLoading) return;
    this._setPath(history, `${value + 1}`);
  };

  onNewProblemSelected = history => () => {
    if (this.isLoading) return;
    this._setPath(history, '/problems/new/1');
  };

  onEyeTypesSelected = history => () => {
    if (this.isLoading) return;
    this._setPath(history, '/eyeTypes');
  };

  onProblemSelected = history => id => {
    if (this.isLoading) return;
    this._setPath(history, `/problems/${id}`);
  };

  onEditorSelected = (history, id) => () => {
    if (this.isLoading) return;
    this._setPath(history, `/problems/${id}/edit/1`);
  };

  onSolutionSelected = (history, id) => () => {
    this._setPath(history, `/problems/${id}/solution`);
  };

  onMandalasSelected = history => () => {
    this._setPath(history, '/mandalas');
  };

  _setPath(history, path) {
    if (history.location.pathname !== path) {
      history.push(path);
    }
  }

  get isLoading() {
    let loading = this.props.creatingProblem || this.props.updatingProblem;
    loading = loading || this.props.deletingProblem || this.props.fetchingProblems;
    loading = loading || this.props.fetchingEyeTypes || this.props.togglingEyeType;
    return loading;
  }

  render() {
    const {classes} = this.props;
    const problemScreen = ({match, history}) => (
      <ProblemScreenContainer
        onEditorSelected={this.onEditorSelected(history, match.params.id)}
        selectedProblemId={match.params.id}
        onSolutionSelected={this.onSolutionSelected(history, match.params.id)}
        onHomeSelected={() => history.push('')}
      />
    );
    const eyeTypesScreen = () => <EyeTypesScreenContainer />;
    const mandalasScreen = () => <MandalasScreenContainer />;
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
    const welcomeScreen = ({history}) => (
      <WelcomeScreenContainer onNewProblemSelected={this.onNewProblemSelected(history)} />
    );
    const appBar = ({match, history}) => {
      let editorPage,
        reg = /(?:edit|new)\/(\d+)$/.exec(match.url);
      if (reg && reg[1]) editorPage = parseInt(reg[1], 10) - 1;
      return (
        <ProblemAppBar
          onProblemSelected={this.onProblemSelected(history)}
          onNewProblemSelected={this.onNewProblemSelected(history)}
          onEyeTypesSelected={this.onEyeTypesSelected(history)}
          onMandalasSelected={this.onMandalasSelected(history)}
          onEditorPageSelected={this.onEditorPageSelected(history)}
          editorPage={editorPage}
        />
      );
    };

    let mainScreen = (
      <Grid item xs={12} className={classes.page}>
        <Route path={''} exact={true} render={welcomeScreen} />
        <Route path={'/problems/:id'} exact={true} render={problemScreen} />
        <Route path={'/eyeTypes'} exact={true} render={eyeTypesScreen} />
        <Route path={'/mandalas'} exact={true} render={mandalasScreen} />
        <Route path={`/problems/:id/solution`} exact={true} render={solutionScreen} />
        <Route path={`/problems/:id/edit/:pageNum`} exact={true} render={editor} />
        <Route path={`/problems/new/:pageNum`} exact={true} render={editor} />
      </Grid>
    );
    // This is for first load, show loading screen instead of components
    if (this.state.startup || this.props.creatingProblem) {
      mainScreen = (
        <Grid container direction="column" align="center">
          <Grid item>
            <CircularProgress className={classes.progress} thickness={5} color="primary" />
          </Grid>
        </Grid>
      );
    }

    return (
      <Main>
        <HashRouter>
          <div className={classes.root}>
            <Grid container>
              <Grid item xs={12}>
                <Route path="*" render={appBar} />
              </Grid>
              {mainScreen}
            </Grid>
          </div>
        </HashRouter>
      </Main>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

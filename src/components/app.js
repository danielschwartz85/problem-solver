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
import {HashRouter, Route} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import {create} from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName, jssPreset} from '@material-ui/core/styles';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});
const generateClassName = createGenerateClassName();

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  page: {
    marginTop: 15,
  },
  progress: {
    marginTop: 150,
  },
});

class App extends React.Component {
  state = {
    startup: true,
  };

  componentWillMount() {
    Promise.all([this.props.fetchProblems(), this.props.fetchSelectedEyeTypes()]).then(() => {
      this.setState({startup: false});
    });
  }

  onEditorPageSelected = history => value => {
    if (this.isLoading) return;
    history.replace(`${value + 1}`);
  };

  onNewProblemSelected = history => () => {
    if (this.isLoading) return;
    history.push(`/problems/new/1`);
  };

  onEyeTypesSelected = history => () => {
    if (this.isLoading) return;
    history.push(`/eyeTypes`);
  };

  onProblemSelected = history => id => {
    if (this.isLoading) return;
    history.push(`/problems/${id}`);
  };

  onEditorSelected = (history, id) => () => {
    if (this.isLoading) return;
    history.push(`/problems/${id}/edit/1`);
  };

  onSolutionSelected = (history, id) => () => {
    history.push(`/problems/${id}/solution`);
  };

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
        <Route path={`/problems/:id/solution`} exact={true} render={solutionScreen} />
        <Route path={`/problems/:id/edit/:pageNum`} exact={true} render={editor} />
        <Route path={`/problems/new/:pageNum`} exact={true} render={editor} />
      </Grid>
    );
    // This is for first load, show loading screen instead of components
    if (this.state.startup) {
      mainScreen = (
        <Grid container direction="column" align="center">
          <Grid item>
            <CircularProgress className={classes.progress} thickness={5} color="primary" />
          </Grid>
        </Grid>
      );
    }

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <Main>
          <HashRouter>
            <div className={classes.root}>
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <Route path="*" render={appBar} />
                </Grid>
                {mainScreen}
              </Grid>
            </div>
          </HashRouter>
        </Main>
      </JssProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

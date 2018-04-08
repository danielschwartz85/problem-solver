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

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  page:{
    marginTop: 15
  }
});

class App extends React.Component {
  get isCreatingProblem () {
    return this.props.creatingProblem;
  }

  componentWillMount() {
    this.props.fetchProblems();
  }

  onEditorPageSelected = (history) => (value) => {
    if (this.isCreatingProblem) return;
    history.push(`${value + 1}`);
  }

  onNewProblemSelected = (history) => () => {
    if (this.isCreatingProblem) return;
    history.push('/problems/new/1');
  }

  onProblemSelected = (history) => (id) => {
    if (this.isCreatingProblem) return;
    history.push(`/problems/${id}`);
  }

  onEditorSelected = (history, id) => () => {
    if (this.isCreatingProblem) return;
    history.push(`/problems/${id}/edit/1`);
  }

  onSolutionSelected = (history, id) => () => {
    history.push(`/problems/${id}/solution`);
  }

  render() {
    const { classes } = this.props;
    const problemScreen = ({match, history}) => (
      <ProblemScreenContainer
        onEditorSelected={this.onEditorSelected(history, match.params.id)}
        selectedProblemId={match.params.id}
        onSolutionSelected={this.onSolutionSelected(history, match.params.id)}
        onHomeSelected={() => history.push(`/`) }
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

    // <Route path="/action-therapy" exact={true} render={welcomeScreen}/>
    return (
      <MainTheme>
        <BrowserRouter>
          <div className={classes.root}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Route path="*" render={appBar}/>
              </Grid>
              <Grid item xs={12} className={classes.page}>
               <Route path="/" exact={true} render={welcomeScreen}/>
               <Route path="/problems/:id" exact={true} render={problemScreen}/>
               <Route path="/problems/:id/solution" exact={true} render={solutionScreen}/>
               <Route path="/problems/:id/edit/:pageNum" exact={true} render={editor}/>
               <Route path="/problems/new/:pageNum" exact={true} render={editor}/>
              </Grid>
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

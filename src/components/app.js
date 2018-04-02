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
  constructor(props) {
    super(props);
    this.state = {
      editorPage: null
    };
  }

  componentDidMount() {
    this.props.fetchProblems();
  }

  onEditorPageSelected = (value) => {
    this.setState({ editorPage: value });
  }

  onNewProblemSelected = () => {
    this.setState({ editorPage: 0 });
  }

  onProblemSelected = (id) => {
    this.setState({ editorPage: null });
  }

  onProblemEdit = () => {
    this.setState({ editorPage: 0 });
  }

  get selectedProblem() {
    let selectedProblemId = this.props.selectedProblem;
    if (selectedProblemId === null || selectedProblemId === undefined) {
      return null;
    } else {
      return this.props.problems[selectedProblemId];
    }
  }

  render() {
    const { classes } = this.props;
    const problemScreen = ({match}) => (
      <ProblemScreenContainer
        onEdit={this.onProblemEdit}
        selectedProblemId={match.params.id}
      />
    );
    const solutionScreen = ({match}) => (
      <SolutionScreenContainer selectedProblemId={match.params.id} />
    );
    const editor = ({match}) => (
      <EditPageContainer
        selectedPage={match.params.pageNum - 1}
        onPageSelected={this.onEditorPageSelected}
        selectedProblemId={match.params.id}
      />
    );
    const welcomeScreen = () => (
      <WelcomeScreenContainer onNewProblemSelected={this.onNewProblemSelected} />
    );
    const appBar = ({match}) => (
      <ProblemAppBar
        onProblemSelected={this.onProblemSelected}
        onNewProblemSelected={this.onNewProblemSelected}
        router={match}
      />
    );

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

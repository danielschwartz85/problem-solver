import React from 'react';
import MainTheme from './themes/mainTheme';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import ProblemAppBar from './problemAppBar';
import TopMenuContainer from '../containers/topMenu';
import EditPageContainer from '../containers/editPage';
import SolutionScreenContainer from '../containers/solutionScreen';
import ProblemScreenContainer from '../containers/problemScreen';
import WelcomeScreenContainer from '../containers/welcomeScreen';
import { PAGES } from '../actions/routingActions';

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
    const page = [
      <WelcomeScreenContainer onNewProblemSelected={this.onNewProblemSelected}/>,
      <ProblemScreenContainer onEdit={this.onProblemEdit} />,
      <SolutionScreenContainer/>,
      <EditPageContainer
        selectedPage={this.state.editorPage}
        onPageSelected={this.onEditorPageSelected}
      />
    ][this.props.page];

    let topMenu;
    if (PAGES['editor'] === this.props.page) {
      topMenu = (
        <TopMenuContainer
          selectedPage={this.state.editorPage}
          onPageSelected={this.onEditorPageSelected}
        />
      );
    }
    return (
      <MainTheme>
        <div className={classes.root}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <ProblemAppBar
                onProblemSelected={this.onProblemSelected}
                onNewProblemSelected={this.onNewProblemSelected}
                topComponent={topMenu}
              />
            </Grid>
            <Grid item xs={12} className={classes.page}>
              {page}
            </Grid>
          </Grid>
        </div>
      </MainTheme>
    );
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

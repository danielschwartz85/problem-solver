import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import SideMenuContainer from '../containers/sideMenu';

const styles = theme => ({
  root: {
    flex: {
      flex:1
    },
    flexGrow: 1,
    width: '100%',
    marginTop: '32px',
  },
  appbar: {
    height: '72px'
  }
});

class ProblemAppBar extends React.Component {
  onNewProblemSelected = () => {
    this.props.onNewProblemSelected();
  }

  onProblemSelected = (id) => {
    this.props.onProblemSelected(id);
  }

  onEditorPageSelected = (event, value) => {
    this.props.onEditorPageSelected(event, value)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.appbar}>
            <SideMenuContainer
              onProblemSelected={this.onProblemSelected}
              onNewProblemSelected={this.onNewProblemSelected}
            />
            {this.props.topComponent}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ProblemAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProblemAppBar);

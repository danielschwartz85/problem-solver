import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SideMenuContainer from '../containers/sideMenu';
import TopMenuContainer from '../containers/topMenu';

const styles = theme => ({
  root: {
    flex: {
      flex:1
    },
    flexGrow: 1,
    width: '100%',
    marginTop: '32px'
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
    const { classes, editorPage } = this.props;
    let topMenu;
    if (editorPage !== undefined && editorPage !== null) {
      topMenu = (
        <TopMenuContainer
          selectedPage={editorPage}
          onPageSelected={this.onEditorPageSelected}
        />
      );
    }

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.appbar}>
              <SideMenuContainer
                onProblemSelected={this.onProblemSelected}
                onNewProblemSelected={this.onNewProblemSelected}
              />
            {topMenu}
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

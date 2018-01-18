import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import IconHistory from 'material-ui-icons/History';
import IconReportProblem from 'material-ui-icons/ReportProblem';
import IconAccessibility from 'material-ui-icons/Accessibility';
import IconMoodBad from 'material-ui-icons/MoodBad';
import IconTransfer from 'material-ui-icons/TransferWithinAStation';
import IconAssignment from 'material-ui-icons/AssignmentInd';
import IconPermIdentity from 'material-ui-icons/PermIdentity';
import IconSquare from 'material-ui-icons/CropSquare';
import IconTriangle from 'material-ui-icons/ChangeHistory';
import Config from '../../config';

const styles = theme => ({
  tabs: {
    direction: 'ltr'
  }
});

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.pages = [
      {name: 'futureDomino', icon: IconTriangle},
      {name: 'pastDomino', icon: IconSquare},
      {name: 'newName', icon: IconPermIdentity},
      {name: 'name', icon: IconAssignment},
      {name: 'transformation', icon: IconTransfer},
      {name: 'negativeVerbs', icon: IconMoodBad},
      {name: 'pastVerbs', icon: IconHistory},
      {name: 'verbExtract', icon: IconAccessibility},
      {name: 'problem', icon: IconReportProblem}
    ];
  }

  onPageSelected = (event, value) => {
    this.props.onPageSelected(event, this.pages.length - value - 1);
  }

  render() {
    const { classes } = this.props;
    const tabs = this.pages.map(page => {
      const TabIcon = page.icon;
      return (
        <Tab
          key={Config.pages[page.name].tab.name}
          label={Config.pages[page.name].tab.name}
          icon={<TabIcon className={classes.icon}/>}
        />
      );
    });
    return (
      <Tabs
        className={classes.tabs}
        scrollable
        scrollButtons="auto"
        value={this.pages.length - this.props.selectedPage - 1}
        onChange={this.onPageSelected}
      >
        {tabs}
      </Tabs>
    );
  }
}

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopMenu);

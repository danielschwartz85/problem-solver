import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconPastVerb from '@material-ui/icons/Iso';
import IconProblem from '@material-ui/icons/Help';
import IconVerbExtract from '@material-ui/icons/AddShoppingCart';
import IconNegativeVerbs from '@material-ui/icons/BugReport';
import IconTransformation from '@material-ui/icons/PowerSettingsNew';
import IconName from '@material-ui/icons/TrendingUp';
import IconNewName from '@material-ui/icons/Group';
import IconPastDomino from '@material-ui/icons/FilterVintage';
import IconTriangle from '@material-ui/icons/ChangeHistory';
import Config from '../../config';
import Utils from '../../utils';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.pages = [
      {name: 'problem', icon: IconProblem, key: 'description'},
      {name: 'verbExtract', icon: IconVerbExtract, key: 'verbs'},
      {name: 'pastVerbs', icon: IconPastVerb, key: 'pastVerbs'},
      {name: 'negativeVerbs', icon: IconNegativeVerbs, key: 'negativeVerbs'},
      {name: 'transformation', icon: IconTransformation, key: 'transformationVerbs'},
      {name: 'name', icon: IconName, key: 'name'},
      {name: 'newName', icon: IconNewName, key: 'newName'},
      {name: 'pastDomino', icon: IconPastDomino, key: 'pastDomino'},
      {name: 'futureDomino', icon: IconTriangle, key: 'futureDomino'},
      {name: 'problemPlanted', icon: IconTransformation, key: 'problemPlanted'},
    ];
  }

  componentDidMount() {
    if (!this.props.draft && this.selectedPage !== 0) {
      this.props.onPageSelected(0);
    }
  }

  onPageSelected = (_event, value) => {
    this.props.onPageSelected(value);
  };

  render() {
    if (!this.props.draft) return null;
    let firstInvalid;
    this.pages.some((_page, i) => {
      firstInvalid = i;
      return !Utils.isValid(this.props.draft, this.pages[i].key);
    });

    const tabs = this.pages.map((page, i) => {
      const TabIcon = page.icon;
      const disabled = i > firstInvalid;
      return (
        <Tab
          key={Config.pages[page.name].tab.name}
          label={Config.pages[page.name].tab.name}
          icon={<TabIcon />}
          disabled={disabled}
        />
      );
    });

    return (
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={this.props.selectedPage}
        onChange={this.onPageSelected}>
        {tabs}
      </Tabs>
    );
  }
}

export default TopMenu;

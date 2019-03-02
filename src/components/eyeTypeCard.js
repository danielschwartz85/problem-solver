import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Config from '../config';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Utils from '../utils';
import {LightGreen} from './themes';

const styles = theme => ({
    media: {
      height: 194
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
});

class EyeTypeCard extends React.Component {
  render() {
    const { classes } = this.props;
    const contentPanels = ["color", "origin", "actions"].map((key, i) => (
      <ExpansionPanel key={`${key}-${i}`}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            {Config.eyeTypesScreen.headers[key]}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {
              !Array.isArray(this.props[key])
              ? this.props[key]
              : Utils.joinWithCommas(this.props[key])
            }
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));

    return (
      <LightGreen>
        <Card className={classes.card}>
          <CardHeader title={this.props.name}/>
          <CardMedia
            className={classes.media}
            image={this.props.image}
          />
          <CardContent>
            <Typography component="p">
              {this.props.origin}
            </Typography>
          </CardContent>
          {contentPanels}
        </Card>
      </LightGreen>
    );
  }
}

EyeTypeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EyeTypeCard);

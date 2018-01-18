import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Config from '../config';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

const styles = theme => ({
    card: {

    },
    media: {
      height: 194
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    }
});

class SolutionCard extends React.Component {
  render() {
    const { classes, content } = this.props;
    const contentPanels = Object.keys(content).map((key, i) => (
      <ExpansionPanel key={`${content[key]}-${i}`}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            {Config.solutionScreen.problemKeyNames[key]}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {content[key]}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.header}
          subheader={this.props.subHeader}
        />
        <CardMedia
          className={classes.media}
          image={this.props.imageUrl}
        />
        <CardContent>
          <Typography component="p">
            {Config.solutionScreen.man.description}
          </Typography>
        </CardContent>
        {contentPanels}
      </Card>
    );
  }
}

SolutionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SolutionCard);

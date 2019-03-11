import React from 'react';
import TextField from '@material-ui/core/TextField';
import Config from '../../config';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  secondaryPaper: theme.mixins.gutters({
    background: theme.palette.secondaryPaper,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  typography: {
    color: 'black',
  },
});

class ProblemPlanted extends React.Component {
  onChange = e => {
    if (e.target.value !== this.props.problemPlanted) {
      if (e.target.value !== this.props.description) {
        this.props.onChange({problemPlanted: e.target.value});
      } else {
        this.props.onChange({problemPlanted: null});
      }
    }
  };

  render() {
    const {classes} = this.props;
    const transformation = (
      <Paper className={classes.secondaryPaper} elevation={4}>
        <Typography type="headline" component="h3" className={classes.typography}>
          {Config.pages.problemPlanted.cardHeader}
        </Typography>
        <Typography component="p" className={classes.typography}>
          {this.props.transformationSentence}
        </Typography>
      </Paper>
    );
    const currentValue = this.props.problemPlanted || this.props.description;
    return (
      <Grid container>
        <Grid item md={12} xs={12}>
          <Grid item xs={12} md={6}>
            {transformation}
          </Grid>
        </Grid>
        <Grid item md={12} xs={12}>
          <Grid item xs={12} md={6}>
            <TextField
              value={currentValue}
              onChange={this.onChange}
              fullWidth={true}
              margin="normal"
              rows="5"
              multiline
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ProblemPlanted.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProblemPlanted);

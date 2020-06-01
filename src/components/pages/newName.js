import React from 'react';
import TextField from '@material-ui/core/TextField';
import Config from '../../config';
import Utils from '../../utils';
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
    marginTop: theme.spacing(3),
  }),
  typography: {
    color: 'black',
  },
});

class NewName extends React.Component {
  onChange = e => {
    this.props.onChange({newName: e.target.value});
  };

  render() {
    const {classes} = this.props;
    let verbArray = Utils.objectToArr(this.props.transformationVerbs);
    const transformation = (
      <Paper className={classes.secondaryPaper} elevation={4}>
        <Typography type="headline" component="h3" className={classes.typography}>
          {Config.pages.newName.cardHeader}
        </Typography>
        <Typography component="p" className={classes.typography}>
          {Utils.joinWithCommas(verbArray)}
        </Typography>
      </Paper>
    );

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
              value={this.props.newName}
              onChange={this.onChange}
              fullWidth={true}
              placeholder={Config.pages.newName.inputText}
              margin="normal"
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

NewName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewName);

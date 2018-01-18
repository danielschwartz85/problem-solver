import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Config from '../../config';

const styles = theme => ({
  marginTop: 30,
  secondaryPaper: theme.mixins.gutters({
    background: theme.palette.secondaryPaper,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  typography: {
    color: 'black'
  },
  input: {
    width: '100%'
  }
});

class VerbExtract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verbs: this.props.verbs,
      description: this.props.description
    };
  }

  onBlur = (e, i) => {
    this.props.onChange({ verbs: this.state.verbs });
  }

  onChange = (e, i) => {
    const newVerbs = this.state.verbs.slice(0);
    newVerbs[i] = e.target.value;
    this.setState({ verbs: newVerbs });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.verbs !== this.state.verbs) {
      this.setState({ verbs: nextProps.verbs });
    }
    if (nextProps.description !== this.state.description) {
      this.setState({ description: nextProps.description });
    }
  }

  render() {
    const { classes } = this.props;
    const userProblem =
      <Paper className={classes.secondaryPaper} elevation={4}>
        <Typography
          type="headline"
          component="h3"
          className={classes.typography}
        >
          {Config.pages.verbExtract.cardHeader}
        </Typography>
        <Typography
          component="p"
          className={classes.typography}
        >
          {this.state.description || Config.pages.verbExtract.emptyProblem}
        </Typography>
      </Paper>

    const verbItems = Array(6).fill(null).map((item, i) => (
      <ListItem key={i}>
        <Input
          className={classes.input}
          placeholder={Config.pages.verbExtract.inputText}
          onBlur={e => {this.onBlur(e, i)}}
          onChange={e => {this.onChange(e, i)}}
          value={this.state.verbs[i] || ''}
        />
      </ListItem>
    ));
    const verbList = <List className={classes.list}>{verbItems}</List>

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            {verbList}
          </Grid>
          <Grid item xs={12} sm={6}>
            {userProblem}
          </Grid>
        </Grid>
      </div>
    );
  }
}

VerbExtract.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VerbExtract);

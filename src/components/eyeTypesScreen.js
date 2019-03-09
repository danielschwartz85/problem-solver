import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Config from '../config';
import EyeTypeCard from './eyeTypeCard';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    width: '100%'
  },
  media: {
    height: 200,
  },
  snackbar: {
    'margin-top': '72px',
    'z-index': 1
  },
});

class EyeTypesScreen extends React.Component {
  onChange = id => () => {
    this.props.toggleEyeTypeAndFetch(id);
  }

  render() {
    const eyeTypes = Object.entries(Config.eyeTypesScreen.types).map(([id, type]) => (
      <Grid item xs={12} sm={4} key={id}>
        <EyeTypeCard
          name={type.name}
          color={type.color}
          description={type.description}
          origin={type.origin}
          actions={type.actions}
          image={type.image}
          selected={!!this.props.selectedEyeTypes[id]}
          onChange={this.onChange(id)}
        />
      </Grid>
    ));

    return <Grid container spacing={16}>{eyeTypes}</Grid>;
  }
}

EyeTypesScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EyeTypesScreen);

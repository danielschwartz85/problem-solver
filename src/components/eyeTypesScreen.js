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
  }
});

class EyeTypesScreen extends React.Component {
  render() {
    const eyeTypes = Config.eyeTypesScreen.types.map((type, i) => (
      <Grid item xs={12} sm={4}>
        <EyeTypeCard
          key={type.name}
          name={type.name}
          color={type.color}
          description={type.description}
          origin={type.origin}
          actions={type.actions}
          image={type.image}
        />
      </Grid>
    ))
    return (
      <Grid container spacing={16}>
          {eyeTypes}
      </Grid>
    );
  }
}

EyeTypesScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EyeTypesScreen);

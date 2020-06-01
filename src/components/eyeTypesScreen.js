import React from 'react';
import Config from '../config';
import EyeTypeCard from './eyeTypeCard';
import Grid from '@material-ui/core/Grid';

class EyeTypesScreen extends React.Component {
  onChange = id => () => {
    this.props.toggleEyeTypeAndFetch(id);
  };

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

    return (
      <Grid container spacing={2}>
        {eyeTypes}
      </Grid>
    );
  }
}

export default EyeTypesScreen;

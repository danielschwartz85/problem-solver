import React from 'react';
import {White} from './themes';
import MandalaCard from './mandalaCard';
import Grid from '@material-ui/core/Grid';

class MandalasScreen extends React.Component {
  render() {
    return (
      <White>
        <Grid container spacing={1}>
          <MandalaCard shuffelSpeed={150} />
          <Grid item xs={12} sm={12}></Grid>
        </Grid>
      </White>
    );
  }
}

export default MandalasScreen;

import React from 'react';
import PropTypes from 'prop-types';
import { range, set } from 'lodash';
import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';

import Typography from 'material-ui/Typography';

import withRoot from '../src/withRoot';

import { Layout } from '../src/Layout';
import { PrintSheet } from '../src/PrintSheet';
import { unitMinis as items } from '../src/cards';
import { inch } from '../src/utils';

const styles = theme => ({
  hidePrint: {
    '@media print': {
      display: 'none'
    },
  },
});

class Units extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Layout title="Units">
        <Typography style={{textAlign: 'center'}} variant="display1" gutterBottom component="h1" className={classes.hidePrint}>Units</Typography>
        <PrintSheet items={items} itemMargin={0} pageMargin={0.9} itemFormat={{
          width: 1.5 * inch,
          height: 5.25 * inch,
        }}/>
      </Layout>
    );
  }
}

Units.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Units));

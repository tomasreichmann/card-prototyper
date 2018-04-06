import React from 'react';
import PropTypes from 'prop-types';
import { range, set } from 'lodash';
import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';

import Typography from 'material-ui/Typography';

import withRoot from '../src/withRoot';

import { Layout } from '../src/Layout';
import { PrintSheet } from '../src/PrintSheet';
import { cards } from '../src/cards';

const styles = theme => ({
  hidePrint: {
    '@media print': {
      display: 'none'
    },
  },
});

class Buildings extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Layout title="Buildings">
        <Typography style={{textAlign: 'center'}} variant="display1" gutterBottom component="h1" className={classes.hidePrint}>Buildings</Typography>
        <PrintSheet items={cards} itemMargin={0} pageMargin={0.9}/>
      </Layout>
    );
  }
}

Buildings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Buildings));

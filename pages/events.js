import React from 'react';
import PropTypes from 'prop-types';
import { range, set } from 'lodash';
import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';
import shuffle from 'shuffle-array';

import Typography from 'material-ui/Typography';

import withRoot from '../src/withRoot';

import { Layout } from '../src/Layout';
import { PrintSheet } from '../src/PrintSheet';
import { eventCards as items } from '../src/cards';

const styles = theme => ({
  hidePrint: {
    '@media print': {
      display: 'none'
    },
  },
});

class Buildings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { classes } = this.props;
    const { count } = this.state;

    return (
      <Layout >
        <Typography style={{textAlign: 'center'}} variant="display1" gutterBottom component="h1" className={classes.hidePrint}>Events</Typography>
        <PrintSheet items={items} itemMargin={0} pageMargin={0.9} itemFormat="pokercard_2_3" itemLandscape/>
      </Layout>
    );
  }
}

Buildings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Buildings));

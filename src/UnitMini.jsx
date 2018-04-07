import React from 'react';
import { withStyles } from 'material-ui/styles';
import intersperse from 'intersperse';
import classnames from 'classnames';

import Paper from 'material-ui/Paper';
import { UnitCard } from './UnitCard';

import { isNull, parseCost, inch } from './utils';

const styles = (theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: `1.5in`,
    position: 'relative',
    padding: 0,
  },
  base: {
    height: '0.75in',
  },
  card: {
    flex: 1,
  },
  flipped: {
    transform: 'rotate(180deg)'
  }
});

class UnitMiniUnstyled extends React.Component {
  render() {
    const { classes, ...cardProps } = this.props;
    console.log('cardProps', cardProps);
    const card = <UnitCard {...cardProps} />;
    return (
      <Paper className={classes.root} >
        <div className={classnames(classes.base, classes.flipped)} />
        <div className={classnames(classes.card, classes.flipped)} >{card}</div>
        <div className={classes.card} >{card}</div>
        <div className={classes.base} />
      </Paper>
    )
  }
}

export const UnitMini = withStyles(styles)(UnitMiniUnstyled);

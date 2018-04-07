import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  statItem: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
  statIcon: {
    display: 'inline',
    height: '0.5cm',
    verticalAlign: 'middle',
  },
  statLabel: {
    fontWeight: 600,
    verticalAlign: 'middle',
    display: 'inline',
  },
});

class ResourceUnstyled extends React.Component {
  render() {
    const { classes, resource, amount } = this.props;
    return (
      <span className={classes.statItem} >
        <Typography component="span" className={classes.statLabel}>{amount}</Typography>
        <img className={classes.statIcon} src={`/static/${resource}.png`} />
      </span>
    )
  }
}

export const Resource = withStyles(styles)(ResourceUnstyled);

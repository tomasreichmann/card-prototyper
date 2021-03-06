import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = (theme) => ({
  statItem: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    verticalAlign: 'middle',
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
    const { classes, type, amount, relative } = this.props;
    return (
      <span className={classes.statItem} >
        { (amount || relative)
          ? <Typography component="span" className={classes.statLabel}>{relative}{amount}</Typography>
          : null
        }
        <img className={classes.statIcon} src={`/static/${type}.png`} />
      </span>
    )
  }
}

export const Resource = withStyles(styles)(ResourceUnstyled);

import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    padding: theme.spacing.unit * 4,
  },
  flex: {
    flex: 1,
  },
  home: {
    marginRight: theme.spacing.unit * 2
  },
  hidePrint: {
    '@media print': {
      display: 'none'
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class LayoutUnstyled extends React.Component {
  static defaultProps = {
    children: null,
    title: null,
  }

  render() {
    const { classes, title, children } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.hidePrint} >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Link href="/" ><Typography variant="title" color="inherit" className={classes.home}>Card Prototyper</Typography></Link>
            <Link href="/buildings" ><Button color="inherit">Buildings</Button></Link>
            <Link href="/helper-cards" ><Button color="inherit">Helper cards</Button></Link>
            <Link href="/units" ><Button color="inherit">Units</Button></Link>
            <Link href="/opportunities" ><Button color="inherit">Opportunities</Button></Link>
            <Link href="/events" ><Button color="inherit">Events</Button></Link>
          </Toolbar>
        </AppBar>
        <div className={classes.main}>
          {children}
        </div>
      </div>
    );
  }
}

export const Layout = withStyles(styles)(LayoutUnstyled);

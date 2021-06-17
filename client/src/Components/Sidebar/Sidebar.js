import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
import { Link } from 'react-router-dom';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';

const drawerWidth = 120;

const styles = {
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#b71c1c',
  },
  navItem: {
    marginTop: 8,
  },
  icon: {
    color: 'white'
  }
};

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem className={classes.navItem} component={Link} to="/home">
              <ListItemText>
                <Tooltip
                  title="Home"
                  placement="top"
                >
                  <IconButton className={classes.icon}> <i className="fas fa-home" /></IconButton>
                </Tooltip>
              </ListItemText>
            </ListItem>
           
          
            <ListItem className={classes.navItem} component={Link} to="/appointments">
              <ListItemText>
                <Tooltip
                  title="Appointments"
                  placement="top"
                >
                  <IconButton className={classes.icon}><i className="fas fa-calendar-alt" /></IconButton>
                </Tooltip>
              </ListItemText>
            </ListItem>
           
            <ListItem className={classes.navItem} component={Link} to="/addcar">
              <ListItemText>
                <Tooltip
                  title="Add car"
                  placement="top"
                >
                  <IconButton className={classes.icon}><i className="fas fa-taxi" /></IconButton >
                </Tooltip>
              </ListItemText>
            </ListItem>

            <ListItem className={classes.navItem} component={Link} to="/dealers">
              <ListItemText>
                <Tooltip
                  title="Dealers"
                  placement="top"
                >
                  <IconButton className={classes.icon}><i className="fas fa-search"/></IconButton >
                </Tooltip>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    );
  }
}

export default withStyles(styles)(Sidebar);

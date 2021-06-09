// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Link from '@material-ui/core/Link';

import { router } from 'react-router-dom';

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexWrap: 'wrap',
  }),
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft: 20,
  },
  logItem: {
    marginTop: 20,
  },
  button: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#33658A',
    color: 'white',
  },
});

// Dealer info component on the Dealers and clinics page.
class DealerInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <List className={classes.logItem} key={this.props.id}>
          <ListItem>
            <ListItemText >
              <b>Dealer Name:</b> {this.props.DealerFirstName} {this.props.DealerLastName}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText >
              <b>Dealer Address:</b> {this.props.DealerClinic}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText >
              <b>Phone:</b> {this.props.DealerPhone}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText >
              <b>Time:</b> 9:00 AM to 5:00 PM, overnight maintainance available (weekdays only)
            </ListItemText>
          </ListItem>
          <ListItem>
            <Link size="large" 
                className={classes.button} 
                onClick={this.props.handleFormSubmit}
                color="secondary" 
                variant="raised" href={`/newappointment/${this.props.id}`} > Book Appointment </Link>
          </ListItem>
          <ListItem>
          </ListItem>
        </List>
        <Divider className={classes.divider} />
      </div>
    );
  }
}

export default withStyles(styles)(DealerInfo);

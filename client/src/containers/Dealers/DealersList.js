// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'gray',
  }),
  button: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#760c0e',
    color: 'white',
  },
});

class DealerList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Paper className={classes.root} elevation={4} id={this.props.id} key={this.props.key}>
          <Typography component="p">
            <b>Name:</b> {this.props.dealerName}
          </Typography>
          <Typography component="p">
            <b>Address:</b> {this.props.dealerAddress}
          </Typography>
          <Typography component="p">
            <b>Phone No:</b> {this.props.dealerPhoneNo}
          </Typography>
          <Typography component="p">
            <b>pickUp Available:</b> {this.props.dealerpickup}
          </Typography>
          <Typography component="p">
            <b>DropOff Available:</b> {this.props.dealerdropOff}
          </Typography>
          <Typography component="p">
            <b>Overnight Available:</b> {this.props.dealerOvernightAvailability}
          </Typography>
          
          <Button size="small" href={`/newappointment/${this.props.id}`}  color="primary" variant="raised" className={classes.button} >Book Appointment</Button>
        </Paper>
    );
  }
}
export default withStyles(styles)(DealerList);

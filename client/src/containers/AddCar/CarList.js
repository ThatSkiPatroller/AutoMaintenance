// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import recommendData from '../../recommendData'

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
  }),
  button: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#33658A',
    color: 'white',
  },
});

class CarList extends React.Component {

  getRecommendations = id => {
    console.log("in" + id)
    console.log("in" + recommendData)

    if (id >= 3000  && id < 10000) {
      return recommendData.at5000;
    } else if (id >= 10000  && id <= 36000) {
      return recommendData.at10000;
    } else if (id >= 36000  && id < 50000) {
      return recommendData.at36000;
    } else if (id >= 50000  && id < 60000) {
      return recommendData.at250000;
    } else if (id >= 60000  && id < 100000) {
      return recommendData.at60000;
    } 
    else if (id >= 100000  && id < 125000) {
      return recommendData.at100000;
    } else if (id >= 125000  && id < 180000) {
      return recommendData.at125000;
    } else if (id >= 180000  && id < 250000) {
      return recommendData.at180000;
    } else if (id >= 250000) {
      return recommendData.at250000;
    } else {
      return recommendData.good
    }
  }
  viewRecommendations = id => {
    console.log(id)
    let message = this.getRecommendations(id)
    console.log(message)

    confirmAlert({
      title: 'Recommendation based on Mileage',
      message: message,
      buttons: [
        {
          label: 'Ok, Thank You!',
        }
      ]
    });
  };
  
  
  render() {
      const { classes } = this.props;
      /*const recommendations = {
        good: 'All Good!!',
        at5000: 'Schedule an oil change every 5,000 miles. If you drive an older, less efficient vehicle, the owner’s manual might recommend oil changes every 3,000 miles. Opt for synthetic oil, which has a longer lifespan than conventional motor oil. Change the oil filter, too.',
        at10000: 'Rotate the tires. Continue rotating the tires every 10,000 miles to ensure even wear and to prolong the life of the treads.',
        at36000: 'Whether you bought new or used, your manufacturer’s warranty likely expires after 36,000 miles. Take the car in for a checkup to make sure all of the systems covered under the “bumper to bumper” warranty, which may include suspension, heating and air conditioning and car audio, are in good working order. The brakes should also be inspected.',
        at50000: 'The 50,000-mile service is a particularly important milestone in your car maintenance schedule. When your car hits 50,000 miles, you’ll need to replace worn parts such as brake pads; install a new fuel filter; and drain and replace the automatic transmission fuel and filter. The exhaust system, muffler, catalytic converter and suspension components should also be inspected and worn parts should be swapped out. If your car is used car, make sure you ask for maintenance records so you know which services have been completed. Head to the mechanic to take care of the rest, depending on the mileage.',
        at60000: 'All of the belts, valves and hoses should be inspected for wear and replaced, if needed. It’s also time to replace the spark plugs and install new tires.',
        at100000: 'Add high-mileage coolants and spark plugs. Schedule a thorough inspection that includes assessments of the transmission, water pump, timing belt and other components that start to fail as the vehicle hits this “high mileage” milestone.',
        at125000: 'It’s time to change the O2 sensors and inspect the air conditioning compressor and belt tensioner, installing new parts as needed. Replace the coolant, fuel filter, brake fluid, shocks and struts, monitor the suspension, and get a vehicle alignment.',
        at180000: ' Inspect the seals on the vehicle’s axles and drive shafts and replace those that are leaking. Also clean the airflow sensor, inspect the timing chain and engine and transmission mounts, and change the power steering fluid.',
        at250000: 'Clean the fuel injectors, inspect the chassis and check the catalytic converter for damage to ensure the car isn’t releasing harmful pollutants.'
      };*/
      
      
     
      return (
        <Paper className={classes.root} elevation={4} id={this.props.id} key={this.props.key}>
          <Typography component="p">
            <b>Name:</b> {this.props.carName}
          </Typography>
          <Typography component="p">
            <b>Make:</b> {this.props.carMake}
          </Typography>
          <Typography component="p">
            <b>Model:</b> {this.props.carModel}
          </Typography>
          <Typography component="p">
            <b>Year:</b> {this.props.carYear}
          </Typography>
          <Typography component="p">
            <b>Mileage:</b> {this.props.carMileage}
          </Typography>
          <Typography component="p">
            <b>Recommendations:</b> 
          </Typography>
          <Button size="small" color="primary" variant="raised" className={classes.button} onClick={() => { this.props.deleteCar(this.props.id); }}>Remove</Button>

          <Button size="small" id={this.props.carMileage} color="primary" variant="raised" className={classes.button} onClick={() => { this.viewRecommendations(this.props.carMileage); }}>View Recommendations</Button>

        </Paper>
    );
  }
}

// Export PrescriptionList component with styling.
export default withStyles(styles)(CarList);

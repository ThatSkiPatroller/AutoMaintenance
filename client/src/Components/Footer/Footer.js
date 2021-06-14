// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    width: 500,
  },
  copyright: {
    marginTop: 10,
    backgroundColor: '#33658A',
    backgroundColor: 'black',
    color: 'white',
  },
  footerContent: {
    backgroundColor: 'black',
    position: 'fixed',
    left: 0,
    bottom: 0,
     backgroundColor: '#212529',
    color: 'white',
    height: 40,
 
  },
  button: {
    color: 'white',
    float: 'right',
    marginBottom: 60,
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className="footer">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.footerContent}>
            AutoWizard <i class="fas fa-magic"></i>
          </Typography>
          <Typography component="p" className={classes.footerContent}>
          </Typography>
          <Typography component="p" className={classes.copyright}>
            Copyright &copy; 2018
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

// Exporting the footer component with styling.
export default withStyles(styles)(Footer);

// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className="footer">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className="footer-content">
            Auto Maintainance
          </Typography>
          <Typography component="p" className="footer-content">
          </Typography>
          <Typography component="p" className="copyright">
            Copyright &copy; 2021
          </Typography>
        </CardContent>
      </Card>
      </React.Fragment>
      
    );
  }
}

// Exporting the footer component with styling.
export default Footer;

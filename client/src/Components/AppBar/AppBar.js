// Importing React since we are using React.
import React from 'react';
// Importing AppBar
// The app bar, formerly known as the action bar in Android,
// is a special kind of toolbar that’s used for branding, navigation, search, and actions.
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
// Importing material-ui-next styling.
import { withStyles } from 'material-ui/styles';
// Importing HamburgerMenu component.
import HamburgerMenu from './HamburgerMenu';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// Import axios
import axios from 'axios';
import './appbar.css';

// material-ui-next styling
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    fontSize: 35,
    marginTop: 20
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    color: 'white',
    marginTop: 20
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <HamburgerMenu className={classes.menuButton} aria-label="Menu" />
      
            <svg class="ag-loader-car_img" width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.7692 14.8401V12.908C42.7692 12.908 42.7692 12.0459 42.7692 11.6111H42.7762V11.1733C42.7762 9.66273 41.4468 8.43941 39.8045 8.43941H31.4184C31.4184 8.43941 25.4177 0.495601 25.4151 0.492077C25.4151 0.492077 24.7957 -0.331685 24.0698 0.152442C23.4575 0.560799 23.9909 1.48059 24.0883 1.64006L27.1996 5.83333L24.6191 8.42708L13.0652 8.42929C13.7428 8.3566 14.274 7.78966 14.274 7.09232C14.274 6.34609 13.6679 5.7417 12.9225 5.7417H6.91697C6.17074 5.7417 5.56547 6.34609 5.56547 7.09232C5.56547 7.83855 6.17074 8.44382 6.91697 8.44382H6.98393C3.76332 8.61694 1.20261 11.2759 1.20261 14.5397C1.20261 14.6397 1.22683 14.7313 1.23212 14.8308L0 14.8401V17.2502C0 18.1012 0.427305 18.5299 1.28235 18.5299H2.46027C2.56247 17.096 3.22192 15.8731 4.4329 14.8648C5.64608 13.8595 7.00332 13.356 8.50724 13.356C10.0107 13.356 11.3763 13.8595 12.6067 14.8648C13.8362 15.8731 14.5018 17.096 14.6044 18.5299H29.3952C29.4982 17.096 30.1639 15.8731 31.3938 14.8648C32.6232 13.8595 33.9906 13.356 35.4928 13.356C36.9963 13.356 38.3535 13.8595 39.5667 14.8648C40.779 15.8731 41.438 17.096 41.5397 18.5299H42.7177C43.5718 18.5299 44 18.1008 44 17.2502V14.8401H42.7692ZM15.9066 12.5001C15.418 12.5001 15.0225 12.1049 15.0225 11.616C15.0225 11.127 15.418 10.7314 15.9066 10.7314C16.3951 10.7314 16.7907 11.1266 16.7907 11.616C16.7907 12.1045 16.3951 12.5001 15.9066 12.5001Z" fill="white"/>
              <path d="M32.5222 16.5537C33.3301 15.7625 34.3116 15.3608 35.4411 15.3608C36.6031 15.3608 37.6035 15.7625 38.415 16.5537C39.2251 17.3519 39.6361 18.343 39.6361 19.5016C39.6361 20.632 39.2255 21.6161 38.415 22.4244C37.6053 23.2372 36.6053 23.6482 35.4411 23.6482C34.3116 23.6482 33.3266 23.2367 32.5187 22.4253C31.7099 21.617 31.2984 20.6337 31.2984 19.5016C31.2989 18.3417 31.7099 17.3501 32.5222 16.5537ZM34.2129 20.7377C34.5516 21.0795 34.9627 21.2452 35.4411 21.2452C35.9203 21.2452 36.3305 21.0795 36.6714 20.7377C37.0133 20.395 37.1828 19.9866 37.1828 19.5016C37.1828 19.0272 37.0133 18.6184 36.6714 18.2765C36.3305 17.9347 35.9203 17.7598 35.4411 17.7598C34.9627 17.7598 34.5512 17.9343 34.2129 18.2765C33.871 18.6184 33.6993 19.0272 33.6993 19.5016C33.6993 19.9866 33.871 20.395 34.2129 20.7377Z" fill="white"/>
              <path d="M11.4773 16.5537C10.6702 15.7625 9.68788 15.3608 8.5584 15.3608C7.39676 15.3608 6.39636 15.7625 5.58405 16.5537C4.7757 17.3519 4.36294 18.343 4.36294 19.5016C4.36294 20.632 4.77438 21.6161 5.58405 22.4244C6.39416 23.2372 7.39368 23.6482 8.5584 23.6482C9.68832 23.6482 10.672 23.2367 11.4804 22.4253C12.2905 21.617 12.7006 20.6337 12.7006 19.5016C12.7006 18.3417 12.2905 17.3501 11.4773 16.5537ZM9.787 20.7377C9.44736 21.0795 9.03725 21.2452 8.55797 21.2452C8.07913 21.2452 7.669 21.0795 7.32804 20.7377C6.98532 20.395 6.81617 19.9866 6.81617 19.5016C6.81617 19.0272 6.98532 18.6184 7.32804 18.2765C7.669 17.9347 8.07913 17.7598 8.55797 17.7598C9.03725 17.7598 9.44692 17.9343 9.787 18.2765C10.1288 18.6184 10.2998 19.0272 10.2998 19.5016C10.2998 19.9866 10.1293 20.395 9.787 20.7377Z" fill="white"/>
            </svg>
            <span class="ag-loader-car_text cabrio-text">
              <Typography variant="title" color="inherit" className={classes.flex} component={Link} to="/home">
                AutoWizard <i class="fas fa-magic"></i>
              </Typography>
            </span>
            
            <Button className={classes.button} onClick={() => {
              axios.post('/Auth/logout').then(data => console.log(data))
                .then((res) => {
                window.location = '/';
              });
            }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Exporting the NavBar component with styling.
export default withStyles(styles)(NavBar);

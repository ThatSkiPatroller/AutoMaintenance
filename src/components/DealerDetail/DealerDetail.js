import React, { useState, useEffect } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import UserService from '../services/user.service';
import classes from "./style.css";
import dealerData from '../../dealerData';

const DealerDetail = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

    const dealers  = dealerData[1]
    console.log(dealers)

 // const { user: currentUser } = useSelector(state => state.auth);

 /* if (!currentUser) {
    return <Redirect to="/login" />;
  }*/
  const { id } = useParams();
  /*useEffect(() => {
    UserService.getDoctor(id).then(
      response => {
        setLoading(false);
        setContent(response.data);
      },
      error => {
        setLoading(false);
        const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();

        setContent(message);
      },
    );
  }, []);*/

  return (
    <div className="container">
     
      <p> {content}</p>
      <div className={classes.Doctor}>
        <img src={dealers.image} alt={dealers.name} className="img" />
        <div>
          <h2>
            {dealers.name}
          </h2>
          <p className={`${classes.badge} ${classes.badgeSecondary}`}>
            Appointment Fee &nbsp;&nbsp;&nbsp;&nbsp; $ 300
          </p>
          <p className={classes.badge}>
            Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {dealers.address}
          </p>
          <p className={`${classes.badge} ${classes.badgeSecondary}`}>
            Phone No: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {dealers.phoneNo}
          </p>
          <li>
            <Link
              to={{
                pathname: '/booking/new',
                doctorId: content.id,
              }}
              className={classes.btn}
            >
              Add Appointment
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default DealerDetail;

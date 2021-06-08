import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import SocialIcons from '../UI/SocialIcons';
import 'react-multi-carousel/lib/styles.css';
import dealerData from '../../dealerData';
import classes from "./style.css";

const Dealers = () => {
 const { user: currentUser } = useSelector(state => state.auth);
  const { doctors } = useSelector(state => state.user);
  const { message } = useSelector(state => state.message);
  const [loading] = useState(false);
  const [successful] = useState(false);
console.log(dealerData)

const dealers  = dealerData
console.log(dealers)
 /*if (!currentUser) {
    return <Redirect to="/login" />;
  }*/
  const doctorsList = dealers.map(dealer => (
    <div key={dealer.id}>
      <Link to={`/dealers/${dealer.id}`} className={classes.Doctors}>
        <div className="d-flex flex-column align-items-center">
          <img src={dealer.image} alt={dealer.name} className={`rounded-circle img`} />
          <h5 className={`text-dark p-4`}>{dealer.name}</h5>
          <p className="text-secondary mt-3">
            <strong>Address:&nbsp;</strong>
            {dealer.address}
          </p>
          <p>
          <strong>Phone No:&nbsp;</strong>
            {dealer.phoneNo}
          </p>
        </div>
      </Link>
      <SocialIcons />
    </div>
  ));
  return (
    <div className="container text-center">
      <div>
        <h3>LIST OF DEALERS</h3>
        <p className="text-secondary">Please select a dealer to view details</p>
      </div>
      {loading && <span className="spinner-border spinner-border-lg" />}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {doctorsList}
      </Carousel>
      {message && (
        <div className="form-group">
          <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dealers;

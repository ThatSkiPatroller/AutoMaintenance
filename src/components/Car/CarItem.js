import React from 'react';
import { Link } from 'react-router-dom';
//import { Icon, Badge,Tag } from 'antd';
import LazyLoad from 'react-lazyload';

//props coming from App.js
const CarItem = ({ _id, imageUrl, name, description, category, likes, rating, price }) => {
  return (
    <div className='col-lg-4 col-md-12 col-sm-12 animated fadeIn delay-1s'>
      <div className='card card-cascade narrower mb-5'>
        {/* Card image */}
        <div className='view view-cascade overlay'>
          <LazyLoad height={200} offset={100}>
            <img
              className='card-img-top img-shadow'
              src={imageUrl}
              alt='Cardp'
              height='300'
            />
          </LazyLoad>
          <a>
            <div className='mask rgba-white-slight' />
          </a>
        </div>
        <a className='btn-floating btn-action ml-auto mr-4'>
         
        </a>
        <li className='nav-item list-unstyled'>
          <p className='nav-link text-success' data-toggle='tab' href='#panel87' role='tab'>
            <i className='fas fa-star mr-1' aria-hidden='true'></i> {rating}
          </p>
        </li>
        {/* Card content */}
        <div className='card-body card-body-cascade'>
          {/* Label */}
          <h5 className='pink-text pt-1 d-flex justify-content-start'>
           
            <p className='ml-2'>{category}</p>
          </h5>
          {/* Title */}
          <h4 className='font-weight-bold card-title'>{name}</h4>
          
          {/* Text */}
          <p className='card-text text-truncate'>{description}</p>
          {/* Button */}
          <Link to={`/cars/${_id}`}>
            <button
              type='button'
              className='btn btn-outline-info btn-rounded waves-effect shadow-none'
            >
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarItem;

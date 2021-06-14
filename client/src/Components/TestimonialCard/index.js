import React from "react";
import "./style.scss";
export default function TestimonialCard(props) {
  return (
    <div>
      <div className="gtco-testimonials">
        <div className="owl-carousel owl-carousel1 owl-theme">
          <div>
            <div className="card text-center">
              <div className="card-img-top">
                <img className="card-img-top" src={props.img} alt="user-img" />
              </div>
              <div className="card-body">
                <h5>
                  {props.name}
                  <br />
                  <span>📍 {props.city}</span>
                </h5>
                <p className="card-text">
                  {props.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

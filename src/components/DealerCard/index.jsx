import React from 'react'

export default function DealerCard() {

    return (
        <div className="card" style={{width: "18rem", float: "right"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">5 Star Repair</h5>
          <p className="card-text">Awesome local repair shop that has been in business for over 20yrs!</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Update Availability</a>
          <a href="#" className="card-link">Update Services</a>
        </div>
      </div>
    )
}

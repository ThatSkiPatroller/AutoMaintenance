import React, { useState } from "react";

export default function Services(props) {
  const [offered, setOffered] = useState(false);



  return (
    <div>
      <ul className="list-group">
        {props.services.map((service) => (
          <li className="list-group-item" key={service.id}>
            {service.name} - {offered}
            <button>
              x
            </button>
          </li> 
        ))}
      </ul>
      <ul className="list-group-2">
        {props.addedServices.map((service) => (
          <li className="list-group-item-2" key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
}

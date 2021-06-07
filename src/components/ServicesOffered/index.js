import React from "react";
import Services from "../Services/index";

export default function ServicesOffered() {
  const addedServices = [];
  const services = [
    {
      id: 1,
      name: "Oil Change",
      offered: true,
    },
    {
      id: 2,
      name: "Tire Roatation",
      offered: true,
    },
    {
      id: 3,
      name: "Wheel Alignment",
      offered: false,
    },
    {
      id: 4,
      name: "Belts & Hoses",
      offered: false,
    },
    {
      id: 5,
      name: "Battery Change",
      offered: false,
    },
    {
      id: 6,
      name: "Windshield Repair",
      offered: true,
    },
  ];
  return (
    <div className="card" style={{width: "18rem"}}>
      <h2>Auto Maintenance Services Offered</h2>
      <Services services={services} addedServices={addedServices} />
    </div>
  );
}

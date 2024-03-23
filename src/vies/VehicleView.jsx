import React from 'react'
import './VehicleView.css'

function VehicleView({vehicle}) {
  return (
    <div className="VehiclesView">
    <h1>{vehicle.name}</h1>
    <h2>{vehicle.description}</h2>
    </div>
  );
}

export default VehicleView;

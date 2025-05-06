import React from "react";

function DestinationCard({ destination }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    }}>
      <img src={destination.image} alt={destination.name} style={{ width: "100%", borderRadius: "10px" }} />
      <h2>{destination.name}</h2>
      <h3>{destination.location}</h3>
      <p>{destination.description}</p>
      <h4 style={{ color: "green" }}>{destination.price}</h4>
    </div>
  );
}

export default DestinationCard;

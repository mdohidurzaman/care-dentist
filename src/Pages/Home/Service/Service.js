import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();
  const navigateToServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>
        <strong>Price: ${price}</strong>
      </p>
      <p>
        <small>{description}</small>
      </p>
      <button
        className="btn btn-primary"
        onClick={() => navigateToServiceDetails(id)}
      >
        Book Now
      </button>
    </div>
  );
};

export default Service;

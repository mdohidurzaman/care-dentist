import React from "react";
import "./ServiceDetails.css";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceid } = useParams();
  return (
    <div className="service-details">
      <h2>Welcome to Our Service: {serviceid}</h2>
      <Link to="/checkout">
        <button className="btn btn-primary my-5">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetails;

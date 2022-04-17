import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceid } = useParams();
  return (
    <div>
      <h2>Welcome to Our Service: {serviceid}</h2>
      <Link to="/checkout">
        <button className="btn btn-primary">Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetails;

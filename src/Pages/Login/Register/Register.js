import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="register-form">
      <h2 className="text-primary m-5 text-center">
        Register to Care Dentist!
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          required
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <input
          className="btn btn-primary w-25 mx-auto d-block"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Have an Account ?{" "}
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={navigateToLogin}
        >
          Please Login.
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;

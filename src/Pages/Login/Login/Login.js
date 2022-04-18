import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef(" ");
  const passwordRef = useRef(" ");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  let errorMessage;
  if (error) {
    errorMessage = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="contianer w-50 mx-auto">
      <h1 className="text-primary mt-5 text-center">Login to Care Dentist!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="w-25 d-block mx-auto m-2"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorMessage}
      <p>
        New to Car Services ?
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={navigateToRegister}
        >
          Please Register.
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;

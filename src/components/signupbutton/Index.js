import React from "react";
import { useNavigate } from "react-router-dom";
import "./Index.css";

const SignupButton = ({ text = "Login/Sign Up"}) => {
  const navigate = useNavigate();
  return (
    <button className="signup-btn" onClick={() => navigate("/login")}>
      <span className="btn-text">{text}</span>
      <span className="btn-glow"></span>
    </button>
  );
};

export default SignupButton;

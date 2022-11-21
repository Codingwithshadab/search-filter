import React from "react";
import "./Login.css";

function Login(props) {
  return (
    <>
      <div className="topHeader">
        <div className="container">
          <div className="login">
            <button className="btn btn-primary" onClick={props.handleLogin}>
              {props.isActive ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Login;

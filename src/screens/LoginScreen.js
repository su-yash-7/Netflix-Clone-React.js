import React from "react";
import "./styles/LoginScreen.css";
function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">
        <>
          <h1>Unlimited movies, TV shows and more.</h1>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;

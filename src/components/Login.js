import React from "react";
import "../styles/loginPage.css";

const Login = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form action="">
        <h3>
          Welcome Back!
          <span>Login to your account.</span>
        </h3>

        <label for="username">Username</label>
        <input type="text" id="username" />
        {/* <input type="text" placeholder="For ex. CodingArtist" id="username"> */}

        <label for="password">Password</label>
        <input type="text" id="password" />
        {/* <input type="password" placeholder="Minimum 6 characters" id="password"> */}
      </form>
    </>
  );
};

export default Login;

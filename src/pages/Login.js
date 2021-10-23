import React from 'react';

import logo from '../images/remote_optimal_logo.png';
import '../css/Login.css';

const Login = () => {
  const login = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login__container">
      <div className="login__inner__container">
        <img src={logo} />
        <h1>
          Sign in to Remote <span>Optimal</span>
        </h1>
        <button onClick={(e) => login(e)}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;

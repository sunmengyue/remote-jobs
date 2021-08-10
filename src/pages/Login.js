import React from 'react';
import { auth, provider } from '../firebase';
import logo from '../images/remote_optimal_logo.png';
import '../css/Login.css';

const Login = () => {
  const login = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login__container">
      <div className="login__inner__container">
        <img src={logo} alt="login logo" />
        <h1>
          Sign in to{' '}
          <span>
            Remote <span className="optimal">Optimal</span>
          </span>
        </h1>
        <button onClick={(e) => login(e)}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;

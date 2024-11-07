import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google Login Success:', response);
  };

  const handleGoogleLoginFailure = (response) => {
    console.error('Google Login Failure:', response);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Đăng nhập</h1>
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn-login" onClick={handleLogin}>
            Đăng nhập
          </button>
          <div className="divider">
            <span>hoặc</span>
          </div>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Đăng nhập bằng Google"
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy={'single_host_origin'}
            className="google-login-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

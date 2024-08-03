import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="logo">Monstack</h1>
      <h2>Faça seu Login</h2>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="forgot-password">
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register">
          <span>Não tem uma conta? <a href="#">Cadastre-se</a></span>
        </div>
        <div className="separator">Ou</div>
        <button type="button" className="google-login">Login com Google</button>
      </form>
    </div>
  );
};

export default Login;

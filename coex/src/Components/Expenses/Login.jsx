import React from "react";
import Logo from "../UI/Logo";
import Input from "../UI/Input";
import "./Login.css";
const Login = () => {
  return (
    <div className="loginMain">
      <div className="loginLogo">
        <Logo />
        <h2>COEXE HOŞGELDİNİZ</h2>
        <h5>Ortak hesap tutmak artık çok kolay</h5> 
      </div>
      
      <div className="loginForm">
      Kayıt Ol
        <Input type="text" placeholder="İsminiz" />
        <Input type="email" placeholder="E-mail adresiniz" />
        <Input type="password" placeholder="Şifreniz" />
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import bcrypt from 'bcryptjs';
import logoKoala from "./KoalaLogoNew.png";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  const checkValue = async (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
  
    try {
      const response = await fetch('http://localhost:3333/api/usuarios/gustavo@gmail.com');

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      alert("email = " + data.email);
      alert("senha = " + data.password);
      const matchPass = await bcrypt.compare(pass, data.password);
      return matchPass;
    } catch (erro) {
      console.error('Erro ao obter dados:' + erro.message);
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              Bem-Vindo
              <img src={logoKoala} alt="logoKoala" />
            </span>
            <div className="wrap-input">
              <input
                type="email"
                className={`input ${email !== "" ? 'has-val' : ''}`}
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                type="password"
                className={`input ${pass !== "" ? 'has-val' : ''}`}
                value={pass}
                required
                onChange={e => setPass(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={(e) => checkValue(e)}>Login</button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a href="google.com" className="txt2">Clique aqui!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

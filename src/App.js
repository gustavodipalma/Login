import React, { useState } from "react";
import bcrypt from 'bcryptjs';
import logoKoala from "./KoalaLogoNew.png";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  //const checkValue = async (e) => {
    async function checkValue(e){
    e.preventDefault(); // Impede o comportamento padrão do formulário
  
    try {
      const response = await fetch('http://localhost:3333/api/usuarios/gustavo@gmail.com');
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }
      console.log(response.status);
      const data = await response.json();
      console.log(data.password);
      const matchPass = await bcrypt.compare(pass, data.password);
      console.log(matchPass);
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
              <button className="login-form-btn"
                onClick={async (e) => {
                  const result = await checkValue(e);
                  result
                    ? alert("Login com sucesso")
                    : alert("Email ou senha não confere")
                }
                }>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

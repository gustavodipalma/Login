import logoKoala from "./KoalaLogoNew.png"
import "./styles.css"
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return(
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              Bem-Vindo
              <img src={logoKoala} alt="logoKoala"/>
            </span>
            <div className="wrap-input">
              <input 
              type="email"
              className={email !== "" ? 'has-val input' : 'input'}
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input 
              type="password"
              className={pass !== "" ? 'has-val input' : 'input'}
              value={pass}
              required
              onChange={e => setPass(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={()=>alert("Email = " + email + " Pass = " + pass)}>Login</button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a href="google.com" className="txt2">Clique aqui!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default App;

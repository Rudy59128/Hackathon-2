import React from "react";
import "./Login.css";
import logo from "../assets/logo.svg";

function Home() {
  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder" />
        <form method="post">
          <img className="logo" src={logo} alt="" />
          <h2 className="text-center">
            <strong>CONNEXION</strong>
          </h2>

          <div className="form-group">
            <div className="form-group-email">
              <label className="formulaire">
                Email
                <input className="form-control" type="email" name="email" />
              </label>
            </div>
            <div className="form-group-password">
              <label className="formulaire">
                Mot de passe
                <input
                  className="form-control"
                  type="password"
                  name="password"
                />
              </label>
            </div>
            <div className="form-group-button">
              <button className="btn" type="submit">
                Se connecter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder" />
        <form method="post">
          <div className="text-pic" />
          <h2 className="text-center">
            <strong>CONNEXION</strong>
          </h2>

          <div className="form-group">
            <div className="form-group-email">
              <label>
                Email
                <input className="form-control" type="email" name="email" />
              </label>
            </div>
            <div className="form-group-password">
              <label>
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

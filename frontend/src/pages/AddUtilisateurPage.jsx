import React from "react";
import "./AddSmartphonePage.modules.css";

const AddUtilisateurPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Ajout d'un utilisateur</h1>
      <form onSubmit={handleSubmit} className="parent">
        <div className="div1">
          <label>
            Nom: <br />
            <input type="text" name="brand" placeholder="Nom" />
          </label>
        </div>
        <div className="div2">
          <label>
            Prénom: <br />
            <input type="text" name="model" placeholder="Prénom" />
          </label>
        </div>
        <div className="div3">
          <label>
            E-mail: <br />
            <input type="text" name="storage" placeholder="E-mail" />
          </label>
        </div>
        <div className="div4">
          <label>
            N° de matricule: <br />
            <input type="text" name="ram" placeholder="N° de matricule" />
          </label>
        </div>
      </form>
      <div className="button-container">
        <button type="submit" className="submit-button">
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default AddUtilisateurPage;

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
            <input type="text" name="brand" placeholder="Entrez la marque" />
          </label>
        </div>
        <div className="div2">
          <label>
            Prénom: <br />
            <input type="text" name="model" placeholder="Entrez le modèle" />
          </label>
        </div>
        <div className="div3">
          <label>
            Email: <br />
            <input
              type="text"
              name="storage"
              placeholder="Entrez le stockage"
            />
          </label>
        </div>
        <div className="div4">
          <label>
            Mot de passe: <br />
            <input type="text" name="ram" placeholder="Entrez la RAM" />
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

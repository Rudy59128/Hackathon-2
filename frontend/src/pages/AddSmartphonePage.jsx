import React from "react";
import "./AddSmartphonePage.modules.css";

const AddSmartphone = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Ajout d'un appareil</h1>
      <form onSubmit={handleSubmit} className="parent">
        <div className="div1">
          <label>
            Marque: <br />
            <input type="text" name="brand" placeholder="Entrez la marque" />
          </label>
        </div>
        <div className="div2">
          <label>
            Modèle: <br />
            <input type="text" name="model" placeholder="Entrez le modèle" />
          </label>
        </div>
        <div className="div3">
          <label>
            Stockage: <br />
            <input
              type="text"
              name="storage"
              placeholder="Entrez le stockage"
            />
          </label>
        </div>
        <div className="div4">
          <label>
            RAM: <br />
            <input type="text" name="ram" placeholder="Entrez la RAM" />
          </label>
        </div>
        <div className="div5">
          <label>
            Système d'exploitation: <br />
            <input
              type="text"
              name="os"
              placeholder="Entrez le système d'exploitation"
            />
          </label>
        </div>
        <div className="div6">
          <label>
            Couleur: <br />
            <input type="text" name="color" placeholder="Entrez la couleur" />
          </label>
        </div>
        <div className="div7">
          <label>
            Prix maximum: <br />
            <input
              type="text"
              name="price"
              placeholder="Entrez le prix maximum"
            />
          </label>
        </div>
        <div className="div8">
          <label>
            État: <br />
            <input type="text" name="condition" placeholder="Entrez l'état" />
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

export default AddSmartphone;

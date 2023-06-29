import React, { useState } from "react";
import "./List.css";

const ListSmartphonePage = () => {
  const [filterText, setFilterText] = useState({
    smartphone: "",
    modele: "",
    stockage: "",
    ram: "",
    systemeExploitation: "",
    etat: "",
    prix: "",
  });

  const rowData = [
    {
      smartphone: "Apple",
      modele: "iPhone 12 Pro",
      stockage: "256 Go",
      ram: "6 Go",
      systemeExploitation: "iOS 14",
      etat: "Neuf",
      prix: "$1099",
    },
    {
      smartphone: "Samsung",
      modele: "Galaxy S21 Ultra",
      stockage: "128 Go",
      ram: "12 Go",
      systemeExploitation: "Android 11",
      etat: "Neuf",
      prix: "$1199",
    },
    {
      smartphone: "Google",
      modele: "Pixel 5",
      stockage: "128 Go",
      ram: "8 Go",
      systemeExploitation: "Android 11",
      etat: "Neuf",
      prix: "$699",
    },
    {
      smartphone: "OnePlus",
      modele: "OnePlus 9 Pro",
      stockage: "256 Go",
      ram: "12 Go",
      systemeExploitation: "OxygenOS 11",
      etat: "Neuf",
      prix: "$999",
    },
    {
      smartphone: "Xiaomi",
      modele: "Mi 11 Ultra",
      stockage: "256 Go",
      ram: "12 Go",
      systemeExploitation: "MIUI 12",
      etat: "Neuf",
      prix: "$1199",
    },
    {
      smartphone: "Huawei",
      modele: "P40 Pro",
      stockage: "256 Go",
      ram: "8 Go",
      systemeExploitation: "EMUI 10.1",
      etat: "Neuf",
      prix: "$899",
    },
    {
      smartphone: "LG",
      modele: "Velvet 5G",
      stockage: "128 Go",
      ram: "6 Go",
      systemeExploitation: "Android 10",
      etat: "Neuf",
      prix: "$599",
    },
    {
      smartphone: "Sony",
      modele: "Xperia 1 II",
      stockage: "256 Go",
      ram: "8 Go",
      systemeExploitation: "Android 10",
      etat: "Neuf",
      prix: "$1099",
    },
    {
      smartphone: "Motorola",
      modele: "Edge Plus",
      stockage: "256 Go",
      ram: "12 Go",
      systemeExploitation: "Android 10",
      etat: "Neuf",
      prix: "$999",
    },
    {
      smartphone: "Nokia",
      modele: "8.3 5G",
      stockage: "128 Go",
      ram: "8 Go",
      systemeExploitation: "Android 10",
      etat: "Neuf",
      prix: "$699",
    },
    {
      smartphone: "Lenovo",
      modele: "Legion Phone Duel",
      stockage: "512 Go",
      ram: "16 Go",
      systemeExploitation: "Android 10",
      etat: "Neuf",
      prix: "$999",
    },
    {
      smartphone: "Oppo",
      modele: "Find X3 Pro",
      stockage: "256 Go",
      ram: "12 Go",
      systemeExploitation: "Android 11",
      etat: "Neuf",
      prix: "$1199",
    },
    {
      smartphone: "Realme",
      modele: "Realme GT 5G",
      stockage: "128 Go",
      ram: "8 Go",
      systemeExploitation: "Android 11",
      etat: "Neuf",
      prix: "$599",
    },
    {
      smartphone: "Asus",
      modele: "ROG Phone 5",
      stockage: "256 Go",
      ram: "16 Go",
      systemeExploitation: "Android 11",
      etat: "Neuf",
      prix: "$1199",
    },
    {
      smartphone: "BlackBerry",
      modele: "Key2",
      stockage: "64 Go",
      ram: "6 Go",
      systemeExploitation: "Android 8.1",
      etat: "Neuf",
      prix: "$699",
    },
    {
      smartphone: "Honor",
      modele: "Honor 20 Pro",
      stockage: "256 Go",
      ram: "8 Go",
      systemeExploitation: "Android 9",
      etat: "Neuf",
      prix: "$799",
    },
    {
      smartphone: "ZTE",
      modele: "Axon 30 Ultra",
      stockage: "256 Go",
      ram: "12 Go",
      systemeExploitation: "Android 11",
      etat: "Neuf",
      prix: "$999",
    },
    {
      smartphone: "Vivo",
      modele: "X60 Pro Plus",
      stockage: "256 Go",
      ram: "12 Go",
      systemeExploitation: "Android 11",
      etat: "Neuf",
      prix: "$899",
    },
  ];

  const handleFilterChange = (event, column) => {
    const newFilterText = event.target.value.toLowerCase();
    setFilterText((prevFilterText) => ({
      ...prevFilterText,
      [column]: newFilterText,
    }));
  };

  return (
    <div className="container">
      <div className="ag-theme-custom">
        <table className="ag-table">
          <thead className="ag-thead">
            <tr>
              <th>
                <input
                  type="text"
                  value={filterText.smartphone}
                  onChange={(e) => handleFilterChange(e, "smartphone")}
                  placeholder="Marques..."
                />
              </th>
              <th>
                <input
                  type="text"
                  value={filterText.modele}
                  onChange={(e) => handleFilterChange(e, "modele")}
                  placeholder="Modele..."
                />
              </th>
              <th>
                <input
                  type="text"
                  value={filterText.stockage}
                  onChange={(e) => handleFilterChange(e, "stockage")}
                  placeholder="Stockage..."
                />
              </th>
              <th>
                <input
                  type="text"
                  value={filterText.ram}
                  onChange={(e) => handleFilterChange(e, "ram")}
                  placeholder="RAM..."
                />
              </th>
              <th>
                <input
                  type="text"
                  value={filterText.systemeExploitation}
                  onChange={(e) => handleFilterChange(e, "systemeExploitation")}
                  placeholder="Système d'exploitation..."
                />
              </th>
              <th>
                <input
                  type="text"
                  value={filterText.etat}
                  onChange={(e) => handleFilterChange(e, "etat")}
                  placeholder="Etat..."
                />
              </th>
              <th>
                <input
                  type="text"
                  value={filterText.prix}
                  onChange={(e) => handleFilterChange(e, "prix")}
                  placeholder="Prix..."
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row) => {
              const matchesFilters = Object.keys(filterText).every((column) => {
                const filterValue = filterText[column];
                const cellValue = row[column].toLowerCase();
                return cellValue.includes(filterValue);
              });

              if (!matchesFilters) {
                return null; // Ne pas afficher la ligne si elle ne correspond pas aux filtres
              }

              return (
                <tr key={row.smartphone}>
                  <td>{row.smartphone}</td>
                  <td>{row.modele}</td>
                  <td>{row.stockage}</td>
                  <td>{row.ram}</td>
                  <td>{row.systemeExploitation}</td>
                  <td>{row.etat}</td>
                  <td>{row.prix}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListSmartphonePage;

import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./UtilisateurNavbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.pageLinksContainer}>
        <NavLink
          to="/users/addSmartphone"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.pendingLink
          }
          end
        >
          <div className={styles.iconAndTextContainer}>
            Ajout d'un smartphone
          </div>
        </NavLink>
        <NavLink
          to="/users/listSmartphone"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.pendingLink
          }
        >
          <div className={styles.iconAndTextContainer}>
            Liste des smartphones
          </div>
        </NavLink>
      </div>
      <div className={styles.logoutContainer}>
        <Link to="/" className={styles.logoutLink}>
          <div className={styles.iconAndTextContainer}>Aide</div>
        </Link>
        <Link to="/" className={styles.logoutLink}>
          <div className={styles.iconAndTextContainer}>Déconnexion</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

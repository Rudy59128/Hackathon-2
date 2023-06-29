import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./UserNavbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>Emmaüs</div>
      <div className={styles.pageLinksContainer}>
        <NavLink
          to="/ajoutSmartphone"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.pendingLink
          }
        >
          <div className={styles.iconAndTextContainer}>
            Ajout d'un smartphone
          </div>
        </NavLink>
        <NavLink
          to="/listSmartphone"
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

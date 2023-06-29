import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./AdminNavbar.module.css";

function AdminNavbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>Emmaüs Connect</div>
      <div className={styles.pageLinksContainer}>
        <NavLink
          to="/admin/addSmartphone"
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
          to="/admin/listSmartphone"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.pendingLink
          }
        >
          <div className={styles.iconAndTextContainer}>
            Liste des smartphones
          </div>
        </NavLink>
        <NavLink
          to="/admin/addUtilisateur"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.pendingLink
          }
        >
          <div className={styles.iconAndTextContainer}>
            Ajout d'un utilisateur
          </div>
        </NavLink>
      </div>
      <div className={styles.logoutContainer}>
        <Link to="/" className={styles.logoutLink}>
          <div className={styles.iconAndTextContainer}>Log out</div>
        </Link>
      </div>
    </div>
  );
}

export default AdminNavbar;

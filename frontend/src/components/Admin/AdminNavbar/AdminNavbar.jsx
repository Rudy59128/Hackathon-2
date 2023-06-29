import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./AdminNavbar.module.css";

function AdminNavbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>Serenity</div>
      <div className={styles.pageLinksContainer}>
        <NavLink
          to="/admin/AdminAddSmartphone"
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
          to="/admin/AdminListSmartphone"
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
          <div className={styles.iconAndTextContainer}>Log out</div>
        </Link>
      </div>
    </div>
  );
}

export default AdminNavbar;

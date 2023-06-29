import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../UtilisateurNavbar/UtilisateurNavbar";
import styles from "./UtilisateurLayout.module.css";

function UserLayout() {
  return (
    <div className={styles.layoutContainer}>
      <UserNavbar />

      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import styles from "./AdminLayout.module.css";

function AdminLayout() {
  return (
    <div className={styles.layoutContainer}>
      <AdminNavbar />

      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;

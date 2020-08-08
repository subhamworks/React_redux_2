import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className={styles.ul}>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);

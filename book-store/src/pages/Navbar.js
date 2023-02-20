import styles from "@/styles/Navbar.module.css";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [searchText, setSearchText] = useState("");
  return (
    <div className={styles.navbar}>
      <div className="logo">
        <a href="/Home">
          <img
            src="https://thumbs.dreamstime.com/b/open-book-logo-book-icon-white-background-open-book-logo-book-icon-simple-vector-logo-125217776.jpg"
            alt="Book Store"
            width={200}
            height={100}
          />
        </a>
      </div>

      <div className="search-bar">
        <input
          className={styles.input}
          id="city"
          type="search"
          name="search"
          placeholder="Search..."
        />
      </div>

      <div className="icons">
        <a href="/">
          <FontAwesomeIcon icon={faUserCircle} className={styles.logo} />
        </a>

        <a href="/">
          <FontAwesomeIcon icon={faHeart} className={styles.logo} />
        </a>

        <a href="/">
          <FontAwesomeIcon icon={faShoppingCart} className={styles.logo} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

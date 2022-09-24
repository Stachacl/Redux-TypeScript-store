import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import { getNumItems } from "./cartSlice";
import { useAppSelector } from "../../app/hooks";

export function CartLink() {
    // if there are any imems - display them, othervise display the word cart

  const numItems = useAppSelector(getNumItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>🛒&nbsp;&nbsp;{ numItems ? numItems : "Cart"}</span>
    </Link>
        );
}

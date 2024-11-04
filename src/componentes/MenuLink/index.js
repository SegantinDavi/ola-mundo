import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        [styles.link, isActive ? styles.destacado : ""].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

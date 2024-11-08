import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink path={"/"}>Inicio</MenuLink>
        <MenuLink path={"/sobremim"}>Sobre mim</MenuLink>
      </nav>
    </header>
  );
}

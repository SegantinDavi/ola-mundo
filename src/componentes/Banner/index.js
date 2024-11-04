import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Ola, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Davi Gabriel, desenvolvedor
          focado em Front-End. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          className={styles.circuloColorido}
          aria-hidden={true}
          alt="circulo colorido"
        />
        <img
          src={minhaFoto}
          className={styles.minhaFoto}
          alt="foto de Davi Gabriel"
        />
      </div>
    </div>
  );
}

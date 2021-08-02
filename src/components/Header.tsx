import styles from "../styles/components/Header.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <div className={styles.logoContainer}></div>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Portfólio</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };

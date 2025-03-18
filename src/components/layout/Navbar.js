import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function toggleButton() {
    setToggleMenu(!toggleMenu);
   
  }
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.box}>
          <Link>
            <img src={logo} alt="Costs" />
          </Link>

          <BiMenu className={styles.menu} onClick={toggleButton} />
        </div>

        <ul
           className={`${styles.list} ${toggleMenu ? styles.hide : styles.open}`}

        >
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Company</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;

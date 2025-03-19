import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://github.com/ivanrods" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ivanrods/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ivanrods_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
      </ul>

      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;

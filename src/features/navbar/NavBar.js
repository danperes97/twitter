import logo from "./../../assets/twitter-logo.png";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

import {
  FaBell,
  FaHome,
  FaSearch,
  FaMailBulk,
  FaUserAlt,
} from "react-icons/fa";
import NavBarItem from "./components/NavBarItem";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <img src={logo} className={styles.twitterLogo} alt="logo" />
      <NavBarItem phrase="Página Inicial" onClick={() => navigate("/")}>
        <FaHome className={styles.twitterLogo} />
      </NavBarItem>

      <NavBarItem phrase="Buscar" onClick={() => navigate("/explore")}>
        <FaSearch className={styles.twitterLogo} />
      </NavBarItem>

      <NavBarItem
        phrase="Notificações"
        onClick={() => navigate("/notifications")}
      >
        <FaBell className={styles.twitterLogo} />
      </NavBarItem>

      <NavBarItem phrase="Mensagens" onClick={() => navigate("/messages")}>
        <FaMailBulk className={styles.twitterLogo} />
      </NavBarItem>

      <NavBarItem phrase="Perfil" onClick={() => navigate("/profile")}>
        <FaUserAlt className={styles.twitterLogo} />
      </NavBarItem>
    </div>
  );
};

export default NavBar;

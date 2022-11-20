import logo from './../../assets/twitter-logo.png'
import styles from './NavBar.module.css';
import { FaBell, FaHome, FaSearch, FaMailBulk, FaUserAlt } from 'react-icons/fa';
import NavBarItem from './components/NavBarItem';

const NavBar = () => {
  return(
    <div className={styles.navbar}>
      <img src={logo} className={styles.twitterLogo} alt="logo" />
      <NavBarItem phrase="Página Inicial">
        <FaHome className={styles.twitterLogo}/>
      </NavBarItem>

      <NavBarItem phrase="Buscar">
        <FaSearch className={styles.twitterLogo}/>
      </NavBarItem>

      <NavBarItem phrase="Notificações">
        <FaBell className={styles.twitterLogo}/>
      </NavBarItem>

      <NavBarItem phrase="Mensagens">
        <FaMailBulk className={styles.twitterLogo}/>
      </NavBarItem>

      <NavBarItem phrase="Perfil">
        <FaUserAlt className={styles.twitterLogo}/>
      </NavBarItem>
    </div>
  )
};

export default NavBar;
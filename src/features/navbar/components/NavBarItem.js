import React from 'react'
import styles from './NavBarItem.module.css'

const NavBarItem = ({children, phrase}) => {
  return (
    <div className={styles.navbarItem}>
      {children}
      <span>{phrase}</span>
    </div>
  )
}

export default NavBarItem
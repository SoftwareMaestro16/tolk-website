import { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
        <header>
          <nav className={styles.navStyle}>
            <div className={styles.leftPart}>
              <h1>Tolk</h1>
              <img className={styles.tolkLogo} src="/tolklogo.jpg" alt="Tolk Logo" />
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
            <div className={`${styles.rightPart} ${menuOpen ? styles.menuOpen : ''}`}>
                <h1>
                    <a
                    href="https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Docs
                    </a>
                </h1>
                <h1>
                    <a
                    href="https://github.com/ton-blockchain/tolk-js"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    GitHub
                    </a>
                </h1>
                <h1>
                    <a
                    href="https://marketplace.visualstudio.com/items?itemName=ton-core.tolk-vscode"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Extension
                    </a>
                </h1>
            </div>
          </nav>
        </header>
        {menuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div> 
        )}  
    </div>
  );
}

export default Header;
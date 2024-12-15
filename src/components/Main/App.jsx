import { useState } from 'react'
import styles from "./App.module.scss"
import Code from '../Code/Code'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <nav className={styles.navStyle}>
            <div className={styles.leftPart}>
              <h1>Tolk</h1>
              <img className={styles.tolkLogo} src="/tolklogo.jpg" alt="" />
            </div>
            <div className={styles.rightPart}>
              <h1>
                <a href="https://docs.ton.org/v3/documentation/smart-contracts/tolk/overview" target='_blank' rel="noopener noreferrer">Docs</a>
              </h1>
              <h1>
                <a href="https://github.com/ton-blockchain/tolk-js" target='_blank' rel="noopener noreferrer">GitHub</a>
              </h1>
              <h1>
                <a href="https://marketplace.visualstudio.com/items?itemName=ton-core.tolk-vscode" target='_blank' rel="noopener noreferrer">Extension</a>
              </h1>
            </div>
          </nav>
        </header>
      </div>

      <div className={styles.content}>
        
      <div className={styles.description}>
        <h1>Tolk</h1>
        <h2>New Level of Smart Contract Development for TON</h2>
      </div>

      <Code />

      </div>

      <br />
      <br />
      <br />
      
    </>
  )
}

export default App

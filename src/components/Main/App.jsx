import styles from "./App.module.scss"
import Code from '../CodeExample/Code'
import Header from "../Header/Header"

function App() {

  return (
    <>
      <Header />
      
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

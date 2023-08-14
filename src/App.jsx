import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import styles from './styles/colors.scss'

function App() {

  return (
    <main className={styles.app}>
      <Header />
      <Main />
    </main>
  )
}

export default App

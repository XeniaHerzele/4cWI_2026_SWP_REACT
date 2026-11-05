import styles from './App.module.css'
import Cards from './components/Cards.tsx'
import Header from './components/Header.tsx'
import FunkyGif from './components/funkygif.tsx'
import TolleListe from './components/tolleliste.tsx'

function App() {
  return (
    <>
      <Header />
      <Cards />
      <div className={styles.bottomContent}>
        <FunkyGif imageurl="https://media.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif" />
        <TolleListe />
      </div>
    </>
  )
}

export default App

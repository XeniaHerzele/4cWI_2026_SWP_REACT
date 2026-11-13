import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards.tsx'
import Header from './components/Header.tsx'
import FunkyGif from './components/funkygif.tsx'
import RandomFunFact from './components/RandomFunFact.tsx'
import TolleListe from './components/tolleliste.tsx'

function App() {
  const [isBoosted, setIsBoosted] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const statusMessage = isBoosted ? 'feeling fabulous' : 'online'

  useEffect(() => {
    if (!isBoosted) {
      return
    }

    document.title = 'Nyan Cat boost active'

    const timeoutId = window.setTimeout(() => {
      setIsBoosted(false)
      document.title = 'Nyan Cat supremacy!!'
    }, 1500)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBoosted])

  const handleBoostClick = () => {
    setClickCount((current) => current + 1)
    setIsBoosted(true)
  }

  return (
    <>
      <Header />
      <Cards />

      <section className={styles.effectPanel} aria-label="useEffect Demo">
        <div>
          <p className={styles.statusLabel}>Status</p>
          <h2 key={statusMessage} className={styles.statusMessage}>
            {statusMessage}
          </h2>
        </div>

        <div className={styles.buttonRow}>
          <button type="button" className={styles.statusButton} onClick={handleBoostClick}>
            Nyan boost +1
          </button>
        </div>

        <p className={styles.clickCounter}>Boosts: {clickCount}</p>
      </section>

      <RandomFunFact />

      <div className={styles.bottomContent}>
        <FunkyGif imageurl="https://media.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif" />
        <TolleListe />
      </div>
    </>
  )
}

export default App
